import Menuitems from "../../shared/Menuitems";

const MenuCategory = ({ items }) => {
    return (
        <div>
            <div className="pt-[30px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        items.map(item => <Menuitems key={item._id} item={item}></Menuitems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;