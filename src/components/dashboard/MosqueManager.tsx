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
import { Plus, Pencil, Trash2 } from "lucide-react";
import ImageUpload from "./ImageUpload";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Mosque {
  id: string; // Changed from number to string since Supabase uses UUID
  name: string;
  location: string;
  description: string;
  images: string[];
  is_holy_place: boolean;
}

interface MosqueManagerProps {
  isHolyPlace?: boolean;
}

const MosqueManager = ({ isHolyPlace = false }: MosqueManagerProps) => {
  const [mosques, setMosques] = useState<Mosque[]>([]);
  const [selectedMosque, setSelectedMosque] = useState<Mosque | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchMosques();
  }, [isHolyPlace]);

  useEffect(() => {
    if (selectedMosque) {
      setImages(selectedMosque.images || []);
    } else {
      setImages([]);
    }
  }, [selectedMosque]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const mosqueData = {
      name: formData.get("name") as string,
      location: formData.get("location") as string,
      description: formData.get("description") as string,
      is_holy_place: isHolyPlace,
      images: images,
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

  return (
    <div className="space-y-6">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => {
            setSelectedMosque(null);
            setImages([]);
          }}>
            <Plus className="mr-2 h-4 w-4" />
            إضافة {isHolyPlace ? "مكان مقدس" : "مسجد"} جديد
          </Button>
        </DialogTrigger>
        <DialogContent>
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
                multiple={isHolyPlace}
                images={images}
                onImagesChange={setImages}
              />
            </div>
            <Button type="submit">حفظ</Button>
          </form>
        </DialogContent>
      </Dialog>

      <div className="grid gap-4">
        {mosques.map((mosque) => (
          <div
            key={mosque.id}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div className="flex items-center gap-4">
              {mosque.images?.[0] && (
                <img
                  src={mosque.images[0]}
                  alt={mosque.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />
              )}
              <div>
                <h3 className="font-semibold">{mosque.name}</h3>
                <p className="text-sm text-gray-500">{mosque.location}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setSelectedMosque(mosque);
                  setIsDialogOpen(true);
                }}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleDelete(mosque.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MosqueManager;