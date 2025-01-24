import { Landmark } from "lucide-react";

const holyPlaces = [
  {
    id: 1,
    name: "مكة المكرمة",
    description: "مهد الإسلام وموقع المسجد الحرام والكعبة المشرفة",
    image: "/lovable-uploads/4ef0be67-b119-4445-b331-f64ea889c247.png",
  },
  {
    id: 2,
    name: "المدينة المنورة",
    description: "موقع المسجد النبوي الشريف ومقام الرسول صلى الله عليه وسلم",
    image: "/lovable-uploads/0736a4e0-e01d-4dd9-866f-6a96cf26fd30.png",
  },
  {
    id: 3,
    name: "القدس",
    description: "موقع المسجد الأقصى المبارك، ثالث الحرمين الشريفين",
    image: "/lovable-uploads/fdfcfbec-9614-4bd0-b5f4-1c8232de5349.png",
  },
];

const HolyPlaces = () => {
  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold">الأماكن المقدسة</h1>
        <p className="text-gray-600">تعرف على أهم الأماكن المقدسة في الإسلام</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {holyPlaces.map((place) => (
          <div
            key={place.id}
            className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-[1.02]"
          >
            <img
              src={place.image}
              alt={place.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="mb-2 text-xl font-bold">{place.name}</h3>
              <p className="text-gray-600">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HolyPlaces;