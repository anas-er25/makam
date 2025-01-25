import { aboutData } from "@/lib/utils";
import { Building2 } from "lucide-react";

const About = () => {
  return (
    <div className="container py-8">
      {/* En-tête */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-primary">{aboutData.title}</h1>
        <p className="text-gray-600">{aboutData.description}</p>
      </div>

      {/* Contenu principal */}
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        {/* Section Vision */}
        <h2 className="mb-4 text-xl font-bold text-primary">{aboutData.vision.title}</h2>
        <p className="mb-6 text-gray-600">{aboutData.vision.content}</p>

        {/* Section Goals */}
        <h2 className="mb-4 text-xl font-bold text-primary">{aboutData.goals.title}</h2>
        <ul className="list-inside list-disc space-y-2 text-gray-600">
          {aboutData.goals.items.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
