// src/pages/NewsDetail.jsx
import { useParams, Link } from "react-router-dom";
import { news } from "../constants";
import Section from "../components/Section";
import Heading from "../components/Heading";

const NewsDetail = () => {
  const { id } = useParams();
  const item = news.find((n) => n.id === id);

  if (!item)
    return (
      <Section className="container pt-20">
        <p className="text-center text-n-4">News not found.</p>
      </Section>
    );

  return (
    <Section className="container pt-24 pb-20  mx-auto mt-10">
      <div className="mb-10 mx-5">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-n-8 bg-n-1 rounded-full px-6 py-2 text-sm font-semibold hover:bg-n-2 transition-all group w-fit mb-10"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Back to News
        </Link>
      </div>

      <Heading
        className="text-4xl font-semibold leading-tight text-n-1 mb-6"
        tag={item.date}
        title={item.title}
      />

      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full rounded-3xl shadow-xl mb-10"
      />

      <p className="body-1 text-n-3 leading-relaxed whitespace-pre-line">
        {item.content.trim()}
      </p>
    </Section>
  );
};

export default NewsDetail;
