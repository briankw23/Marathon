import React from 'react';
import User from '../User/User';
import Run from '../Run/Run';
import Weights from '../Weights/Weights';
import UserRequest from '../../APIs/User/User';
import RunRequest from '../../APIs/Run/Run';
import WeightsRequest from '../../APIs/Weights/Weights'

class Home extends React.Component {
    state = {
        user: [],
        runs: [],
        weights: [],
    }

    componentDidMount() {
        UserRequest
            .getRequest()
            .then(user => {
                this.setState({ user });
                console.log(this.state.user);
                this.Runs();
                this.Weights();
            })
            .catch(err => {
                console.error(err, 'error getting user');
            });
    }

    Runs = () => {
        RunRequest
            .getRequest()
            .then(runs => {
                this.setState({ runs })
                console.log(this.state.runs);
            })
            .catch(err => {
                console.error(err, 'error getting runs');

            })
    }

    Weights = () => {
        WeightsRequest
            .getRequest()
            .then(weights => {
                this.setState({ weights })
                console.log(this.state.weights);
            })
            .catch(err => {
                console.error(err, 'error getting weights');
            })
    }

    render() {
        const userComponent = this.state.user.map((u) => {
            return (
                <User
                    key={u.id}
                    details={u}
                />
            );
        });

        const runComponent = this.state.runs.map((r) => {
            return (
                <Run
                    key={r.id}
                    details={r}
                />
            );
        });


        const weightsComponent = this.state.weights.map((w) => {
            return (
                <Weights
                    key={w.id}
                    details={w}
                />
            );
        });

        return (
            <div className='Home'>
                <h1>Home</h1>
                <div className='col-xs-4 col-md-4'>
                    {userComponent}
                    <div>Dashboard</div>
                </div>
                <div className='col-xs-4 col-md-4'>
                    <h1>Run</h1>
                    {runComponent}
                </div>
                <div className='col-xs-4 col-md-4'>
                    <h1>Weights</h1>
                    {weightsComponent}
                </div>
            </div>
        )
    };
}

export default Home;