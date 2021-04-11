import React from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
class CreateExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: []
        }
        this.onchangeUsername = this.onchangeUsername.bind(this)
        this.onchangeduration = this.onchangeduration.bind(this)
        this.onchangeDescription = this.onchangeDescription.bind(this)
        this.onchangeDate = this.onchangeDate.bind(this)
        this.onsubmit = this.onsubmit.bind(this)
    }
    componentDidMount() {
        axios.get("/users").then(response => {
            if (response.data.length > 0) {
                this.setState({
                    user: response.data.map(user => user.username),
                    username: response.data[0].username
                })
            }
        })
    }
    onchangeUsername(e) {
        this.setState({ username: e.target.value })
    }
    onchangeDescription(e) {
        this.setState({ description: e.target.value })
    }
    onchangeduration(e) {
        this.setState({ duration: e.target.value })
    }

    onchangeDate(date) {
        this.setState({ date: date })
    }
    onsubmit(e) {
        e.preventDefault()
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date

        }
        console.log("exercise=", exercise)
        axios.post("/exercises/add", exercise).then(res => console.log(res.data))

        window.location = "/"
    }

    render() {
        return (
            <div className="CreateExercise">
                <h1>Create new Exercise!</h1>
                <form onSubmit={this.onsubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <select ref="userInput" required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onchangeUsername}>
                            {this.state.users.map(function (user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                </option>
                            })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Descreption:</label>
                        <input type="text" required className="form-control" value={this.state.description} onChange={this.onchangeDescription} />
                    </div>
                    <div className="form-group">
                        <label>Duration(in minute:)</label>
                        <input type="text" required className="form-control" value={this.state.duration} onChange={this.onchangeduration} />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onchangeDate} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="create exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        );
    }
}

export default CreateExercise;