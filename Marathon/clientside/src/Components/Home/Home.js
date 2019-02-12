import React from 'react';
import User from '../User/User';
import Run from '../Run/Run';
import Weights from '../Weights/Weights';
import UserRequest from '../../APIs/User/User';
import RunRequest from '../../APIs/Run/Run';
import WeightsRequest from '../../APIs/Weights/Weights'
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

class Home extends React.Component {
    state = {
        user: [],
        runs: [],
        weights: [],
        totalRunTask: 0,
        completedRunTask: 0,
        actualMiles: 0,
        targetMiles: 0,
   
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

    DashboardRunComplete = () => {
        const runs = this.state.runs;
        let total = this.state.runs.length;
        let count = 0;
        let actual = 0;
        let target = 0;

        runs.forEach((x) => {
            if (x.complete) {
                count += 1;
                actual += x.actualMiles * 1;
                target += x.targetMiles * 1;

            }
        })

        this.setState({ completedRunTask: count });
        this.setState({ totalRunTask: total });
        this.setState({ actualMiles: actual });
        this.setState({ targetMiles: target });
        console.log(target);
        console.log(actual);
    }

    Runs = () => {
        RunRequest
            .getRequest()
            .then(runs => {
                this.setState({ runs })
                console.log(this.state.runs);
                this.DashboardRunComplete();
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

        const totalTask = parseInt((this.state.completedRunTask * 1 / this.state.totalRunTask * 1)*100);
        const totalTaskwidth = {
            width: `${totalTask}%`
        }
        const totalMiles = parseInt((this.state.actualMiles * 1 / this.state.targetMiles * 1) * 100);
        const totalMileswidth = {
            width: `${totalMiles}%`
        }

        return (
            <div className='Home'>
                <h1>Home</h1>
                <div className='col-xs-4 col-md-4'>
                    {userComponent}

                    <div>Dashboard</div>
                    
                    <h3>Total Run Task Complete</h3>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow={totalTask} aria-valuemin="0" aria-valuemax="100" style={totalTaskwidth}>
                            {totalTask}%
                        </div>
                    </div>

                    <h3>Total Miles Ratio</h3>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow={totalMiles} aria-valuemin="0" aria-valuemax="100" style={totalMileswidth}>
                            {totalMiles}%
                        </div>
                    </div>

                </div>
                <div className='col-xs-4 col-md-4'>
                    <h1>Run <Link to={`/Create`}><span className='glyphicon glyphicon-plus'></span></Link></h1>
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