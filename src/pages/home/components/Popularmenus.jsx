import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import Menuitems from "../../../shared/Menuitems";

const Popularmenus = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])

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
                                menu.map(item => <Menuitems
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