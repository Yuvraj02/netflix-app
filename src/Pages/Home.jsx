import { NavLink } from "react-router"

function Home() {

    return (<>
        <div className = "h-screen w-screen flex flex-col justify-center items-center">
            <h1 class>Welcome to Netflix</h1>
              <p>Get Started</p>
            <div className = "m-2 flex">
                <NavLink to="/login" className ="border rounded-[25px] me-2 p-2 px-5 cursor-pointer hover:bg-[#FFFFFF] hover:text-black" > Login </NavLink>
                <NavLink to="/signup" className="border rounded-[25px] p-2 px-5 cursor-pointer hover:bg-[#FFFFFF] hover:text-black"> Sign up </NavLink>
            </div>
  
          </div>
      </>
    )
}

export default Home