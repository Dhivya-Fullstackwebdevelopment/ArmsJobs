import { SelectField } from './SelectField'
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";


interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
    onItemsPerPageChange: (items: number) => void;
}

export const Pagination: React.FC<PaginationProps> = (
    { currentPage,
        totalItems,
        itemsPerPage,
        onPageChange,
        onItemsPerPageChange
    }
) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleItemsPerPageChange = (value: string) => {
        onItemsPerPageChange(Number(value));
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div>
            <div className="flex items-center justify-end space-x-10 py-5">

                {/* Items text & select field */}
                <div className="flex items-center space-x-5">
                    <div>
                        <p>Items per page:</p>
                    </div>
                    <div>
                        <SelectField
                            label={""}
                            options={[
                                // { value: "1", label: "1" },
                                { value: "10", label: "10" },
                                { value: "50", label: "50" },
                                { value: "100", label: "100" },
                            ]}
                            className="w-full rounded-[5px] border-2 border-armsgrey px-3 py-1 focus-within:outline-none"
                            onChange={(e) => handleItemsPerPageChange(e.target.value)}
                            value={itemsPerPage.toString()}
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-5">
                    <div>
                        {/* <p>1 - 10 of 100</p> */}
                        <p>{startItem} - {endItem} of {totalItems}</p>
                    </div>

                    {/* <div className="flex items-center space-x-5">
                        <BiSolidLeftArrow className="text-[12px] text-mindfulBlack cursor-pointer" />
                        <BiSolidRightArrow className="text-[12px] text-mindfulBlack cursor-pointer" />
                    </div> */}

                    <div className="flex items-center space-x-5">
                        <BiSolidLeftArrow
                            className={`text-[12px] text-armsgray ${currentPage === 1 ? "opacity-50 cursor-not-allowed" :
                                "cursor-pointer"
                                }`}
                            onClick={handlePreviousPage}
                        />
                        <BiSolidRightArrow
                            className={`text-[12px] text-mindfulBlack ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                                }`}
                            onClick={handleNextPage}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
