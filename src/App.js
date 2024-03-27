import { Link, Outlet } from "react-router-dom";
import './App.css'
export default function App() {
  return (
    <>
      <div className="maindiv">
        <h1 className="heading"> Component Life Cycle</h1>
        <div className="container"> 
          <Link to="/mounting">
            <h2 className="head">Mounting</h2>
          </Link>
          <Link to="/unmounting">
            <h2 className="head">Unmountingt</h2
            ></Link>
          <Link to="/updating">
            <h2 className="head">Updating</h2>
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}
