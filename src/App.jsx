import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import './App.css'

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
            <Form />
        </div>
    )
}

export default App
