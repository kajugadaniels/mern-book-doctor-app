import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Contact, Details, Doctors, Home, Login, Services, Signup } from '../pages'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctor/:id' element={<Details />} />
        </Routes>
    )
}

export default Routers