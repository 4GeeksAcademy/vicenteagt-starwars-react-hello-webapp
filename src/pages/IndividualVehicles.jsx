import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import vehiclesInvidualImageUrl from "../assets/img/vehiclesInvidual.jpg";

export const IndividualVehicles = () => {

    const { id } = useParams();

    const API_URL = "https://www.swapi.tech/api";

    const [vehicle, setVehicle] = useState(null);

    const getVehicle = async () => {

        const response = await fetch(API_URL + "/vehicles/" + id);
        const data = await response.json();

        setVehicle(data.result.properties);
    };

    useEffect(() => {
        getVehicle();
    }, []);

    if (!vehicle) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container mt-5">

            <div className="row align-items-center mb-5">


                <div className="col-md-6">
                    <img
                        src={vehiclesInvidualImageUrl}
                        className="img-fluid"
                        alt="vehicle"
                    />
                </div>


                <div className="col-md-6">

                    <h1 className="fw-bold">{vehicle.name}</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit quae accusantium dolorem consequatur aperiam reprehenderit nobis eius, maxime, dolorum, quasi ullam dolores. Qui dignissimos quia velit ipsa blanditiis eum?
                    </p>

                </div>

            </div>


            <div className="row text-center text-danger border-top pt-4">

                <div className="col">
                    <p className="fw-bold">Name</p>
                    <p>{vehicle.name}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Passengers</p>
                    <p>{vehicle.passengers}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Speed</p>
                    <p>{vehicle.max_atmosphering_speed}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Model</p>
                    <p>{vehicle.model}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Cost</p>
                    <p>{vehicle.cost_in_credits}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Vehicle class</p>
                    <p>{vehicle.vehicle_class}</p>
                </div>

            </div>

        </div>
    );
};