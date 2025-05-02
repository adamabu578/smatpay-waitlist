// app/hooks/use-toast.ts
import { toast as useSonnerToast } from "sonner";

export const useToast = () => {
  const toast = useSonnerToast("Default message", { duration: 3000 });
  return toast;
};
