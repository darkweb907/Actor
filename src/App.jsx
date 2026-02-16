import React from 'react'
import Act from './assets/d2c57be7-8fd9-4fd5-a16a-6d73f00f4ef0.jpg'
import Rail from './assets/rail.jpg'
import Police from './assets/police.jpg'
import Footer from './component/Footer'
import { Routes, Route } from "react-router-dom";
import Home from './component/Home'
import Header from './component/Header'
import Blog from './component/Blog'

function App() {
  const details = [
    {
    id:1,
    work: 'The Shadow of Greed ( Ajayi',
    img: Rail,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
  },
    {
    id:2,
    work: 'Sawaba',
    img: Act,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
  },
    {
    id:3,
    work: 'The Yard ( Detective Braimoh)',
    img: Police,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
  },
]

  

  return (
    <>
    
     <Header/>
       <Routes>
        <Route path="/" element={<Home details={details}  />} />
        <Route path="/blog/:id" element={<Blog details={details} />} />
        {/* <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/read-student/:id" element={<ReadStudent />} />
        <Route path="/update-student/:id" element={<UpdateStudent />} /> */}
      </Routes>

      <Footer/>
    </>
  )
}

export default App
