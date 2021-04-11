import React from 'react';
import axios from "axios"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
const Exercise=props=>{
    <tr>
        <td>{ props.exercise.username}</td>
        <td>{ props.exercise.description}</td>
        <td>{ props.exercise.duration}</td>
        <td>{ props.exercise.date.substring(0,10)}</td>
    <td>
      
        <Link to={"/edit/" + props.exercise._id}>edit</Link> ||  
         <a href="#" onClick={()=>{props.deleteExercise(props.Exercise._id)}}>delete</a>
    </td>
    </tr>
}
class  Exerciseliste extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           exercises:[]
        }
        this.deleteExercise=this.deleteExercise.bind(this)

       
    }
    componentDidMount(){
            axios.get("/exercises").then(response=>{
                this.setState({exercises:response.data})
            }).catch((error)=>{
                console.log(error)
            })
                
    }
    deleteExercise(id){
        axios.delete("/exercises" + id).then(res=>console.log(res.data))
        this.setState({exercises:this.state.exercises.filter(el=>el._id !== id)
        })
    }
    excersielist(){
        return this.state.exercises.map(currentexercise=>{
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise}
            key={currentexercise._id}/>
        })
    }
  render() {
    return (
      <div className="Exerciseliste">
<table className="table">
<thead  className="thead-light">
<tr>
    <th>username</th>
    <th>Description</th>
    <th>Duration</th>
    <th>Date</th>
    <th>Actions</th>
</tr>
</thead>
<tbody>
    {this.excersielist()}
</tbody>
</table>
      </div>
    );
  }
}

export default Exerciseliste;