import SectionTitle from "../../../components/SectionTitle";
import Menuitems from "../../../shared/Menuitems";
import useMenu from "../../../hooks/useMenu";

const Popularmenus = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <div className="bg-[#f1f1f1]">
            <div className="container">
                <div className="popular-menus-content py-[60px]">
                    <SectionTitle className="mb-5"
                        subHeading={"Check out our"}
                        heading={"Popular Menus"}
                    ></SectionTitle>
                    <div className="pt-[30px]">
                        <div className="grid grid-cols-2 gap-5">
                            {
                                popular.map(item => <Menuitems
                                    key={item._id}
                                    item={item}
                                ></Menuitems>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popularmenus;