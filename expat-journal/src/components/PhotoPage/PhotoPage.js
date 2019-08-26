import React from 'react';

export default function PhotoPage(props){
    console.log('OBJ DATA:', props)
    return(
        <div>
            <img src={props.dataprops.image}></img>
        </div>
    );
};