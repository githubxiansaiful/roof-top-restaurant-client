const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item;
    console.log(item);
    return (
        <div className="p-5 bg-base-300 rounded-2xl">
            <div>
                <img className="w-full" src={image} alt="" />
            </div>
            <div className="text-center space-y-3 pt-3">
                <h3 className="font-bold text-xl">{name}</h3>
                <p>${price}.00</p>
                <p>{recipe}</p>
                <button className="btn btn-primary">add to cart</button>
            </div>
        </div>
    );
};

export default FoodCard;