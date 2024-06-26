import { services } from "../assets/data/services.js";
import { ServiceCard } from '../components/';

const Services = () => {
    return (
        <>
            <section className="bg-[#fff9ea]">
                <div className="container text-center">
                    <h2 className="heading">Services</h2>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                        {services.map((item, index) => (
                            <ServiceCard item={item} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;