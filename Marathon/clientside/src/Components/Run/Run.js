import React from 'react';
//import RunRequest from '../../APIs/Run/Run';
import { Link } from 'react-router-dom';

class Run extends React.Component {
    render() {
        const { details } = this.props;
        return (
            <div className='Run'>
                <Link to={`/Run/${details.id}`}>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">{details.name}
                        <div>
                                {details.complete ? <span className='glyphicon glyphicon-ok-circle'></span> : <span className='glyphicon glyphicon-remove-circle'></span>}
                                </div>
                        </h3>
                    </div>
                    <div class="panel-body">
                        <div>
                            Date: {details.date}
                        </div>
                        <div>
                            Details:{details.description}
                        </div>
                        <div>
                            Target: {details.targetMiles}
                        </div>
                        <div>
                            Actual: {details.actualMiles}
                        </div>
                       </div>
                    </div>
                </Link>
            </div>
        );
    };
}

export default Run;