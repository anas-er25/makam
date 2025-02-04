import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createClient } from "@supabase/supabase-js";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, X, Link as LinkIcon, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface ImageUploadProps {
  multiple?: boolean;
  images: string[];
  onImagesChange: (urls: string[]) => void;
}

const ImageUpload = ({
  multiple = false,
  images,
  onImagesChange,
}: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { toast } = useToast();

  const uploadImage = async (file: File) => {
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("mosque-images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("mosque-images").getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      setUploading(true);
      const files = event.target.files;
      if (!files || files.length === 0) return;

      const uploadPromises = Array.from(files).map(uploadImage);
      const urls = await Promise.all(uploadPromises);

      if (multiple) {
        onImagesChange([...images, ...urls]);
      } else {
        onImagesChange([urls[0]]);
      }

      toast({
        title: "تم رفع الصور بنجاح",
        description: "تم إضافة الصور بنجاح",
      });
    } catch (error) {
      console.error("Error in handleFileUpload:", error);
      toast({
        title: "حدث خطأ",
        description: "فشل في رفع الصور",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleUrlSubmit = () => {
    if (!imageUrl) return;

    if (multiple) {
      onImagesChange([...images, imageUrl]);
    } else {
      onImagesChange([imageUrl]);
    }

    setImageUrl("");
    toast({
      title: "تم إضافة الرابط بنجاح",
      description: "تم إضافة رابط الصورة بنجاح",
    });
  };

  const removeImage = (indexToRemove: number) => {
    onImagesChange(images.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {images.map((url, index) => (
          <div key={url} className="relative">
            <img
              src={url}
              alt={`Uploaded ${index + 1}`}
              className="h-24 w-24 rounded-lg object-cover"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div>
          <input
            type="file"
            accept="image/*"
            multiple={multiple}
            onChange={handleFileUpload}
            className="hidden"
            id="image-upload"
            disabled={uploading}
          />
          <label htmlFor="image-upload">
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer"
              disabled={uploading}
              asChild
            >
              <span>
                {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <Upload className="mr-2 h-4 w-4" />
                {multiple ? "رفع صور" : "رفع صورة"}
              </span>
            </Button>
          </label>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" type="button">
              <LinkIcon className="mr-2 h-4 w-4" />
              إضافة رابط
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>إضافة رابط صورة</DialogTitle>
            </DialogHeader>
            <div className="flex gap-2">
              <Input
                type="url"
                placeholder="أدخل رابط الصورة"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <Button onClick={handleUrlSubmit} type="button">
                إضافة
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ImageUpload;