import React from 'react'
import Header from './components/header'
import Aside from './components/aside'
import Footer from './components/footer'
import Main from './components/main'


const App = () => {
  return (
    <>
      <Header />
      <div className='flex '>
        <Aside />
        <Main />
      </div>
      <Footer />
    </>
  )
}

export default App
