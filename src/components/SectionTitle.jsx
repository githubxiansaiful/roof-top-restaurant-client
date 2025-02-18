const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center">
            <p className="text-xl">{subHeading}</p>
            <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
    );
};

export default SectionTitle;