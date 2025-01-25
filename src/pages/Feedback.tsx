import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "تم إرسال ملاحظاتك",
      description: "شكراً لك على مساهمتك في تحسين المنصة",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <MessageSquare className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-3xl font-bold mb-2">تقديم ملاحظات</h1>
          <p className="text-gray-600">نرحب بملاحظاتكم واقتراحاتكم لتحسين خدماتنا</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-2">
            <Label htmlFor="name">الاسم</Label>
            <Input
              type="text"
              id="name"
              placeholder="الاسم الكامل"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              type="email"
              id="email"
              placeholder="example@domain.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">الموضوع</Label>
            <Input
              type="text"
              id="subject"
              placeholder="موضوع الملاحظات"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">الرسالة</Label>
            <Textarea
              id="message"
              placeholder="اكتب ملاحظاتك هنا..."
              className="min-h-[150px]"
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            إرسال الملاحظات
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;