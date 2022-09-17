import React from 'react'
import { useState } from 'react'
import './room-product.css'

export default function AddProduct(props) {
    const [product, setProduct] = useState('');

    const checkProducts = () => {
        let products = props.room.products;
        if (product !== '') {
            if (product === 'Stereo system' && products.filter(x => x.type === 'Stereo system').length > 0) {
                alert('ERROR!! each room can have 1 stereo system only');
            } else if (product === 'Heater' && props.room.roomType !== 'Bathroom') {
                alert('ERROR!! only bathrooms can have heaters');
            } else if (products.length === 5) {
                alert('ERROR!! each room can contain 5 products maximum')
            } else {
                props.add(props.index, product);
            }
        }
        props.show(false);
    }
    return (
        <div>
            <br />
            <select className='lvl-btn' onChange={(e) => setProduct(e.target.value)}>
                <option value="">Choose Product</option>
                <option value="Air conditioner">Air conditioner</option>
                <option value="Heater">Heater</option>
                <option value="Stereo system">Stereo system</option>
                <option value="Lamp">Lamp</option>
            </select> <br /><br />
            <button className='lvl-btn' onClick={() => checkProducts()}>Add</button>
        </div>
    )
}
