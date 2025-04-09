import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  MapPin,
  Clock,
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
import { createClient } from "@supabase/supabase-js";
import { useToast } from "@/components/ui/use-toast";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Mosque {
  id: string;
  name: string;
  image_url: string;
  description: string;
  location: string;
  activities: string[];
  contact: {
    phone: string;
    email: string;
    social: {
      facebook: string;
      twitter: string;
      instagram: string;
    };
  };
}

const MosqueDetails = () => {
  const { id } = useParams();
  const [mosque, setMosque] = useState<Mosque | null>(null);
  const [prayerTimes, setPrayerTimes] = useState<{
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchMosqueDetails();
  }, [id]);

  const fetchMosqueDetails = async () => {
    try {
      const { data, error } = await supabase
        .from("mosques")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      if (data) {
        setMosque(data);
        fetchPrayerTimes(data.location);
      }
    } catch (error) {
      console.error("Error fetching mosque details:", error);
      toast({
        title: "حدث خطأ",
        description: "حدث خطأ أثناء جلب بيانات المسجد",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchPrayerTimes = async (location: string) => {
    try {
      const response = await axios.get(
        "https://api.aladhan.com/v1/timingsByCity",
        {
          params: {
            city: location.split("،")[0].trim(),
            country: location.split("،")[1].trim(),
            method: 2,
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
    }
  };

  if (loading) {
    return <div>جاري التحميل...</div>;
  }

  if (!mosque) {
    return <div>المسجد غير موجود</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">{mosque.name}</h1>

      <div className="mb-8">
        <Carousel className="mx-auto w-full max-w-4xl">
          <CarouselContent>
            <CarouselItem>
              <img
                src={mosque.image_url}
                alt={mosque.name}
                className="h-[400px] w-full rounded-lg object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">الموقع والوصف</h2>
            <div className="mb-4 flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>{mosque.location}</span>
            </div>
            <p className="text-gray-600">{mosque.description}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">أوقات الصلاة</h2>
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

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">الأنشطة</h2>
            <ul className="space-y-2">
              {mosque.activities ? (
                mosque.activities?.map((activity, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>{activity}</span>
                  </li>
                ))
              ) : (
                <p className="text-gray-600">لا توجد معلومات تواصل اجتماعي</p>
              )}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">تواصل معنا</h2>
            <div className="space-y-4">
              {/* Phone contact */}
              {mosque.contact?.phone ? (
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span>{mosque.contact.phone}</span>
                </div>
              ) : null}

              {/* Email contact */}
              {mosque.contact?.email ? (
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span>{mosque.contact.email}</span>
                </div>
              ) : null}

              {/* Social media contacts */}
              {mosque.contact?.social ? (
                <>
                  <Separator className="my-4" />
                  <div className="flex gap-4">
                    {mosque.contact.social.facebook && (
                      <a
                        href={mosque.contact.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                    )}
                    {mosque.contact.social.twitter && (
                      <a
                        href={mosque.contact.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                    )}
                    {mosque.contact.social.instagram && (
                      <a
                        href={mosque.contact.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </>
              ) : null}

              {/* Display the "لا توجد معلومات تواصل" message only if no contact info is available */}
              {!mosque.contact?.phone &&
                !mosque.contact?.email &&
                !mosque.contact?.social && (
                  <p className="text-gray-600">لا توجد معلومات تواصل</p>
                )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MosqueDetails;
