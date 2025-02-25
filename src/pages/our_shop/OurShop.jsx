import Covertitle from "../../shared/Covertitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useEffect, useState } from "react";

const OurShop = () => {
    const [menu, loader] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Covertitle title={"Our Shop"} subtitle={"Checkout our all products"}></Covertitle>
            {
                loader || !showContent ? (
                    <div className="flex justify-center items-center py-[40px]">
                        <span className="loading loading-infinity loading-xl"></span>
                    </div>
                ) : (
                    <div className="container">
                        <div className="py-[60px]">
                            <Tabs>
                                <TabList>
                                    <Tab>Salad</Tab>
                                    <Tab>Drinks</Tab>
                                    <Tab>Soups</Tab>
                                    <Tab>Desserts</Tab>
                                    <Tab>Pizza</Tab>
                                </TabList>
                                <TabPanel>
                                    <OrderTab items={salad}></OrderTab>
                                </TabPanel>
                                <TabPanel>
                                    <OrderTab items={drinks}></OrderTab>
                                </TabPanel>
                                <TabPanel>
                                    <OrderTab items={soup}></OrderTab>
                                </TabPanel>
                                <TabPanel>
                                    <OrderTab items={dessert}></OrderTab>
                                </TabPanel>
                                <TabPanel>
                                    <OrderTab items={pizza}></OrderTab>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default OurShop;