const Covertitle = ({title, subtitle}) => {
    return (
        <div>
            <div className="hero bg-base-200 h-[300px]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Covertitle;