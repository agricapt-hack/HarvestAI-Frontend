import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface VideoModule {
  id: string;
  title: string;
  descriptionSnippet: { text: string; bold?: boolean }[];
  link: string;
  duration: string;
  thumbnails: { url: string; height: number; width: number }[];
  viewCount: { short: string; text: string };
  publishedTime: string;
  channel: {
    name: string;
    link: string;
    thumbnails: { url: string; height: number; width: number }[];
  };
}

interface ModulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  modules: VideoModule[];
  product: {
    title: string;
    id: string;
  } | null;
}

const ModulesModal: React.FC<ModulesModalProps> = ({
  isOpen,
  onClose,
  modules,
  product,
}) => {

    console.log(modules);
    console.log(product);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {modules && product && <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle className="text-xl font-semibold">
            Recommendations for: {product?.title}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[70vh] pr-4">
          <div className="grid gap-4">
            {modules && modules.length > 0 && modules.map((module, index) => (
              <a
                key={index}
                href={module.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 border rounded-md p-4 hover:bg-gray-50 transition duration-200"
              >
                <img
                  src={module.thumbnails?.[0]?.url}
                  alt={module.title}
                  className="w-40 h-auto rounded-md object-cover"
                />

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {module.title}
                    </h3>

                    <p className="text-sm text-gray-700 mb-2">
                      {module && module.descriptionSnippet && module.descriptionSnippet.length > 0 && module.descriptionSnippet.map((part, idx) => (
                        <span
                          key={idx}
                          className={part.bold ? "font-bold" : ""}
                        >
                          {part.text}
                        </span>
                      ))}
                    </p>

                    <p className="text-xs text-gray-500">
                      Duration: {module.duration}
                    </p>
                  </div>

                  <div className="mt-2 text-xs text-gray-500">
                    <p>
                      Channel:{" "}
                      <a
                        href={module.channel.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {module.channel.name}
                      </a>
                    </p>
                    <p>
                      Views: {module.viewCount.short} •{" "}
                      {module.publishedTime}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>}
    </Dialog>
  );
};

export default ModulesModal;
