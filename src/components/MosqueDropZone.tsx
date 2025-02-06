
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

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface MosqueDropZoneProps {
  isHolyPlace: boolean;
  onDrop: () => void;
}

const MosqueDropZone = ({ isHolyPlace, onDrop }: MosqueDropZoneProps) => {
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
        className={`min-h-[200px] rounded-lg border-2 border-dashed p-4 transition-colors ${
          isDraggingOver
            ? "border-primary bg-primary/10"
            : "border-gray-200 bg-gray-50/50"
        }`}
      >
        {isDraggingOver ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-lg text-gray-500">أفلت هنا للإضافة</p>
          </div>
        ) : null}
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تأكيد العملية</DialogTitle>
            <DialogDescription>
              هل تريد نقل أم نسخ {draggedMosque?.name} إلى{" "}
              {isHolyPlace ? "الأماكن المقدسة" : "المساجد"}؟
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => handleAction("copy")}>
              نسخ
            </Button>
            <Button onClick={() => handleAction("move")}>نقل</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MosqueDropZone;
