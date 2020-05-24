import React from 'react'


const UserOutput = (props) => {

const {username} = props;

    return(
        <div>
            <p>First Paragraph with username: {username}</p>
            <p>Second</p>
        </div>
    );
};


export default UserOutput;