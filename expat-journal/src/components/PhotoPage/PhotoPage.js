import React from 'react';

export default function PhotoPage(props){
    console.log('OBJ DATA:', props)
    return(
        <div>
            <section>
                {/* <img src={props.data[0].images}></img> */}
                <input type='text' name='search' placeholder='search'></input>

            </section>
        </div>
    );
};