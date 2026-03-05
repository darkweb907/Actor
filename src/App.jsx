import React from 'react'
import Act from './assets/d2c57be7-8fd9-4fd5-a16a-6d73f00f4ef0.jpg'
import Rail from './assets/rail.jpg'
import Police from './assets/police.jpg'
import Footer from './component/Footer'
import { Routes, Route } from "react-router-dom";
import Home from './component/Home'
import Header from './component/Header'
import Blog from './component/Blog'
// import Videos from './component/Video'
import Login from './component/subForm/Login'
import About from './component/subForm/About'
import Videos from './component/subForm/Video'

function App() {
const details = [
  {
    id: 1,
    work: 'The Shadow of Greed (Ajayi)',
    img: Rail,
    desc: 'In "The Shadow of Greed," Jide Penier brought to life the complex character of Ajayi, a businessman whose insatiable ambition and desire for power lead him into a web of betrayal, corporate intrigue, and personal moral dilemmas. Throughout the film, Jide masterfully navigates the character’s journey from ruthless decision-making to moments of introspective vulnerability, portraying a man constantly torn between his conscience and his desires. His nuanced performance captures the subtle emotional shifts required in high-stakes negotiation scenes, private confrontations, and quiet moments of reflection. Critics praised Jide for the depth and authenticity he brought to Ajayi, highlighting his ability to make a morally ambiguous character relatable and compelling. Audiences were captivated by the intensity and precision of his portrayal, making this role a defining moment in Jide Penier’s career.'
  },
  {
    id: 2,
    work: 'Sawaba',
    img: Act,
    desc: 'In the politically charged drama "Sawaba," Jide Penier took on the lead role of a passionate activist determined to challenge systemic injustices and inspire societal change. His performance demanded a remarkable balance of charisma, emotional intensity, and resilience, as the character faced threats, political corruption, and personal sacrifices while rallying those around him. Jide’s portrayal of moments of eloquent speeches, tense negotiations, and intimate reflections brought an authentic energy to the screen, highlighting his capacity to connect deeply with the audience. Critics lauded his ability to convey both vulnerability and unwavering determination, while viewers found his performance inspiring, layered, and unforgettable. Through this role, Jide Penier demonstrated a compelling range and a profound dedication to embodying characters with authenticity and emotional depth.'
  },
  {
    id: 3,
    work: 'The Yard (Detective Braimoh)',
    img: Police,
    desc: 'In "The Yard," Jide Penier portrayed Detective Braimoh, a sharp, analytical investigator tasked with solving a high-profile criminal case. The role required a meticulous attention to detail, timing, and emotional precision, particularly during suspenseful interrogations, tense stakeouts, and high-stakes confrontations. Jide’s performance imbued the character with both intellectual sharpness and emotional nuance, effectively portraying the psychological complexity of a detective balancing professional duty with personal conflict. Audiences and critics alike recognized Jide’s ability to maintain tension and authenticity throughout the film, delivering a performance that was both gripping and deeply human. His portrayal of Detective Braimoh highlighted Jide Penier’s versatility and commitment to fully inhabiting complex roles that challenge both actor and audience.'
  },
];

  

  return (
    <>
    
     <Header/>
       <Routes>
        <Route path="/" element={<Home details={details}  />} />
        <Route path="/blog/:id" element={<Blog details={details} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/about" element={<About/>} />
       
        {/* <Route path="/create-student" element={<CreateStudent />} />    
        <Route path="/read-student/:id" element={<ReadStudent />} />
        <Route path="/update-student/:id" element={<UpdateStudent />} /> */}
      </Routes>

      <Footer/>
    </>
  )
}

export default App
