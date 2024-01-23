import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('htttp://localhost:5000/items/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        alert("Your itemSuccessfully Deleted....")
        window.location.replace('/adminViewService');
    }
    render() {
        return (
           <tr>
               <td>
                   {this.props.obj._id}
               </td>
               <td>
                   {this.props.obj.name}
               </td>
               <td>
                   {this.props.obj.category} 
               </td>
               <td>
                   {this.props.obj.price}
               </td>
               <td style={{display:'flex'}}>
                   <Link to={"/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                    &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;