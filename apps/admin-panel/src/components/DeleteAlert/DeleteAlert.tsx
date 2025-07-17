import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@school-wits/ui";
import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDelete } from "../../api/api-calls";

interface DeleteAlertProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  url: string;
  title?: string;
  description?: string;
  onSuccess?: () => void;
}

export function DeleteAlert({
  open,
  onOpenChange,
  url,
  title,
  description,
  onSuccess,
}: DeleteAlertProps) {
  const { mutate, isError, isSuccess, isPending, fetchError } = useDelete(url);

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
      console.error(fetchError);
    }
    if (isSuccess) {
      onSuccess && onSuccess();
      onOpenChange(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {title || "Are you absolutely sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {description ||
              "This action cannot be undone. This will permanently remove the data from our servers."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              url && mutate();
            }}
            className="cursor-pointer w-[80px]"
          >
            {isPending ? (
              <Loader2Icon className="animate-spin scale-150" />
            ) : (
              "Delete"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
