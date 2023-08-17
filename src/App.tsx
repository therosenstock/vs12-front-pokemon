import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PokemonListPage, PokemonPage, TeamPage } from "./pages";
import { TeamProvider } from "./context";
import { NotFound } from "./pages/NotFound";

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
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export const App = () => {
  return (
    <TeamProvider>
      <RouterProvider router={router} />
    </TeamProvider>
  );
};
