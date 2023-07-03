import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {

    var [search, setsearch] = useState("")
    function getData(e) {
        setsearch(e.target.value)
    }
    function postData(e) {
        e.preventDefault()
        props.ChangeSearch(search)
        // this.setState({ search: "" })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg background sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={() => props.ChangeSearch("")}>NewsApps</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link  active" aria-current="page" to="/" onClick={() => props.changeSearch("")}>All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  active" aria-current="page" to="/Politics" onClick={() => props.changeSearch("")} > Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  active" aria-current="page" to="/Crime" onClick={() => props.changeSearch("")} > Crime</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  active" aria-current="page" to="/Education" onClick={() => props.changeSearch("")} > Education</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link  dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Others
                                </Link>
                                <ul className="dropdown-menu background">
                                    <li><Link className="dropdown-item" to="/Action" onClick={() => props.changeSearch("")}>Action</Link></li>
                                    <li><Link className="dropdown-item" to="/Science" onClick={() => props.changeSearch("")}>Science</Link></li>
                                    <li><Link className="dropdown-item" to="/Technology" onClick={() => props.changeSearch("")}>Technology</Link></li>
                                    <li><Link className="dropdown-item" to="/World News" onClick={() => props.changeSearch("")}>World News</Link></li>
                                    <li><Link className="dropdown-item" to="/Sports" onClick={() => props.changeSearch("")}>Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/Cricket" onClick={() => props.changeSearch("")}>Cricket</Link></li>
                                    <li><Link className="dropdown-item" to="/Fifa" onClick={() => props.changeSearch("")}>Fifa</Link></li>
                                    <li><Link className="dropdown-item" to="/India" onClick={() => props.changeSearch("")}>India</Link></li>
                                    <li><Link className="dropdown-item" to="/Jokes" onClick={() => props.changeSearch("")}>Jokes</Link></li>
                                    <li><Link className="dropdown-item" to="/Covid" onClick={() => props.changeSearch("")}>Covid</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link  dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </Link>
                                <ul className="dropdown-menu background">
                                    <li><button className="dropdown-item" onClick={() => props.ChangeLanguage("en")}>English</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.ChangeLanguage("hi")} >Hindi</button></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex w-100" role="search" onSubmit={(e) => postData(e)}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search' onChange={(e) => getData(e)} value={search} />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        {/* <form className="d-flex w-100" role="search" onSubmit={(e) => postData(e)}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search' onChange={(e) => getData(e)} value={search} />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form> */}
                    </div >
                </div >
            </nav >
        </>
    )
}

