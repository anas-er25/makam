
import { Search } from "lucide-react";
import MosqueCard from "../components/MosqueCard";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useToast } from "@/components/ui/use-toast";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MosqueDropZone from "@/components/MosqueDropZone";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Mosque {
  id: string;
  name: string;
  image_url: string[];
  location: string;
  description: string;
  is_holy_place: boolean;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mosques, setMosques] = useState<Mosque[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchMosques();
  }, []);

  const fetchMosques = async () => {
    try {
      const { data, error } = await supabase
        .from("mosques")
        .select("*")
        .eq("is_holy_place", false);
      if (error) throw error;
      setMosques(data || []);
    } catch (error) {
      console.error("Error fetching mosques:", error);
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء جلب البيانات",
        variant: "destructive",
      });
    }
  };

  // Filter mosques based on search query
  const filteredMosques = mosques.filter(
    (mosque) =>
      mosque.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mosque.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <MosqueDropZone is_holy_place={false} onDrop={fetchMosques}>
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
                  image_url={mosque.image_url}
                  location={mosque.location}
                  description={mosque.description?.substring(0, 100) + "..."}
                  is_holy_place={mosque.is_holy_place}
                />
              ))}
            </div>
          </main>
        </div>
      </MosqueDropZone>
    </DndProvider>
  );
};

export default Index;
