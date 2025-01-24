import { MapPin } from "lucide-react";

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
        <button className="button-primary mt-4">عرض التفاصيل</button>
      </div>
    </div>
  );
};

export default MosqueCard;