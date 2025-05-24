import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
    { path: "/", element: <Layout />, 
      children: [
        {path: "", element: <HomePage />},
        {path:"game/1", element: <GameDetailPage />}
      ] 
    }
]);


export default router
