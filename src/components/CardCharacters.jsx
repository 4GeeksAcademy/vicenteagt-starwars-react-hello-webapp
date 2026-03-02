import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import characterImageUrl from "../assets/img/characters.jpg";

export const CardCharacters = ({ character }) => {

    const { store, dispatch } = useGlobalReducer();

    const properties = character.properties;

    const isFavorite = store.favorites.some(
    fav =>
        fav.uid === character.uid &&
        fav.type === "character"
);

    return (
        <div
            className="card me-3 d-flex flex-column"
            style={{ minWidth: "250px", height: "420px" }}
        >

            <img
                src={characterImageUrl}
                className="card-img-top"
                alt="character"
            />

            <div className="card-body d-flex flex-column">

                <h4 className="fw-bold">{properties.name}</h4>

                <p className="mb-1">Gender: {properties.gender}</p>
                <p className="mb-1">
                    Hair Color: {properties.hair_color === "n/a" ? "unknown" : properties.hair_color}
                </p>
                <p className="mb-3">Eye Color: {properties.eye_color}</p>

                <div className="mt-auto d-flex justify-content-between">

                    <Link
                        to={`/character/${character.uid}`}
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
                                        uid: character.uid,
                                        name: properties.name,
                                        type: "character"
                                    }
                                })
                                : dispatch({
                                    type: "addFavorite",
                                    payload: {
                                        uid: character.uid,
                                        name: properties.name,
                                        type: "character"
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

