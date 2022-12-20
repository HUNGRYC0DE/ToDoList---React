import React from 'react';
import './main.css'

function Main(){
    return (
            <div className='Main'>
                <div className='head'>
                    <p>TO DO LIST</p>
                </div>
                <div className='inBtn'>
                    <input className='inpot' type="text" placeholder='HowUdOin'/>
                    <button className='btn'>Add</button>
                </div>
                <div className='list'>
                    <ol className='ol-list'>
                        <li>sallam</li>
                        <li>sallam</li>
                        <li>sallam</li>
                        <li>sallam</li>
                    </ol>
                </div>
            </div>
    )
}  
export default Main;