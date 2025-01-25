import { Heart, Share2, Code2, Paintbrush, Camera, User2, MessageSquare, Pen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BeFriend = () => {
  const visionPoints = [
    "أن نكون حلقة وصل بين المسلم وكل ما يفيده في دينه ودنياه.",
    "تعريف الناس بالمساجد وتعزيز دورها كمركز للتعليم والتواصل الاجتماعي.",
    "تسهيل وصول أفراد المجتمع إلى الأنشطة المسجدية.",
    "المساهمة في بناء مجتمع مترابط.",
  ];

  const helpCards = [
    {
      icon: Heart,
      title: "تبرع للمشروع",
      description: "ساهم في تغطية تكاليف المنصة ماديا",
    },
    {
      icon: Share2,
      title: "شارك مشروعنا",
      description: "ساعدنا في نشر المنصة في مجتمعك المحلي",
    },
    {
      icon: Code2,
      title: "تطوير المنصة",
      description: "ساهم في برمجة وتطوير المنصة",
    },
    {
      icon: Paintbrush,
      title: "التصميم",
      description: "ساعدنا في تحسين تجربة المستخدم والواجهة",
    },
    {
      icon: Camera,
      title: "التصوير الفوتوغرافي",
      description: "ساعدنا في تصوير المساجد بجودة جيدة",
    },
    {
      icon: User2,
      title: "الميداني",
      description: "ساعدنا في التواصل مع المساجد لإدارة أنشطتهم",
    },
    {
      icon: Pen,
      title: "كتابة المحتوى",
      description: "ساهم في كتابة محتوى متميز يتماشى مع رسالتنا",
    },
    {
      icon: MessageSquare,
      title: "إدارة وسائل التواصل",
      description: "ساعدنا في إدارة حساباتنا على وسائل التواصل",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Vision Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">رؤيتنا</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How to Help Section */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">كيف يمكنك المساعدة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helpCards.map((card, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                      <p className="text-gray-600">{card.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BeFriend;