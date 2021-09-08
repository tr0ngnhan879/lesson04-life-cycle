import React, { Component } from 'react';

class Content extends Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps: " +nextProps.name);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: " +nextProps.name);
        return true;
    }
    
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate: " +nextProps.name);

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate: " +prevProps.name);
    }

    render() {
        return (
            <div>
                <div>{ this.props.name}</div>
            </div>
        );
    }
}

export default Content;