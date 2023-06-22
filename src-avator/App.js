import React, {Component} from 'react';
import UserProfile from './UserProfile';

class App extends Component{
    render () {
        const user = {
            name: "herath",
            avator: "https://i.pravatar.cc/300",
            email: "herath@mail.com",
            status: "active"
        }

        const user2 = {
            name: "herath2",
            avator: "https://i.pravatar.cc/100",
            email: "herath2@mail.com",
            status: "deactive"
        }
        return (
            <div>
                <UserProfile {...user} />                
            </div>
        );
        
    }
}

export default App;
