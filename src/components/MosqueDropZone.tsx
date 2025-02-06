
import { useDrop } from 'react-dnd';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, ArrowRight } from "lucide-react";
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface MosqueDropZoneProps {
  is_holy_place: boolean;
  children: React.ReactNode;
  onDrop: () => void;
}

const MosqueDropZone = ({ is_holy_place, children, onDrop }: MosqueDropZoneProps) => {
  const [showModal, setShowModal] = useState(false);
  const [draggedMosque, setDraggedMosque] = useState<any>(null);
  const { toast } = useToast();

  const handleDrop = async (action: 'move' | 'copy') => {
    try {
      if (action === 'move') {
        const { error } = await supabase
          .from('mosques')
          .update({ is_holy_place: !draggedMosque.is_holy_place })
          .eq('id', draggedMosque.id);

        if (error) throw error;

        toast({
          title: "تم النقل بنجاح",
          description: `تم نقل ${draggedMosque.name} بنجاح`,
        });
      } else {
        const { data: mosque, error: fetchError } = await supabase
          .from('mosques')
          .select('*')
          .eq('id', draggedMosque.id)
          .single();

        if (fetchError) throw fetchError;

        if (mosque) {
          const { id, created_at, updated_at, ...mosqueData } = mosque;
          const { error: insertError } = await supabase
            .from('mosques')
            .insert([{ ...mosqueData, is_holy_place: !mosque.is_holy_place }]);

          if (insertError) throw insertError;

          toast({
            title: "تم النسخ بنجاح",
            description: `تم نسخ ${draggedMosque.name} بنجاح`,
          });
        }
      }
      
      setShowModal(false);
      onDrop();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء معالجة الطلب",
        variant: "destructive",
      });
    }
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'MOSQUE',
    drop: (item: any) => {
      if (item.is_holy_place !== is_holy_place) {
        setDraggedMosque(item);
        setShowModal(true);
      }
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver() && monitor.getItem()?.is_holy_place !== is_holy_place,
    }),
  }));

  return (
    <div
      ref={drop}
      className={`min-h-[500px] rounded-lg p-4 transition-colors ${
        isOver ? 'bg-primary/10 border-2 border-dashed border-primary' : ''
      }`}
    >
      {children}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تأكيد العملية</DialogTitle>
            <DialogDescription>
              هل تريد نقل أم نسخ "{draggedMosque?.name}" إلى {is_holy_place ? 'الأماكن المقدسة' : 'المساجد'}؟
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2">
            <Button onClick={() => handleDrop('copy')} variant="outline">
              <Copy className="mr-2 h-4 w-4" />
              نسخ
            </Button>
            <Button onClick={() => handleDrop('move')}>
              <ArrowRight className="mr-2 h-4 w-4" />
              نقل
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MosqueDropZone;
