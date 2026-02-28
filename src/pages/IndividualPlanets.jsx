import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import planetsInvidualImageUrl from "../assets/img/planetsInvidual.jpg";

export const IndividualPlanets = () => {

    const { id } = useParams();

    const API_URL = "https://www.swapi.tech/api";

    const [planet, setPlanet] = useState(null);

    const getPlanet = async () => {

        const response = await fetch(API_URL + "/planets/" + id);
        const data = await response.json();

        setPlanet(data.result.properties);
    };

    useEffect(() => {
        getPlanet();
    }, []);

    if (!planet) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container mt-5">

            <div className="row align-items-center mb-5">


                <div className="col-md-6">
                    <img
                        src={planetsInvidualImageUrl}
                        className="img-fluid"
                        alt="planet"
                    />
                </div>


                <div className="col-md-6">

                    <h1 className="fw-bold">{planet.name}</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius rerum eveniet cupiditate atque, expedita qui. Nobis neque repellendus animi iusto rerum velit modi! Nemo soluta labore necessitatibus est quibusdam!
                    </p>

                </div>

            </div>


            <div className="row text-center text-danger border-top pt-4">

                <div className="col">
                    <p className="fw-bold">Name</p>
                    <p>{planet.name}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Climate</p>
                    <p>{planet.climate}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Diameter</p>
                    <p>{planet.diameter}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Rotation period</p>
                    <p>{planet.rotation_period}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Terrain</p>
                    <p>{planet.terrain}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Gravity</p>
                    <p>{planet.gravity}</p>
                </div>

            </div>

        </div>
    );
};