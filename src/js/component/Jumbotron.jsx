import React from 'react';
export const Jumbotron = () => {
    const cohorte = 'Spain-77'
    return (
        <div className="container-fluid py-5 bg-dark bg-opacity-10 px-4">
        <h1 className="display-5 fw-bold">A warm welcome!</h1>
        <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
    </div>
    )
}