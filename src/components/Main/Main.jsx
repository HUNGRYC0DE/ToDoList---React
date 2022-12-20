import React from 'react';
import { useEffect, useState } from 'react'
import './Main.css'

function Main(){
    const [list, setList] = useState([])

    const handleChange = () => {
        const input_text = document.getElementById('todo-text').value
        setList([...list, input_text])
    }

    return (
            <div className='Main'>
                <div className='head'>
                    <p>TO DO LIST</p>
                </div>
                <div className='inBtn'>
                    <input className='inpot' id='todo-text' type="text" placeholder='HowUdOin'/>
                    <button className='btn' onClick={() => handleChange()}>Add</button>
                </div>
                <div className='list'>
                    <ol className='ol-list'>
                        {list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ol>
                </div>
            </div>
    )
}  
export default Main;