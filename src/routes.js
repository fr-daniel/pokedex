import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import PokemonsList from "./pages/Pokemons/List";
import PokemonsDetails from "./pages/Pokemons/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <PokemonsList />,
      },
      {
        path: "pokemons/:pokemonId",
        element: <PokemonsDetails />,
      },
    ],
  },
]);

const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes;
