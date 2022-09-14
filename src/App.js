import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddRoom from './Component/AddRoom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import RoomDetails from './Component/RoomDetails';
import { Provider } from './Context';

function App() {
  const [rooms, setRooms] = useState([{ roomType: 'Kitchen', roomName: 'A', roomColor: 'red', products: [] }]);

  const addRoom = (newRoom) => {
    if (newRoom.roomType === '' || newRoom.roomName.length === 0) {
      alert('ERROR!!!');
    } else {
      setRooms([...rooms, newRoom]);
    }
  }

  const addProduct = (index, productType) => {
    let temp = { condition: false, type: productType };
    rooms[index].products.push(temp);
    setRooms([...rooms]);
  }
  const changeCondition = (indexOfRoom, IndexOfProduct) => {
    rooms[indexOfRoom].products[IndexOfProduct].condition = !rooms[indexOfRoom].products[IndexOfProduct].condition;
    setRooms([...rooms])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Provider value={rooms}><Home /></Provider>} />
          <Route path='/addroom' element={<Provider value={addRoom}><AddRoom /></Provider>} />
          {rooms.map((room, index) => {
            return <Route path={`room${room.roomName}`} element={<RoomDetails room={room} index={index} addProduct={addProduct} changeC={changeCondition} />} />
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
