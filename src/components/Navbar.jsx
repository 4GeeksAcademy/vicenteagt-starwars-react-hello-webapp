import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import nabvarImageUrl from "../assets/img/iconoNabvar.jpg";

export const Navbar = () => {

  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-light px-4">

      <Link to="/">
        <img
          src={nabvarImageUrl}
          style={{ width: "90px" }}
          alt="logo"
        />
      </Link>

      <div className="dropdown">

        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Favorites ({store.favorites.length})
        </button>

        <ul className="dropdown-menu dropdown-menu-end">

          {store.favorites.length === 0 ? (
            <li className="dropdown-item text-muted">Empty</li>
          ) : (
            store.favorites.map((fav) => (
              <li
                key={fav.uid}
                className="dropdown-item d-flex justify-content-between align-items-center"
              >
                {fav.name}

                <i
                  className="fa-solid fa-trash text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    dispatch({
                      type: "removeFavorite",
                      payload: fav.uid
                    })
                  }
                ></i>
              </li>
            ))
          )}

        </ul>

      </div>

    </nav>
  );
};