import React from 'react'
import './UserInput.css'


const UserInput = (props) =>{

const {change, username} = props;

    return(
        <div className="UserInput">
            <input type="text" onChange={change} value={username}></input>
        </div>
    );
};


export default UserInput;