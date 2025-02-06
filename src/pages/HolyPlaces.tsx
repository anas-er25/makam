
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MosqueDropZone from "@/components/MosqueDropZone";
import MosqueCard from "@/components/MosqueCard";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface HolyPlace {
  id: string;
  name: string;
  image_url: string[];
  description: string;
  location: string;
  is_holy_place: boolean;
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
    <DndProvider backend={HTML5Backend}>
      <MosqueDropZone is_holy_place={true} onDrop={fetchHolyPlaces}>
        <div className="container py-8">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-primary">
              الأماكن المقدسة
            </h1>
            <p className="text-gray-600">تعرف على أهم الأماكن المقدسة في الإسلام</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {holyPlaces.map((place) => (
              <MosqueCard
                key={place.id}
                id={place.id}
                name={place.name}
                image_url={place.image_url}
                location={place.location}
                description={place.description?.substring(0, 100) + "..."}
                is_holy_place={place.is_holy_place}
              />
            ))}
          </div>
        </div>
      </MosqueDropZone>
    </DndProvider>
  );
};

export default HolyPlaces;
