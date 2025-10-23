import Image from "next/image";
import Link from "next/link";
import { articles } from "@/constants/works";

export const Works = () => {
  return (
    <div className="px-3 xl:px-10">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {articles.map((article, index) => (
          <WorkItem
            key={index}
            src={article.image}
            title={article.title}
            date={article.date}
            link={article.link}
          />
        ))}
      </div>
    </div>
  );
};

export const WorkItem = ({
  src,
  title,
  date,
  link,
}: {
  src: string;
  title: string;
  date: string;
  link: string;
}) => {
  return (
    <Link href={link} target="_blank" data-cursor="scale">
      <div data-cursor="scale" className="w-full md:w-auto cursor-pointer group">
        <div className={`relative w-full h-50 xl:h-100 border overflow-hidden`}>
          <Image
            src={src}
            className="absolute inset-0 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            alt={title}
            layout="fill"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[85%] h-[85%]"></div>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="group-hover:underline">{title}</h1>
          <p className="text-gray-500 text-sm xl:text-base">{date}</p>
        </div>
      </div>
    </Link>
  );
};
