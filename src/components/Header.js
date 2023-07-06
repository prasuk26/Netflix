import React from 'react'
import { useNavigate , Link } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();

  const clickHandler = (e) =>{
    e.preventDefault();
    navigate('/Login');
  }
  return (
    <div >
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="https://www.google.com">
            <img class="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt=""  />
          </a> */}

          <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>

          <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="btn btn-danger" type="submit" onClick={clickHandler}>Signin</button>
            </form>
          </div>
        </div>
      </nav>
    </header>

    </div>
  )
}
