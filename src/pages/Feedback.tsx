import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Feedback = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <MessageSquare className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-3xl font-bold mb-2">تقديم ملاحظات</h1>
          <p className="text-gray-600">نرحب بملاحظاتكم واقتراحاتكم لتحسين خدماتنا</p>
        </div>
        
        <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              الاسم
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              الرسالة
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            ></textarea>
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