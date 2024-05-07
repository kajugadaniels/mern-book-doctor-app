/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ item }) => {
    const { name, desc } = item;
    return (
        <div className="py-[30px] px-3 lg:px-5">
            <h2 className="text-[18px] leading-9 text-headingColor font-[800] mb-4">
                {name}
            </h2>
            <p className="text-[14px] leading-7 font-[400] text-textColor">{desc}</p>
            <div className="flex items-center justify-between">
                <Link
                    to="/doctors"
                    className="w-[120px] h-[35px] rounded-full border border-solid border-[#181A1E] mt-[15px] flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                    <span className="group-hover:text-white">View More</span>
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;