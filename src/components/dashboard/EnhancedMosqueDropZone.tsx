
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";
import { UploadCloud, MoveHorizontal, Copy } from "lucide-react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface EnhancedMosqueDropZoneProps {
  isHolyPlace: boolean;
  onDrop: () => void;
}

const EnhancedMosqueDropZone = ({ isHolyPlace, onDrop }: EnhancedMosqueDropZoneProps) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [draggedMosque, setDraggedMosque] = useState<any>(null);
  const { toast } = useToast();
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";

  const handleDragOver = (e: React.DragEvent) => {
    if (!isDashboard) return;
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    if (!isDashboard) return;
    e.preventDefault();
    setIsDraggingOver(false);
    const mosque = JSON.parse(e.dataTransfer.getData("mosque"));
    if (mosque.is_holy_place === isHolyPlace) return;
    setDraggedMosque(mosque);
    setShowModal(true);
  };

  const handleAction = async (action: "move" | "copy") => {
    try {
      if (action === "copy") {
        const { error } = await supabase.from("mosques").insert([
          {
            ...draggedMosque,
            id: undefined,
            is_holy_place: isHolyPlace,
          },
        ]);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("mosques")
          .update({ is_holy_place: isHolyPlace })
          .eq("id", draggedMosque.id);
        if (error) throw error;
      }

      toast({
        title: "تم بنجاح",
        description: `تم ${action === "move" ? "نقل" : "نسخ"} ${
          draggedMosque.name
        } بنجاح`,
      });
      onDrop();
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء معالجة طلبك",
        variant: "destructive",
      });
    }
    setShowModal(false);
  };

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`min-h-[120px] rounded-lg border-2 border-dashed p-4 transition-colors flex items-center justify-center ${
          isDraggingOver
            ? "border-primary bg-primary/10"
            : "border-gray-200 bg-gray-50/50"
        }`}
      >
        {isDraggingOver ? (
          <div className="flex items-center justify-center text-primary">
            <UploadCloud className="h-8 w-8 mb-2 animate-bounce" />
            <p className="text-lg font-medium mr-2">أفلت هنا للإضافة</p>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <UploadCloud className="h-8 w-8 mx-auto mb-2 opacity-40" />
            <p>اسحب {isHolyPlace ? "مكانًا مقدسًا" : "مسجدًا"} وأفلته هنا</p>
          </div>
        )}
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">تأكيد العملية</DialogTitle>
            <DialogDescription className="text-center pt-2">
              هل تريد نقل أم نسخ {draggedMosque?.name} إلى{" "}
              {isHolyPlace ? "الأماكن المقدسة" : "المساجد"}؟
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button 
              variant="outline" 
              onClick={() => handleAction("copy")}
              className="flex items-center justify-center"
            >
              <Copy className="ml-2 h-4 w-4" />
              نسخ
            </Button>
            <Button 
              onClick={() => handleAction("move")}
              className="flex items-center justify-center"
            >
              <MoveHorizontal className="ml-2 h-4 w-4" />
              نقل
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EnhancedMosqueDropZone;
