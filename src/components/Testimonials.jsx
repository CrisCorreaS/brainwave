import { testimonials } from "../constants";
import Section from "./Section";
import Heading from "./Heading";
import GlowCard from "./GlowCard";

const Testimonials = () => {
  return (
    <Section crosses id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <Heading
          tag="What People Say About Us?"
          title="Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
