import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

export default function App() {
    var [language, setlanguage] = useState("hi")
    var [search, setsearch] = useState("")
    const ChangeLanguage = (data) => {
        setlanguage(data)
    }
    const ChangeSearch = (data) => {
        setsearch(data)
    }
    return (
        <>
            <BrowserRouter>
                <Navbar ChangeLanguage={ChangeLanguage} ChangeSearch={ChangeSearch} />
                <Routes>
                    <Route path='' element={<Home search={search} language={language} q="All" />} />
                    <Route path='/All' element={<Home search={search} language={language} q="All" />} />
                    <Route path='/Politics' element={<Home search={search} language={language} q="Politics" />} />
                    <Route path='/Crime' element={<Home search={search} language={language} q="Crime" />} />
                    <Route path='/Education' element={<Home search={search} language={language} q="Education" />} />
                    <Route path='/Action' element={<Home search={search} language={language} q="Action" />} />
                    <Route path='/Science' element={<Home search={search} language={language} q="Science" />} />
                    <Route path='/Technology' element={<Home search={search} language={language} q="Technology" />} />
                    <Route path='/World News' element={<Home search={search} language={language} q="World News" />} />
                    <Route path='/Sports' element={<Home search={search} language={language} q="Sports" />} />
                    <Route path='/Cricket' element={<Home search={search} language={language} q="Cricket" />} />
                    <Route path='/Jokes' element={<Home search={search} language={language} q="Jokes" />} />
                    <Route path='/Covid' element={<Home search={search} language={language} q="Covid" />} />
                    <Route path='/Fifa' element={<Home search={search} language={language} q="Fifa" />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
