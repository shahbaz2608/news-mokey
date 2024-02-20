import React from 'react'

const Navbar = (data) => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsMonkey</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/about">About</a>
                      </li>
                  </ul>
                </div>
            </div>
            <div className="mx-3">
              {/* <span className="input-group-text" id="addon-wrapping">@</span> */}
              select news per page
              <select defaultValue={"5"} onClick={data.getPageSize} className="form-control">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
              </select>
            </div>
            </nav>
      </div>
    )
}

export default Navbar