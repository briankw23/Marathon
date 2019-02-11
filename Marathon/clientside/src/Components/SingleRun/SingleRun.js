import React from 'react';
import RunRequest from '../../APIs/Run/Run'

const defaultTask = {
    name: '',
    description: '',
    date: '',
    actualsMiles: '',
    targetMiles: '',
    complete: 0,
};

class SingleRun extends React.Component {
    state = {
        task: defaultTask,
    }
    componentDidMount() {
        RunRequest
            .getSingleRequest(this.props.match.params.id * 1)
            .then(task => {
                this.setState({ task: task[0] });
            })
            .catch(err => {
                console.error(err, 'error getting run task');
            });
    }

    redirectToTarget = () => {
        this.props.history.push(`/`)
    }

    formFieldStateString = (name, e) => {
        const currentTask = { ...this.state.task };
        currentTask[name] = e.target.value;
        this.setState({ task: currentTask });
    }

    formFieldStateNumber = (name, e) => {
        const currentTask = { ...this.state.task };
        currentTask[name] = e.target.value * 1;
        this.setState({ task: currentTask });
    }

    nameChange = (e) => {
        this.formFieldStateString('name', e);
    }
    descriptionChange = (e) => {
        this.formFieldStateString('description', e);
    }
    dateChange = (e) => {
        this.formFieldStateString('date', e);
    }
    targetChange = (e) => {
        this.formFieldStateNumber('targetMiles', e);
    }
    actualChange = (e) => {
        this.formFieldStateNumber('actualMiles', e);
    }

    delete = (e, id) => {
        e.preventDefault();
        RunRequest
            .deleteRequest(id)
            .then( x => {
                this.redirectToTarget();
            })
            .catch(err => {
                console.error(err, 'error deleting run task');
            });
    }
    update = (e, id, updated ) => {
        e.preventDefault();
        RunRequest
            .updateRequest(id, updated)
            .then(x => {
                this.redirectToTarget();
            })
            .catch(err => {
                console.error(err, 'error updating run task');
            });
    }

    render() {
        return (
            <div className='SingleRun'>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form action="" onSubmit={this.submitPlayerEvent} >
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Task Name"
                                    value={this.state.task.name}
                                    onChange={this.nameChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Decription:</label>
                                <input type="text"
                                    className="form-control"
                                    id="description"
                                    placeholder="Image URL"
                                    value={this.state.task.description}
                                    onChange={this.descriptionChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="text"
                                    className="form-control"
                                    id="date"
                                    value={this.state.task.date}
                                    onChange={this.dateChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Target Miles</label>
                                <input type="number"
                                    className="form-control"
                                    id="target"
                                    placeholder="0 to 100"
                                    value={this.state.task.targetMiles}
                                    onChange={this.targetChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Actual Miles</label>
                                <input type="number"
                                    className="form-control"
                                    id="actual"
                                    placeholder="0 to 100"
                                    value={this.state.task.actualMiles}
                                    onChange={this.actualChange}
                                />
                            </div>
                            <button className="btn btn-success" onClick={(e) => this.update(e, this.state.task.id, this.state.task )}>
                                Update Task
                            </button>
                            <button className="btn btn-warning" onClick={(e) => this.delete(e, this.state.task.id)}>
                                Delete Task
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default SingleRun;