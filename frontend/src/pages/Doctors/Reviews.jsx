/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";

const Reviews = ({ items }) => {
    const arr = Array.from({ length: items.rating });
    return (
        <div>
            <div className="flex justify-between gap-10 mb-[30px]">
                <div className="flex flex-gap-3">
                    <figure className="w-10 h-10 rounded-full mr-2">
                        <img className="w-full rounded-full" src={items.photo} alt="" />
                    </figure>
                    <div>
                        <h5 className="text-[13px] leading-6 text-primaryColor font-bold">
                            {items.name}
                        </h5>
                        <p className="text-[10px] font-semibold leading-6 text-textColor">{items.date}</p>
                        <p className="text_para mt-1 font-medium text-[12px]">
                            {items.reviews}
                        </p>
                    </div>
                </div>

                <div className="flex gap-1">
                    {arr.map((_, index) => (
                        <AiFillStar key={index} color="#0067FF" />
                    ))}
                    ({items.rating})
                </div>
            </div>
        </div>
    );
};

export default Reviews;