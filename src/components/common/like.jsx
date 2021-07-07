import React from 'react';

const Like = props => {
    let studentsLike = "fa fa-heart";
    if (!props.liked) studentsLike += "-o"
    return <i onClick={props.onClick} style={{cursor: 'pointer'}} className={studentsLike} aria-hidden="true"></i>;
}

export default Like;