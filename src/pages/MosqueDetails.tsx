import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"; // Add useState and useEffect
import axios from "axios"; // Import Axios
import {
  MapPin,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { mosqueData } from "@/lib/utils";

const MosqueDetails = () => {
  const { id } = useParams();
  const mosque = mosqueData.find((mosque) => mosque.id === parseInt(id));
  const [prayerTimes, setPrayerTimes] = useState<{
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
  } | null>(null); // State to store prayer times
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    if (mosque) {
      // Fetch prayer times from Aladhan API
      const fetchPrayerTimes = async () => {
        try {
          const response = await axios.get(
            "https://api.aladhan.com/v1/timingsByCity",
            {
              params: {
                city: mosque.location.split("،")[0].trim(), // Extract city name
                country: mosque.location.split("،")[1].trim(), // Extract country name
                method: 2, // Calculation method (ISNA)
              },
            }
          );
          const timings = response.data.data.timings;
          setPrayerTimes({
            Fajr: timings.Fajr,
            Dhuhr: timings.Dhuhr,
            Asr: timings.Asr,
            Maghrib: timings.Maghrib,
            Isha: timings.Isha,
          });
        } catch (error) {
          console.error("Error fetching prayer times:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPrayerTimes();
    }
  }, [mosque]);

  if (!mosque) {
    return <div>المسجد غير موجود</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{mosque.name}</h1>

      {/* Image Carousel */}
      <div className="mb-8">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {mosque.images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={`${mosque.name} - صورة ${index + 1}`}
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
              <span>{mosque.location}</span>
            </div>
            <p className="text-gray-600">{mosque.description}</p>
          </CardContent>
        </Card>

        {/* Prayer Times */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">أوقات الصلاة</h2>
            {loading ? (
              <p>جاري تحميل أوقات الصلاة...</p>
            ) : prayerTimes ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <span>الفجر: {prayerTimes.Fajr}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <span>الظهر: {prayerTimes.Dhuhr}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <span>العصر: {prayerTimes.Asr}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <span>المغرب: {prayerTimes.Maghrib}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <span>العشاء: {prayerTimes.Isha}</span>
                </div>
              </div>
            ) : (
              <p>فشل في تحميل أوقات الصلاة. يرجى المحاولة مرة أخرى.</p>
            )}
          </CardContent>
        </Card>

        {/* Activities */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">الأنشطة</h2>
            <ul className="space-y-2">
              {mosque.activities.map((activity, index) => (
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
                <span>{mosque.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <span>{mosque.contact.email}</span>
              </div>
              <Separator className="my-4" />
              <div className="flex gap-4">
                <a
                  href={mosque.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href={mosque.contact.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href={mosque.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
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
