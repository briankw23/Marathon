import React from 'react';
import UserRequest from '../../APIs/User/User';

class Home extends React.Component {
    state = {
        user:[],
    }

    componentDidMount() {
        UserRequest
            .getRequest()
            .then(user => {
                this.setState({ user });
                console.log(this.state.user);
            })
            .catch(err => {
                console.error(err, 'error getting user');
            });
    }

    render() {
        return (
            <div className='Home'>
             <h1>Home</h1>
            </div>
        );
    };
}

export default Home;
