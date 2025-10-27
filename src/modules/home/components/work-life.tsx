import { Separator } from "@/components/ui/separator";

function Work({
  company,
  description,
  date,
}: {
  company: string;
  description: string;
  date: string;
}) {
  return (
    <div
      className="border dark:border-gray-500 p-5 border-gray-300 rounded-sm"
      data-cursor="scale"
    >
      <h1 className="text-xl">{company}</h1>
      <p className="mt-6 text-sm text-gray-700 dark:text-gray-200">
        {description}
      </p>

      <div className="mt-6">
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  );
}

export default function WorkLife() {
  return (
    <div className="flex items-center justify-center py-10 px-3">
      <div className="w-full">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">My Work Life</h2>
        </div>
        <div className="my-10">
          <Separator />
        </div>
        <div className="mt-10 space-y-5">
          <Work
            company="Simple Talk — Contract Technical Writer"
            date="June 2023 - PRESENT"
            description="Writing technical content on backend, databases, and serverless technologies."
          />
          <Work
            company="OpenReplay — Contract Technical Writer"
            date="January 2023 - PRESENT"
            description="Writing technical articles on general development-related technologies"
          />
          <Work
            company="Bejama.io — Contract Technical Writer"
            date="May 2023 - December 2023"
            description="Writing technical content on serverless technologies, databases, and modern web frameworks."
          />
          <Work
            company="Pieces.app — Contract Technical Writer"
            date="September 2022 - February 2023"
            description="Writing technical content and blog posts on full-stack technologies."
          />
        </div>
      </div>
    </div>
  );
}
