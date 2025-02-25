import { useState } from "react";
import FoodCard from "./FoodCard";

const OrderTab = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Calculate the items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Handle pagination
    const nextPage = () => {
        if (indexOfLastItem < items.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            {/* Display Food Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {currentItems.map(item => (
                    <FoodCard key={item._id} item={item} />
                ))}
            </div>

            {/* Pagination Controls - Only show if items > 6 */}
            {items.length > itemsPerPage && (
                <div className="flex justify-center mt-8 gap-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`btn ${currentPage === 1 ? 'btn-disabled' : 'btn-primary'}`}
                    >
                        Previous
                    </button>

                    <button
                        onClick={nextPage}
                        disabled={indexOfLastItem >= items.length}
                        className={`btn ${indexOfLastItem >= items.length ? 'btn-disabled' : 'btn-primary'}`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrderTab;
