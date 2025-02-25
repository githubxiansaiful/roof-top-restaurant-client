import SectionTitle from "../../../components/SectionTitle";

const Chefrecommends = () => {
    return (
        <div className="container">
            <div className="py-[60px]">
                <SectionTitle
                    subHeading={"---Should Try---"}
                    heading={"CHEF RECOMMENDS"}
                ></SectionTitle>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
                    <div className="p-5 bg-base-300 rounded-2xl">
                        <div>
                            <img className="w-full" src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg" alt="" />
                        </div>
                        <div className="text-center space-y-3 pt-3">
                            <h3 className="font-bold text-xl">Caeser Salad</h3>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                    <div className="p-5 bg-base-300 rounded-2xl">
                        <div>
                            <img className="w-full" src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg" alt="" />
                        </div>
                        <div className="text-center space-y-3 pt-3">
                            <h3 className="font-bold text-xl">Caeser Salad</h3>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                    <div className="p-5 bg-base-300 rounded-2xl">
                        <div>
                            <img className="w-full" src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg" alt="" />
                        </div>
                        <div className="text-center space-y-3 pt-3">
                            <h3 className="font-bold text-xl">Caeser Salad</h3>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefrecommends;