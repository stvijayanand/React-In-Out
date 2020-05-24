import React from 'react'


const UserInput = (props) =>{

const {change} = props;

    return(
        <input type="text" onChange={change}></input>
    );
};


export default UserInput;