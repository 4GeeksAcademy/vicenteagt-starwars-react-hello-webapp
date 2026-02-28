import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import characterInvidualImageUrl from "../assets/img/charactersIndividual.jpg";

export const IndividualCharacters = () => {

    const { id } = useParams();

    const API_URL = "https://www.swapi.tech/api";

    const [character, setCharacter] = useState(null);

    const getCharacter = async () => {

        const response = await fetch(API_URL + "/people/" + id);
        const data = await response.json();

        setCharacter(data.result.properties);
    };

    useEffect(() => {
        getCharacter();
    }, []);

    if (!character) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container mt-5">

            <div className="row align-items-center mb-5">


                <div className="col-md-6">
                    <img
                        src={characterInvidualImageUrl}
                        className="img-fluid"
                        alt="character"
                    />
                </div>


                <div className="col-md-6">

                    <h2 className="fw-bold">{character.name}</h2>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab excepturi voluptatibus molestiae doloremque ex? Ut, ratione, a aspernatur deserunt, illum similique doloremque repellendus maxime est minus mollitia labore ad magnam.
                    </p>

                </div>

            </div>


            <div className="row text-center text-danger border-top pt-4">

                <div className="col">
                    <p className="fw-bold">Name</p>
                    <p>{character.name}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Gender</p>
                    <p>{character.gender}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Skin color</p>
                    <p>{character.skin_color}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Hair color</p>
                    <p>{character.hair_color}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Height</p>
                    <p>{character.height}</p>
                </div>

                <div className="col">
                    <p className="fw-bold">Eye color</p>
                    <p>{character.eye_color}</p>
                </div>

            </div>

        </div>
    );
};