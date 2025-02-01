import { mosqueData } from "@/lib/utils";
import { Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const HolyPlaces = () => {
  return (
    <div className="container py-8">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-primary">
          الأماكن المقدسة
        </h1>
        <p className="text-gray-600">تعرف على أهم الأماكن المقدسة في الإسلام</p>
      </div>

      {/* Grid Layout for Mosque Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mosqueData.map((place) => (
          <Link
            to={`/mosque/${place.id}`} // Dynamic link to mosque details
            key={place.id}
            className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl"
          >
            <img
              src={place.images[0]} // Use the first image from the images array
              alt={place.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <Landmark className="h-5 w-5 text-primary" /> {/* Icon */}
                <h3 className="text-xl font-bold">{place.name}</h3>
              </div>
              <p className="text-gray-600">
                {place.description.substring(0, 100) + "..."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HolyPlaces;
