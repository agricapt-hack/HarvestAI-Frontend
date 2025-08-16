import { Loader2 } from 'lucide-react';

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
        <p className="text-sm text-muted-foreground">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default FullPageLoader;
