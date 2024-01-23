import React, {Component} from 'react';

import './css/chatTableRow.css';


class TableRow extends Component {
    
    render() {
        return (

            <div>
                <div className='chat-ui'>
                    <p>{this.props.obj.message}</p>
                    <img src = "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg" width = "50" style={{borderRadius:'50%'}}/>
                    
                </div>
                <br/><br/><br/>
            </div>
            
            
        );
    }
}

export default TableRow;