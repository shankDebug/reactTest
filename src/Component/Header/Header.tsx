import React from 'react';
import './Header.scss';

const Header =()=>{
    return(
        <div className='Header'>
                <span>Educator</span>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div>Planning</div>
                    <div>Documentation</div>
                    <div>HouseKeeping</div>
                </div>
                <div></div>
        </div>
    )
    
}

export default Header;