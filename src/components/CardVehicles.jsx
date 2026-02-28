import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import vehiclesImageUrl from "../assets/img/vehicles.jpg";

const CardVehicles = ({ vehicle }) => {

    const { store, dispatch } = useGlobalReducer();

    const properties = vehicle.properties;


   const isFavorite = store.favorites.some(
    fav =>
        fav.uid === vehicle.uid &&
        fav.type === "vehicle"
);

    return (
        <div
            className="card me-3 d-flex flex-column"
            style={{ minWidth: "250px", height: "420px" }}
        >

            <img
                src={vehiclesImageUrl}
                className="card-img-top"
                alt="vehicle"
            />

            <div className="card-body d-flex flex-column">

                <h4 className="fw-bold">{properties.name}</h4>

                <p className="mb-1">
                    Passengers: {properties.passengers}
                </p>

                <p className="mb-3">
                    Speed: {properties.max_atmosphering_speed}
                </p>

                <div className="mt-auto d-flex justify-content-between">

                    <Link
                        to={`/vehicle/${vehicle.uid}`}
                        className="btn btn-outline-primary btn-sm"
                    >
                        Learn more!
                    </Link>

                    <button
                        className={`btn btn-sm ${isFavorite ? "btn-warning" : "btn-outline-warning"
                            }`}
                        onClick={() =>
                            isFavorite
                                ? dispatch({
                                    type: "removeFavorite",
                                    payload: {
                                        uid: vehicle.uid,
                                        type: "vehicle"
                                    }
                                })
                                : dispatch({
                                    type: "addFavorite",
                                    payload: {
                                        uid: vehicle.uid,
                                        name: properties.name,
                                        type: "vehicle"
                                    }
                                })
                        }
                    >
                        <i className="fa-solid fa-heart"></i>
                    </button>

                </div>

            </div>
        </div>
    );
};

export default CardVehicles;