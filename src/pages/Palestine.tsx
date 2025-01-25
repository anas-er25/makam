import { palestineData } from "@/lib/utils";
import {  ExternalLink } from "lucide-react";

const Palestine = () => {
  return (
    <div className="container py-8">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-primary">{palestineData.intro.title}</h1>
        <p className="text-gray-600">{palestineData.intro.description}</p>
      </div>

      {/* Grid Layout for Sections */}
      <div className="grid gap-8 md:grid-cols-2">
        {palestineData.sections.map((section, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-primary">{section.title}</h2>
            <p className="text-gray-600">{section.description}</p>
          </div>
        ))}
      </div>

      {/* Resources Section */}
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-primary">الموارد</h2>
        <div className="space-y-6">
          {palestineData.resources.map((resource, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-2 text-xl font-bold text-primary">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center text-primary hover:text-primary/80"
                aria-label={`شاهد الفيديو: ${resource.title}`}
              >
                <ExternalLink className="mr-2 ml-2 h-4 w-4" />
                شاهد الفيديو
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Palestine;
