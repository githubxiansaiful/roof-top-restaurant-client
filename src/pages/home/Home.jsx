import Banner from "./components/Banner";
import Category from "./components/Category";
import Chefrecommends from "./components/Chefrecommends";
import Popularmenus from "./components/Popularmenus";

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Category></Category>
            <Popularmenus></Popularmenus>
            <Chefrecommends></Chefrecommends>
        </section>
    );
};

export default Home;