const Menuitems = ({ item }) => {
    const { image, price, name, recipe } = item;
    return (
        <div className="single-menu-item">
            <div className="items-menu-img">
                <img src={image} />
            </div>
            <div className="item-menu-description">
                <h3 className="font-bold">{name}</h3>
                <p>{recipe}</p>
                <p>$ {price}</p>
            </div>
        </div>
    );
};

export default Menuitems;