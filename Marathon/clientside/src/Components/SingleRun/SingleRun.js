import React from 'react';


class SingleRun extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div className='SingleRun'>
                <h1>Single Run</h1>
            </div>
        );
    };
}

export default SingleRun;