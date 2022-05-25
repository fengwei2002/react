import React, { Component } from 'react';

class Box extends Component {
    state = {
        x: 0,
    }

    handleClickLeft = (step) => {
        this.setState({
            state: this.state.x - step,
        })
    }

    handlerClickRight = (step) => {
        this.setState({
            state: this.state.x + step,
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    hello world {this.toString()}
                </div>
                <button>
                    left
                </button>
                <button>
                    right
                </button>
            </React.Fragment>
        );
    }

    toString() {
        return `x: ${this.state.x}`
    }
}

export default Box;