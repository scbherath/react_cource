import React, {Component} from 'react';

import Button from './Button';
import Counter from './Counter';
import ToggleView from './ToggleView';


import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            error: null
        }
        
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {        
    }
        
    handleIncrement = () => {
        const { count } = this.state;
        if(count<10){        
            this.setState (()=> ({
                count: count + 1
            }));
            this.setState (()=> ({
                error:null
            }));
        }
    };

    handleDecrement = () => {
        const { count } = this.state;
        if (count>0) {
            this.setState (()=> ({
                count: count - 1
            }))
        }else{
            this.setState (()=> ({
                error: "can not be decrement"
            }))
        }
    };

    handleReset = () => {
        this.setState (()=> ({
            count: 0
        }))
    };

    render (){

        const {error, count} = this.state;

        return (
            <div>                
                <div className='container'>
                    <ToggleView></ToggleView>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='text-center'>
                                <h1>COUNTER</h1>
                                <Counter value={count}/>
                                {error && <p>{error}</p>}
                                <div className='row'>                                    
                                    <div className='col-md-2'>
                                        <Button label="Decrease" onClick={this.handleDecrement} colorClass="btn-info" />
                                    </div>     
                                    <div className='col-md-2'>
                                        <Button label="Reset" onClick={this.handleReset} colorClass="btn-danger"/>
                                    </div>  
                                    <div className='col-md-2'>
                                        <Button label="Increase" onClick={this.handleIncrement} colorClass="btn-success"/>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        )
    };
}

export default App