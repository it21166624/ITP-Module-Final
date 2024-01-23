import React, {Component} from 'react';
import comma from './img/comma.png';
import './css/feedbackTableRow.css';


class TableRow extends Component {
    
    render() {
        return (

            // <div className='f'>
                <div className='f-outer'>
                    <img src = {comma} width = "30"/>
                    <br/><br/>
                    <p>
                      &nbsp;&nbsp;{this.props.obj.message}
                    </p>
                    <br/>
                    <div className='f-inner'>
                        <img src = "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg" width = "50" style={{borderRadius:'50%'}}/>
                        <div className='f-inner-inner'>
                        <h4>{this.props.obj.email}</h4>
                        <h6>{this.props.obj.type}</h6>
                        </div>
                        
                    </div>
                </div>
            // </div>
            
        );
    }
}

export default TableRow;