import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "تم إرسال طلب تسجيل الدخول",
      description: "سيتم التواصل معك قريباً",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <UserPlus className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-3xl font-bold mb-2">تسجيل الدخول</h1>
          <p className="text-gray-600">مرحباً بك! يرجى تسجيل الدخول للمتابعة</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                type="password"
                id="password"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="text-sm">تذكرني</span>
              </label>
              <Button variant="link" className="text-sm">
                نسيت كلمة المرور؟
              </Button>
            </div>
            
            <Button type="submit" className="w-full">
              تسجيل الدخول
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ليس لديك حساب؟{" "}
              <Button variant="link" className="text-sm p-0">
                إنشاء حساب جديد
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;