import { deleteCategory } from "@/apis/categories";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useParams } from "@/router";
import { DialogClose } from "@radix-ui/react-dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  categoryId: string;
}

export default function DeleteCategoryModal({ categoryId }: Props) {
  const queryClient = useQueryClient();
  const { orgID } = useParams("/channels/:orgID/:channelID");

  const deleteQueryMutation = useMutation({
    mutationKey: ["deleteCategory", categoryId],
    mutationFn: () => deleteCategory(categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orgs", orgID],
      });
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:bg-red-500 text-red-500 hover:text-white p-2 cursor-pointer">
          Delete Channel
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex gap-2">
          <DialogClose>
            <Button variant="link" className="text-white">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose>
            <Button
              variant="destructive"
              onClick={() => deleteQueryMutation.mutate()}
            >
              Delete Category
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
