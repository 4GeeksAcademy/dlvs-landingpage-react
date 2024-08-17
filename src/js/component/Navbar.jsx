import React from "react";
const Navbar = () => {
    const cohorte = 'Spain-77';
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid d-inline-flex ">
                <a className="navbar-brand" href="#" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-lin">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;