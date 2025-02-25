import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header"


const Main = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login');

    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;