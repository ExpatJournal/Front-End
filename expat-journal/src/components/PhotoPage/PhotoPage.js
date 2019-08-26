import React from 'react';


//component import
import SideBar from '../HamburgerMenu/HamburgerMenu';

export default function PhotoPage(props){
    console.log('OBJ DATA:', props)
    return(
        <div>
            <section>
         
                <input type='text' name='search' placeholder='search'></input>

            </section>
        </div>
    );
};