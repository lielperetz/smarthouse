import React from 'react'
import { Link } from 'react-router-dom'
import { Consumer } from '../../Context'
import './Home.css'
import '../room-product.css'

export default function Home() {
  return (
    <div>
      <Consumer>
        {(val) => {
          return val.map((room, index) => {
            return <Link to={`room${room.roomName}`}><div className='lvl-btn' style={{ backgroundColor: room.roomColor }}>
              {room.roomName}
            </div><br /><br /></Link>
          })
        }}
      </Consumer>
      <Link to={'/addroom'}><button className='btn' title='Add Room'>+</button></Link>
    </div>
  )
}
