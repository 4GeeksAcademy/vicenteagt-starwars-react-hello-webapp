import React from "react";
import { Link } from "react-router-dom";

const CardCharacters = ({ character }) => {

    const properties = character.properties;

    return (
        <div 
    className="card me-3 d-flex flex-column"
    style={{ minWidth: "250px", height: "420px" }}
>

            <img
                src="https://picsum.photos/300/200"
                className="card-img-top"
                alt="character"
            />

            <div className="card-body d-flex flex-column">

                <h4 className="fw-bold">{properties.name}</h4>

                <p className="mb-1">Gender: {properties.gender}</p>
                <p className="mb-1">Hair Color: {properties.hair_color}</p>
                <p className="mb-3">Eye Color: {properties.eye_color}</p>

                <div className="mt-auto d-flex justify-content-between">

                    <Link to={`/character/${character.uid}`} className="btn btn-outline-primary btn-sm">
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

export default CardCharacters;