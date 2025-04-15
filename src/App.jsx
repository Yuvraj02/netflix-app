// import styled from "styled-components"
import Home from "./Pages/Home"
import LoginPage from "./Pages/Login"
import Signup from "./Pages/Signup"
import {createBrowserRouter, RouterProvider} from "react-router"


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },
  ])
  return <RouterProvider router={router}/>
}

export default App
