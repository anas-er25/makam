
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MosqueItemProps {
  id: string;
  name: string;
  location: string;
  description: string;
  image_url: string;
  is_holy_place: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onDragStart: (e: React.DragEvent) => void;
}

const MosqueItem = ({
  id,
  name,
  location,
  description,
  image_url,
  is_holy_place,
  onEdit,
  onDelete,
  onDragStart,
}: MosqueItemProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Card
      className="group cursor-move hover:shadow-md transition-all duration-300"
      draggable
      onDragStart={onDragStart}
    >
      <CardHeader className="p-0 relative overflow-hidden h-40">
        <img
          src={image_url || "https://via.placeholder.com/300x200?text=صورة+غير+متوفرة"}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-2 right-2">
          <Badge variant={is_holy_place ? "secondary" : "outline"} className="bg-white/80 text-primary">
            {is_holy_place ? "مكان مقدس" : "مسجد"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate">{name}</h3>
        <p className="text-sm text-gray-500 truncate">{location}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 ml-1" />
              عرض
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">{name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <img
                src={image_url || "https://via.placeholder.com/600x300?text=صورة+غير+متوفرة"}
                alt={name}
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-lg">{location}</span>
                </div>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onEdit}
            className="text-blue-500"
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onDelete}
            className="text-red-500"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MosqueItem;
