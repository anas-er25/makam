import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Feedback = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      to_name: "أنس الرقيبي",
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const serviceId = import.meta.env.VITE_SERVICE_ID_API_KEY;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const userId = import.meta.env.VITE_SERVICE_ID_API_SECRET;

      await emailjs.send(serviceId, templateId, data, userId);

      toast({
        title: "تم إرسال ملاحظاتك",
        description: "شكراً لك على مساهمتك في تحسين المنصة",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء إرسال الملاحظات. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <MessageSquare className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-3xl font-bold mb-2 text-primary">
            تقديم ملاحظات
          </h1>
          <p className="text-gray-600">
            نرحب بملاحظاتكم واقتراحاتكم لتحسين خدماتنا
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="space-y-2">
            <Label htmlFor="name">الاسم</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="الاسم الكامل"
              value={formData.name}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="example@domain.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">الموضوع</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="موضوع الملاحظات"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">الرسالة</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="اكتب ملاحظاتك هنا..."
              className="min-h-[150px]"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "جاري الإرسال..." : "إرسال الملاحظات"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
