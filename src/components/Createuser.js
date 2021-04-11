import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
class Createuser  extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            
        }
    this.onchangeUsername=this.onchangeUsername.bind(this)
   
    this.onsubmit=this.onsubmit.bind(this)
    }

 
    onchangeUsername(e){
        this.setState({username:e.target.value})
    }
    onsubmit(e){
        e.preventDefault()
        const user={
            username:this.state.username
        }
        console.log("user=",user)
        axios.post("/users/add",user).then(res=>console.log(res.data))
     this.setState({username:""})
        }
        
  render() {
    return (
        <div className="CreateExercise">
        <h1>Create new User!</h1>
        <form onSubmit={this.onsubmit}>
            <div className="form-group">
                <label>Username:</label>
                <input required className="form-control"
                    value={this.state.username} onChange={this.onchangeUsername}/>
             
            </div>
            
           
            <div className="form-group">
                <input type="submit" value="create exercise Log" className="btn btn-primary" />
            </div>
        </form>
    </div>

);
  }
}

export default Createuser;