
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MosqueManager from "@/components/dashboard/MosqueManager";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      navigate("/login");
    }
  };

  return (
    <DashboardLayout title="إدارة المحتوى">
      <div className="bg-white rounded-lg shadow p-6">
        <Tabs defaultValue="mosques" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="mosques" className="text-lg py-3">المساجد</TabsTrigger>
            <TabsTrigger value="holy-places" className="text-lg py-3">الأماكن المقدسة</TabsTrigger>
          </TabsList>
          <TabsContent value="mosques">
            <MosqueManager />
          </TabsContent>
          <TabsContent value="holy-places">
            <MosqueManager isHolyPlace />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
