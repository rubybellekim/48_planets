import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    )
}

export default App
