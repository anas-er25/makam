
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";
import { Plus, Search } from "lucide-react";
import ImageUpload from "./ImageUpload";
import EnhancedMosqueDropZone from "./EnhancedMosqueDropZone";
import MosqueItem from "./MosqueItem";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Mosque {
  id: string;
  name: string;
  location: string;
  description: string;
  image_url: string;
  is_holy_place: boolean;
}

interface MosqueManagerProps {
  isHolyPlace?: boolean;
}

const MosqueManager = ({ isHolyPlace = false }: MosqueManagerProps) => {
  const [mosques, setMosques] = useState<Mosque[]>([]);
  const [filteredMosques, setFilteredMosques] = useState<Mosque[]>([]);
  const [selectedMosque, setSelectedMosque] = useState<Mosque | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchMosques();
  }, [isHolyPlace]);

  useEffect(() => {
    if (selectedMosque) {
      setImages(selectedMosque.image_url ? [selectedMosque.image_url] : []);
    } else {
      setImages([]);
    }
  }, [selectedMosque]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMosques(mosques);
    } else {
      const filtered = mosques.filter(
        mosque => 
          mosque.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          mosque.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMosques(filtered);
    }
  }, [searchQuery, mosques]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const mosqueData = {
      name: formData.get("name") as string,
      location: formData.get("location") as string,
      description: formData.get("description") as string,
      is_holy_place: isHolyPlace,
      image_url: images[0] || null,
    };

    try {
      if (selectedMosque) {
        const { error } = await supabase
          .from("mosques")
          .update(mosqueData)
          .eq("id", selectedMosque.id);

        if (error) throw error;

        toast({
          title: "تم التحديث بنجاح",
          description: "تم تحديث معلومات المسجد بنجاح",
        });
      } else {
        const { error } = await supabase.from("mosques").insert([mosqueData]);

        if (error) throw error;

        toast({
          title: "تمت الإضافة بنجاح",
          description: "تم إضافة المسجد الجديد بنجاح",
        });
      }

      setIsDialogOpen(false);
      e.currentTarget.reset();
      setSelectedMosque(null);
      setImages([]);
      fetchMosques();
    } catch (error) {
      console.error("Error saving mosque:", error);
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء حفظ البيانات",
        variant: "destructive",
      });
    }
  };

  const fetchMosques = async () => {
    try {
      const { data, error } = await supabase
        .from("mosques")
        .select("*")
        .eq("is_holy_place", isHolyPlace);

      if (error) throw error;

      setMosques(data || []);
      setFilteredMosques(data || []);
    } catch (error) {
      console.error("Error fetching mosques:", error);
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء جلب البيانات",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("mosques").delete().eq("id", id);

      if (error) throw error;

      toast({
        title: "تم الحذف بنجاح",
        description: "تم حذف المسجد بنجاح",
      });
      fetchMosques();
    } catch (error) {
      console.error("Error deleting mosque:", error);
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء حذف المسجد",
        variant: "destructive",
      });
    }
  };

  const handleDragStart = (e: React.DragEvent, mosque: Mosque) => {
    e.dataTransfer.setData(
      "mosque",
      JSON.stringify(mosque)
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setSelectedMosque(null);
                setImages([]);
              }}
              className="bg-primary hover:bg-primary/90"
            >
              <Plus className="ml-2 h-4 w-4" />
              إضافة {isHolyPlace ? "مكان مقدس" : "مسجد"} جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>
                {selectedMosque ? "تعديل" : "إضافة"}{" "}
                {isHolyPlace ? "مكان مقدس" : "مسجد"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">الاسم</Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={selectedMosque?.name}
                  required
                />
              </div>
              <div>
                <Label htmlFor="location">الموقع</Label>
                <Input
                  id="location"
                  name="location"
                  defaultValue={selectedMosque?.location}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">الوصف</Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={selectedMosque?.description}
                  required
                />
              </div>
              <div>
                <Label>الصور</Label>
                <ImageUpload
                  multiple={false}
                  images={images}
                  onImagesChange={setImages}
                />
              </div>
              <Button type="submit" className="w-full">حفظ</Button>
            </form>
          </DialogContent>
        </Dialog>

        <div className="relative w-full sm:w-64">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="بحث..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-3 pr-10"
          />
        </div>
      </div>

      <EnhancedMosqueDropZone isHolyPlace={isHolyPlace} onDrop={fetchMosques} />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredMosques.map((mosque) => (
          <MosqueItem
            key={mosque.id}
            {...mosque}
            onEdit={() => {
              setSelectedMosque(mosque);
              setIsDialogOpen(true);
            }}
            onDelete={() => handleDelete(mosque.id)}
            onDragStart={(e) => handleDragStart(e, mosque)}
          />
        ))}
      </div>
      
      {filteredMosques.length === 0 && (
        <div className="text-center p-8 border border-dashed rounded-lg">
          <p className="text-gray-500">
            {searchQuery ? 
              "لا توجد نتائج مطابقة لبحثك" : 
              `لا يوجد ${isHolyPlace ? "أماكن مقدسة" : "مساجد"} حتى الآن`}
          </p>
        </div>
      )}
    </div>
  );
};

export default MosqueManager;
