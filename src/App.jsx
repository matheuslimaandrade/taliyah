import { } from 'react'
import './assets/styles/App.css'
import Header from './layouts/Header/Header'
import Hero from './layouts/Hero/Hero'
import Work from './layouts/Work/Work'
import { Card } from './components/Card/Card'
import { Project } from './components/Project/Project'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Card/>
      <Card/>
      <Work/>
    </>
  )
}

export default App
