export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case "setCharacters":
      return {
        ...store,
        characters: action.payload
      };

    case "setPlanets":
      return {
        ...store,
        planets: action.payload
      };

    case "setVehicles":
      return {
        ...store,
        vehicles: action.payload
      };

    case "addFavorite":

  const exists = store.favorites.some(
    fav =>
      fav.uid === action.payload.uid &&
      fav.type === action.payload.type
  );

  if (exists) return store;

  return {
    ...store,
    favorites: [...store.favorites, action.payload]
  };

    case "removeFavorite":
      return {
        ...store,
        favorites: store.favorites.filter(
          fav =>
            !(
              fav.uid === action.payload.uid &&
              fav.type === action.payload.type
            )
        )
      };


    default:
      return store;
  }
}
