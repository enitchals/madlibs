import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addWord } from './actions.js';
import { Link } from 'react-router-dom';
import Results from './Results.js';

class Prompts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPrompt: 'Verb ending in -ing',
            nextPrompts: ['adjective', 'another adjective', 'place', 'animal (plural)', 'noun', 'unit of time', 'part of body (plural)', 'adjective', 'one last adjective'],
            thisResponse: '',
            complete: false,
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler = (event) => {
        this.setState({ thisResponse: event.target.value });
    }

    submitHandler = () => {
        this.props.addWord([this.state.thisResponse]);
        this.setState({thisResponse: ''});
        if(this.state.nextPrompts.length > 0) {
            this.setState({currentPrompt: this.state.nextPrompts.shift()});
        } else {this.setState({complete: true})}
    }

    enterHandler = (event) => {
        if (event.key === '13'){
            this.submitHandler;
        }
    }

    render() {
        return (
            <div className="Madlibs">
                {(this.state.complete === false)
                ? <div className="Prompt">
                    <h1>{this.state.currentPrompt}</h1>
                    <input type="text" value={this.state.thisResponse} onChange={this.changeHandler} onSubmit={this.submitHandler}/>
                    <button onClick = {this.submitHandler}>Submit</button>
                </div>
                : <Results words={this.props.words} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        words: state.words,
    };
};

export default connect(mapStateToProps, {addWord })(Prompts);