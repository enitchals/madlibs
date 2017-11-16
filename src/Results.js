import React, { Component } from 'react';
import { connect } from 'react-redux'

class Results extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div className="results">
        <h2>Cats</h2>
            <p>Humans have been {this.props.words.shift()} cats for nearly 10,000 years. These {this.props.words.shift()}, {this.props.words.shift()} animals are currently the most popular animals in {this.props.words.shift()}.</p>
            <p>Cats were first kept because they kill stray {this.props.words.shift()}, which can destroy a family's entire {this.props.words.shift()} in just one {this.props.words.shift()}.</p>
            <p>Domestic cats come in many types, and there are breeds with both short and long {this.props.words.shift()}. Some cats are very {this.props.words.shift()}, while others are {this.props.words.shift()}.</p>
        </div>
        )}
}

const mapStateToProps = (state) => {
    return {
        words: state.words,
    };
};

export default connect(mapStateToProps)(Results);