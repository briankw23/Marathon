import React from 'react';

class Run extends React.Component {

    render() {
        const { details } = this.props;
        return (
            <div className='Run'>
                <h1>{details.name}</h1>
            </div>
        );
    };
}

export default Run;