import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { useState } from 'react'
import Home from './Components/Home/Home';
import Addroom from './Components/Addroom';
import Room from './Components/Room';

function App() {
  const [rooms, setRooms] = useState([])

  const addRoom = (name, type, color) => {
    if (name.length < 1) {
      return alert('error')
    } else {
      setRooms([...rooms, { name: name, type: type, color: color, products: [] }])

    }
  }

  const addProduct = (index, typeOfProduct) => {
    console.log(rooms);
    let temp = { condition: false, type: typeOfProduct }
    rooms[index].products.push(temp)
    setRooms([...rooms])
    console.log(rooms);
  }
  const changeCondition = (indexOfRoom, IndexOfProduct) => {
    rooms[indexOfRoom].products[IndexOfProduct].condition = !rooms[indexOfRoom].products[IndexOfProduct].condition
    setRooms([...rooms])
  }

  return (
    <div className="App">
      <h3>SVCollege Smart House</h3>
      <h5>Welcome!</h5>
      <h6>Add a room by clicking on the button</h6>

      <BrowserRouter>

        <Routes >
          <Route path='/' element={<Home rooms={rooms} />} />
          <Route path='/addroom' element={<Addroom addRoom={addRoom} />} />
          {rooms.map((val, index) => {
            return <Route path={`room${val.name}`} element={<Room changeCondition={changeCondition} addProduct={addProduct} index={index} type={val.type} products={val.products} />} />
          })}

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;