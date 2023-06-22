import React, { Component } from 'react';

class ToggleView extends Component{
    constructor (props){
        super(props);

        this.state = {
            isVisibility: false
        }

        this.handleVisibility = this.handleVisibility.bind(this);


    }

    handleVisibility(){
        this.setState({isVisibility: true});
    }

    render (){
        const {isVisibility}=this.state;
        return (
            <div>
                <button>Show</button>
            </div>
        )
    }
}

export default ToggleView;