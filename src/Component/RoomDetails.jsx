import React, { useState } from 'react';
import AddProduct from './AddProduct';
import './room-product.css'

export default function RoomDetails(props) {
    const [flag, setFlag] = useState(false);

    const show = (b) => {
        setFlag(b)
    }
    return (
        <div>
            <h3>{props.room.roomType}</h3>
            <h3>{props.room.roomName}</h3>
            {props.room.products?.map((p, i) => {
                let c = p.condition;
                return <button className='lvl-btn' onClick={() => props.changeC(props.index, i)} style={{ backgroundColor: (c) ? 'green' : 'red' }}>{p.type}</button>
            })}
            {(flag) && <AddProduct room={props.room} index={props.index} add={props.addProduct} show={show} />}
            <br /><br />{(!flag) && <button className='lvl-btn' onClick={() => show(true)}>Add Product</button>}
        </div >
    )
}
