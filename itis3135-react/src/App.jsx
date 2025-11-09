import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
       <h2>Welcome!</h2>
        <p>Hello, my name is Connor Lewis, I am a current senior who is studying computer science and I am concentrating in AI, Robotics, and Gaming.</p>
        <p>Born and raised in Thomasville, NC I moved to Asheboro after graduating high school and focused on getting my degree in computer science. Some of my hobbies include gaming, watching horror movies, and playing basketball.</p>
      </main>
      <Footer />
    </>
  )
}

export default App
