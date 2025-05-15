import { news } from "../constants";
import Section from "./Section";
import Heading from "./Heading";
import Tagline from "./Tagline";
import { grid } from "../assets";
import { Link } from "react-router-dom";

const NewsInfo = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Section className="container">
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="News & Updates"
            text="Explore the most recent updates, insights, and innovations in AI and beyond."
          />

          <h2 className="h3 mb-10">Latest News</h2>
          <div className="relative grid gap-6 md:grid-cols-3 md:gap-8">
            {news.map((item) => (
              <Link
                to={`/news/${item.id}`}
                key={item.id}
                className="group p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient transition-all"
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-10 h-full">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full opacity-20"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <Tagline>{item.date}</Tagline>
                    <div className="mb-6 mt-4">
                      <img
                        className="w-full rounded-xl"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-2">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default NewsInfo;
