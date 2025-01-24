import { Search } from "lucide-react";
import MosqueCard from "../components/MosqueCard";

const mosques = [
  {
    id: 1,
    name: "المسجد الأقصى",
    image: "/lovable-uploads/fdfcfbec-9614-4bd0-b5f4-1c8232de5349.png",
    location: "القدس، فلسطين",
    description: "المسجد الأقصى أحد أكبر مساجد العالم وأحد المساجد الثلاثة التي يشد المسلمون الرحال إليها",
  },
  {
    id: 2,
    name: "المسجد النبوي",
    image: "/lovable-uploads/0736a4e0-e01d-4dd9-866f-6a96cf26fd30.png",
    location: "المدينة المنورة، السعودية",
    description: "يقع المسجد النبوي الشريف في المدينة المنورة في المملكة العربية السعودية",
  },
  {
    id: 3,
    name: "المسجد الحرام",
    image: "/lovable-uploads/4ef0be67-b119-4445-b331-f64ea889c247.png",
    location: "مكة المكرمة، السعودية",
    description: "منذ بداية التاريخ البشري إلى يومنا هذا، احتلت الكعبة المشرفة في المسجد الحرام مكانة مقدسة",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary py-8 text-white">
        <div className="container">
          <h1 className="text-center text-4xl font-bold">منصة المساجد</h1>
          <p className="mt-2 text-center text-lg">اكتشف المساجد والأماكن المقدسة</p>
          
          <div className="relative mx-auto mt-8 max-w-2xl">
            <input
              type="text"
              placeholder="ابحث عن مسجد..."
              className="search-input pl-12 text-foreground"
            />
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mosques.map((mosque) => (
            <MosqueCard key={mosque.id} {...mosque} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;