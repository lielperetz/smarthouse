import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Consumer } from '../Context'
import './room-product.css'

export default function AddRoom() {
    const [roomType, setRoomType] = useState('');
    const [roomName, setRoomName] = useState('');
    const [roomColor, setRoomColor] = useState('');

    return (
        <div>
            <select className='lvl-btn' onChange={(e) => setRoomType(e.target.value)}>
                <option value="Bedroom">Bedroom</option>
                <option value="Bathroom">Bathroom / Toilet</option>
                <option value="Kitchen">Kitchen</option>
            </select><br /><br />
            <input className='lvl-btn' type="text" maxLength={5} placeholder='Room name' onChange={(e) => setRoomName(e.target.value)} /><br /><br />
            <input className='lvl-btn' type="color" placeholder='color room' onChange={(e) => setRoomColor(e.target.value)} /><br /><br />
            <Consumer>
                {val => <Link to='/'><button className='lvl-btn' onClick={() => val({ roomType, roomName, roomColor, products: [] })}>Create</button></Link>}
            </Consumer>
        </div>
    )
}
