import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header"


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;