import { faqs } from "../assets/data/faqs.js";
import { FaqList } from './'

const Faq = () => {
    return (
        <div className="mt-5 lg:mt-7">
            {faqs.map((faq, index) => (
                <FaqList faq={faq} key={index} />
            ))}
        </div>
    );
};

export default Faq;