import React from "react";
import { Link } from "react-router-dom";

const CardPlanets = ({ planet }) => {

    const properties = planet.properties;

    return (
        <div 
    className="card me-3 d-flex flex-column"
    style={{ minWidth: "250px", height: "420px" }}
>

            <img
                src="https://picsum.photos/300/200"
                className="card-img-top"
                alt="planet"
            />

           <div className="card-body d-flex flex-column">

                <h4 className="fw-bold">{properties.name}</h4>

                <p className="mb-1">Population: {properties.population}</p>
                <p className="mb-3">Terrain: {properties.terrain}</p>

                <div className="mt-auto d-flex justify-content-between">

                    <Link to={`/planet/${planet.uid}`} className="btn btn-outline-primary btn-sm">
    Learn more!
</Link>

                    <button className="btn btn-outline-warning btn-sm">
                        <i className="fa-solid fa-heart"></i>
                    </button>

                </div>

            </div>
        </div>
    );
};

export default CardPlanets;