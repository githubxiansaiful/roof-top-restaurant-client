import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Covertitle from "../../shared/Covertitle";
import MenuCategory from "./MenuCategory";

const Ourmenu = () => {
    const [menu, loader] = useMenu();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');

    return (
        <div>
            <div>
                <Covertitle title="Our Menu" subtitle="Would you like to try a dish?" />
            </div>

            <div className="container">
                {loader || !showContent ? (
                    <div className="flex justify-center items-center py-[40px]">
                        <span className="loading loading-infinity loading-xl"></span>
                    </div>
                ) : (
                    [{ heading: "Salad", items: salad },
                      { heading: "Pizza", items: pizza },
                      { heading: "Drinks", items: drinks },
                      { heading: "Dessert", items: dessert }].map((category, index) => (
                        <div key={index} className="py-[40px]">
                            <SectionTitle heading={category.heading} />
                            <MenuCategory items={category.items} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Ourmenu;