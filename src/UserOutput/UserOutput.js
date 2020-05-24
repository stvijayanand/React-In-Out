import React from 'react'


const UserOutput = (props) => {


const style = {
    color: 'blue',
    fontStyle: 'italic'
}

const {username} = props;

    return(
        <div>
            <p>First Paragraph with username: <span style={style}>{username}</span></p>
            <p>Second</p>
        </div>
    );
};


export default UserOutput;