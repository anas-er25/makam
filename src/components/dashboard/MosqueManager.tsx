import { useState } from "react";
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

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Mosque {
  id: number;
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
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const mosqueData = {
      name: formData.get("name") as string,
      location: formData.get("location") as string,
      description: formData.get("description") as string,
      is_holy_place: isHolyPlace,
    };

    try {
      if (selectedMosque) {
        // Update existing mosque
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
        // Create new mosque
        const { error } = await supabase.from("mosques").insert([mosqueData]);

        if (error) throw error;

        toast({
          title: "تمت الإضافة بنجاح",
          description: "تم إضافة المسجد الجديد بنجاح",
        });
      }

      // Reset form and refresh data
      e.currentTarget.reset();
      setSelectedMosque(null);
      fetchMosques();
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء حفظ البيانات",
        variant: "destructive",
      });
    }
  };

  const fetchMosques = async () => {
    const { data, error } = await supabase
      .from("mosques")
      .select("*")
      .eq("is_holy_place", isHolyPlace);

    if (error) {
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء جلب البيانات",
        variant: "destructive",
      });
      return;
    }

    setMosques(data || []);
  };

  const handleDelete = async (id: number) => {
    const { error } = await supabase.from("mosques").delete().eq("id", id);

    if (error) {
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء حذف المسجد",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "تم الحذف بنجاح",
      description: "تم حذف المسجد بنجاح",
    });
    fetchMosques();
  };

  return (
    <div className="space-y-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
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
            <Button type="submit">حفظ</Button>
          </form>
        </DialogContent>
      </Dialog>

      <div className="grid gap-4">
        {mosques.map((mosque) => (
          <div
            key={mosque.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div>
              <h3 className="font-semibold">{mosque.name}</h3>
              <p className="text-sm text-gray-500">{mosque.location}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setSelectedMosque(mosque)}
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