import { Search } from "lucide-react";
import MosqueCard from "../components/MosqueCard";
import { useState } from "react";
import { mosqueData } from "@/lib/utils";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter mosques based on search query
  const filteredMosques = mosqueData.filter(
    (mosque) =>
      mosque.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mosque.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background py-8 text-white">
        <div className="container">
          <h1 className="text-center text-4xl font-bold text-primary">
            اكتشف الأنشطة المسجدية القريبة منك
          </h1>
          <p className="mt-2 text-center text-lg text-primary">
            اكتشف المساجد والأماكن المقدسة
          </p>

          <div className="relative mx-auto mt-8 max-w-2xl">
            <input
              type="text"
              placeholder="ابحث عن مسجد..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-12 pr-4 text-foreground focus:border-primary focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredMosques.map((mosque) => (
            <MosqueCard
              key={mosque.id}
              id={mosque.id}
              name={mosque.name}
              image={mosque.images[0]} // Pass the first image
              location={mosque.location}
              description={mosque.description.substring(0, 100) + "..."}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
