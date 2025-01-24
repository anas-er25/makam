import { Heart } from "lucide-react";

const Palestine = () => {
  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold">قضيتي</h1>
        <p className="text-gray-600">دعم القضية الفلسطينية وحق العودة</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">تعرف على القضية</h2>
          <p className="text-gray-600">
            القضية الفلسطينية هي قضية عادلة تتعلق بحق الشعب الفلسطيني في العودة إلى
            أرضه وتقرير مصيره. تعرف على تاريخ القضية وأهم محطاتها.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">كيف يمكنني المساعدة؟</h2>
          <p className="text-gray-600">
            هناك العديد من الطرق للمساهمة في دعم القضية الفلسطينية، من خلال التبرع
            للمؤسسات الإنسانية، نشر الوعي، والمشاركة في الفعاليات الداعمة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Palestine;