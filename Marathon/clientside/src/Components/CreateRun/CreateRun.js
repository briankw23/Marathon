import React from 'react';
import RunRequest from '../../APIs/Run/Run';


const defaultTask = {
    name: '',
    description: '',
    plannerId: '',
    date: '',
    targetMiles: '',
    actualMiles: '',
    complete: false
};



class CreateRun extends React.Component {

    state = {
        task: defaultTask,
    }

    create = (create) => {
        console.log(create);
        RunRequest
            .postRequest(create)
            .then(x => {
                //this.redirectToTarget();
            })
            .catch(err => {
                console.error(err, 'error posting run task');
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

    render() {
        return (
            <div className='CreateRun'>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form action="">
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Task Name"
                                    //value={this.state.task.name}
                                    onChange={this.nameChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Decription:</label>
                                <input type="text"
                                    className="form-control"
                                    id="description"
                                    placeholder="I am ..."
                                    //value={this.state.task.description}
                                    onChange={this.descriptionChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="date"
                                    className="form-control"
                                    id="date"
                                    //value={this.state.task.date}
                                    onChange={this.dateChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Target</label>
                                <input type="number"
                                    className="form-control"
                                    id="target"
                                    placeholder="0"
                                    //value={this.state.task.targetMiles}
                                    onChange={this.targetChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Actual</label>
                                <input type="number"
                                    className="form-control"
                                    id="actual"
                                    placeholder="0"
                                    //value={this.state.task.actualMiles}
                                    onChange={this.actualChange}
                                />
                            </div>
                            <button type="button" className="btn btn-success" onClick={(e) => this.create(this.state.task)}>
                                Submit Task
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default CreateRun;