import React from 'react';

class User extends React.Component {

    render() {
        const { details } = this.props;
        return (
            <div className='User'>
                <h1>Welcome, {details.first}</h1>
            </div>
        );
    };
}

export default User;
