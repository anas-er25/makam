import { MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface MosqueCardProps {
  name: string;
  image: string;
  location: string;
  description: string;
}

const MosqueCard = ({ name, image, location, description }: MosqueCardProps) => {
  return (
    <div className="mosque-card">
      <img src={image} alt={name} className="mosque-image" />
      <div className="mosque-info">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <div className="mt-2 flex items-center text-gray-600">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{location}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="button-primary mt-4">عرض التفاصيل</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-right text-2xl font-bold">{name}</DialogTitle>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <img src={image} alt={name} className="w-full rounded-lg" />
              
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
      </div>
    </div>
  );
};

export default MosqueCard;