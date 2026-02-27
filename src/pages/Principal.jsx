import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import CardCharacters from "../components/CardCharacters";
import CardPlanets from "../components/CardPlanets";
import CardVehicles from "../components/CardVehicles";

export const Principal = () => {

    const { store, dispatch } = useGlobalReducer();

    const API_URL = "https://www.swapi.tech/api";

    
    const getCharacters = async () => {

        const response = await fetch(API_URL + "/people");
        const data = await response.json();

        const detailedCharacters = [];

        for (let character of data.results) {

            const detailResponse = await fetch(character.url);
            const detailData = await detailResponse.json();

            detailedCharacters.push(detailData.result);
        }

        dispatch({
            type: "setCharacters",
            payload: detailedCharacters
        });
    };


    const getPlanets = async () => {

        const response = await fetch(API_URL + "/planets");
        const data = await response.json();

        const detailedPlanets = [];

        for (let planet of data.results) {

            const detailResponse = await fetch(planet.url);
            const detailData = await detailResponse.json();

            detailedPlanets.push(detailData.result);
        }

        dispatch({
            type: "setPlanets",
            payload: detailedPlanets
        });
    };


   
    const getVehicles = async () => {

        const response = await fetch(API_URL + "/vehicles");
        const data = await response.json();

        const detailedVehicles = [];

        for (let vehicle of data.results) {

            const detailResponse = await fetch(vehicle.url);
            const detailData = await detailResponse.json();

            detailedVehicles.push(detailData.result);
        }

        dispatch({
            type: "setVehicles",
            payload: detailedVehicles
        });
    };


    useEffect(() => {
        getCharacters();
        getPlanets();
        getVehicles();
    }, []);


    return (
    <div className="container mt-5">

       
        <h2 className="mb-3">Characters</h2>
        <div className="d-flex overflow-auto mb-5">
            {store.characters.map((character, index) => (
                <CardCharacters
                    key={index}
                    character={character}
                />
            ))}
        </div>

      
        <h2 className="mb-3">Planets</h2>
        <div className="d-flex overflow-auto mb-5">
            {store.planets.map((planet, index) => (
                <CardPlanets
                    key={index}
                    planet={planet}
                />
            ))}
        </div>

       
        <h2 className="mb-3">Vehicles</h2>
       <div className="d-flex overflow-auto mb-5">
            {store.vehicles.map((vehicle, index) => (
                <CardVehicles
                    key={index}
                    vehicle={vehicle}
                />
            ))}
        </div>

    </div>
);

};