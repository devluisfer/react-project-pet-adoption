import { createBrowserRouter, RouterProvider } from "react-router-dom";



import Home from "./views/Home.js/Home";
import Details from "./views/Details/Details";


const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:petId",
    element: <Details />,
  }
];
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
