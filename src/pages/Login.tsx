import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <UserPlus className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-3xl font-bold mb-2">تسجيل الدخول</h1>
          <p className="text-gray-600">مرحباً بك! يرجى تسجيل الدخول للمتابعة</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-6">
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
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="mr-2 text-sm">تذكرني</span>
              </label>
              <a href="#" className="text-sm text-primary hover:text-primary/80">
                نسيت كلمة المرور؟
              </a>
            </div>
            
            <Button type="submit" className="w-full">
              تسجيل الدخول
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ليس لديك حساب؟{" "}
              <a href="#" className="text-primary hover:text-primary/80">
                إنشاء حساب جديد
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;