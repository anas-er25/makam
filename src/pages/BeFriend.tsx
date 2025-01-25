import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const BeFriend = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <Heart className="mx-auto h-16 w-16 text-primary mb-6" />
        <h1 className="text-3xl font-bold mb-4">كن صديقاً</h1>
        <p className="text-gray-600 mb-8">
          انضم إلينا في رحلة دعم القضية الفلسطينية ونشر الوعي حول مقدساتنا. يمكنك المساهمة بطرق مختلفة.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">التبرع</h3>
            <p className="text-gray-600 mb-4">ساهم في دعم مشاريعنا وبرامجنا</p>
            <Button>تبرع الآن</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">التطوع</h3>
            <p className="text-gray-600 mb-4">شارك معنا في نشر الوعي والمعرفة</p>
            <Button variant="outline">سجل كمتطوع</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeFriend;