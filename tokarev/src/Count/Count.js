import React from 'react';

// import * as firebase from 'firebase';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }

        this.countClickHandler = this.countClickHandler.bind(this);
    }

    countClickHandler() {
        this.setState({
            value: this.state.value + 1
        });
    }

    render() {
        return(
            <div>
                <h1>state & xml parse</h1>
                <h3>Counter: { this.state.value }</h3>
                <button onClick={this.countClickHandler}>+</button>
                <p>ver {this.props.version}</p>
            </div>
        );
    }
}




// Thumbnail.propTypes = {
//     thumbListTitle: PropTypes.string.isRequired
// }

export default Count;