import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PokemonListPage, PokemonPage, TeamPage } from "./pages";
import { TeamProvider } from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonListPage />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonPage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
]);

export const App = () => {
  return (
    <TeamProvider>
      <RouterProvider router={router} />
    </TeamProvider>
  );
};
