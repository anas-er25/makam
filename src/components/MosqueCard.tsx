
import { MapPin, Move } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface MosqueCardProps {
  id: string;
  name: string;
  image_url: string;
  location: string;
  description: string;
  is_holy_place: boolean;
}

const MosqueCard = ({
  id,
  name,
  image_url,
  location,
  description,
  is_holy_place,
}: MosqueCardProps) => {
  const loc = useLocation();
  const isDashboard = loc.pathname === "/dashboard";

  const handleDragStart = (e: React.DragEvent) => {
    if (!isDashboard) return;
    e.dataTransfer.setData(
      "mosque",
      JSON.stringify({ id, name, image_url, location, description, is_holy_place })
    );
  };

  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-md ${
        isDashboard ? "cursor-move" : ""
      }`}
      draggable={isDashboard}
      onDragStart={handleDragStart}
    >
      <div className="relative">
        <img
          src={image_url}
          alt={name}
          className="h-48 w-full rounded-t-lg object-cover"
        />
        {isDashboard && (
          <div className="absolute right-2 top-2 rounded-full bg-white/80 p-1">
            <Move className="h-5 w-5 text-gray-600" />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <div className="mt-2 flex items-center text-gray-600">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{location}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{description}</p>

        <div className="mt-4 flex space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="ml-2">
                نظرة سريعة
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="text-right text-2xl font-bold">
                  {name}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <img
                  src={image_url}
                  alt={name}
                  className="w-full rounded-lg object-cover"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span className="text-lg">{location}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">الوصف</h4>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Link to={`/mosque/${id}`}>
            <Button className="bg-primary text-white hover:bg-primary/90">
              عرض التفاصيل
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MosqueCard;
