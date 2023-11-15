import './App.css'
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import { useState } from 'react'
import CarDetails from './components/CarDetails'
import Fragmento from './components/fragmento'


function App() {
  //const name = "Matheus"
  const [username] = useState('luciana')

  const cars = [
    {id:1, brand:"Ferrari", color:"amarelo", newCar:true, km:0},
    {id:2, brand:"KIA", color:"Vermelho", newCar:false, km:2000},
    {id:3, brand:"BMW", color:"Preto", newCar:false, km:10000}
  ]

  return (
    <>
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={username} />
      <CarDetails brand="VW" km={100000} color="azul" novo ={false} />
      <CarDetails brand="Ford" km={0} color="vermelho" novo ={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" novo ={false} />
      {cars.map((car) => (
        <CarDetails brand = {car.bran} color = {car.color} novo = {car.newCar} km ={car.km}/>
      ))}
      <Fragmento propFragment ="teste"/>
    </>
  )
}

export default App
