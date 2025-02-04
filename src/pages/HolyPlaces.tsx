
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface HolyPlace {
  id: string;
  name: string;
  image_url: string;
  description: string;
  location: string;
}

const HolyPlaces = () => {
  const [holyPlaces, setHolyPlaces] = useState<HolyPlace[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchHolyPlaces();
  }, []);

  const fetchHolyPlaces = async () => {
    try {
      const { data, error } = await supabase
        .from("mosques")
        .select("*")
        .eq("is_holy_place", true);
      if (error) throw error;
      setHolyPlaces(data || []);
    } catch (error) {
      console.error("Error fetching holy places:", error);
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء جلب البيانات",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-primary">
          الأماكن المقدسة
        </h1>
        <p className="text-gray-600">تعرف على أهم الأماكن المقدسة في الإسلام</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {holyPlaces.map((place) => (
          <Link
            to={`/mosque/${place.id}`}
            key={place.id}
            className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl"
          >
            <img
              src={place.image_url}
              alt={place.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <Landmark className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">{place.name}</h3>
              </div>
              <p className="text-gray-600">
                {place.description?.substring(0, 100) + "..."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HolyPlaces;
