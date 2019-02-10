import React from 'react';

class Weights extends React.Component {

    render() {
        const { details } = this.props;
        return (
            <div className='Weights'>
                <h1>{details.name}</h1>
            </div>
        );
    };
}

export default Weights;