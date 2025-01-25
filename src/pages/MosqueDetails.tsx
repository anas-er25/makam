import { useParams } from "react-router-dom";
import { MapPin, Clock, Share2, Facebook, Twitter, Instagram, Phone, Mail } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// This would typically come from an API
const mosqueData = {
  id: 1,
  name: "المسجد الأقصى",
  images: [
    "/lovable-uploads/fdfcfbec-9614-4bd0-b5f4-1c8232de5349.png",
    "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
  ],
  location: "القدس، فلسطين",
  description: "المسجد الأقصى أحد أكبر مساجد العالم وأحد المساجد الثلاثة التي يشد المسلمون الرحال إليها",
  openingTimes: {
    daily: "24 ساعة",
    friday: "مفتوح طوال اليوم",
    special: "قد تتغير أوقات الصلاة حسب المواسم"
  },
  activities: [
    "الصلوات الخمس",
    "صلاة الجمعة",
    "دروس دينية",
    "حلقات تحفيظ القرآن",
    "برامج رمضانية خاصة"
  ],
  contact: {
    phone: "+970 2-628-3264",
    email: "info@alaqsa.ps",
    social: {
      facebook: "https://facebook.com/alaqsa",
      twitter: "https://twitter.com/alaqsa",
      instagram: "https://instagram.com/alaqsa"
    }
  }
};

const MosqueDetails = () => {
  const { id } = useParams();
  // In a real app, we would fetch the mosque data based on the ID
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{mosqueData.name}</h1>
      
      {/* Image Carousel */}
      <div className="mb-8">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {mosqueData.images.map((image, index) => (
              <CarouselItem key={index}>
                <img 
                  src={image} 
                  alt={`${mosqueData.name} - صورة ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Location and Description */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">الموقع والوصف</h2>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin className="h-5 w-5" />
              <span>{mosqueData.location}</span>
            </div>
            <p className="text-gray-600">{mosqueData.description}</p>
          </CardContent>
        </Card>

        {/* Opening Times */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">أوقات الفتح</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-600" />
                <span>يومياً: {mosqueData.openingTimes.daily}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-600" />
                <span>الجمعة: {mosqueData.openingTimes.friday}</span>
              </div>
              <p className="text-sm text-gray-500">{mosqueData.openingTimes.special}</p>
            </div>
          </CardContent>
        </Card>

        {/* Activities */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">الأنشطة</h2>
            <ul className="space-y-2">
              {mosqueData.activities.map((activity, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Contact and Social Media */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">تواصل معنا</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600" />
                <span>{mosqueData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <span>{mosqueData.contact.email}</span>
              </div>
              <Separator className="my-4" />
              <div className="flex gap-4">
                <a href={mosqueData.contact.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href={mosqueData.contact.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href={mosqueData.contact.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MosqueDetails;