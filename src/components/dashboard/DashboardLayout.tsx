
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Home, Grid, Map, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "تم تسجيل الخروج بنجاح",
      description: "نراك قريباً!",
    });
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4 flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-primary">لوحة التحكم</h2>
        </div>
        <nav className="flex-1 pt-5 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => navigate("/")}
          >
            <Home className="ml-2 h-5 w-5" />
            الرئيسية
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => navigate("/dashboard")}
          >
            <Grid className="ml-2 h-5 w-5" />
            المساجد
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => navigate("/holy-places")}
          >
            <Map className="ml-2 h-5 w-5" />
            الأماكن المقدسة
          </Button>
        </nav>
        <div className="p-4 border-t mt-auto">
          <Button
            variant="outline"
            onClick={handleSignOut}
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="ml-2 h-5 w-5" />
            تسجيل الخروج
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
