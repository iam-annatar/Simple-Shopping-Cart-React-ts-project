import { HeartIcon } from "lucide-react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

import { useWishListContext } from "@/hooks/useWishListContext";

interface HeartLikeProps {
  id: number;
  name: string;
  liked: boolean;
  handleToggle: (id: number) => void;
}

export const HeartLike = ({
  id,
  name,
  liked,
  handleToggle,
}: HeartLikeProps) => {
  const { addToWishList, removeFromWishList } = useWishListContext();

  const handleLike = () => {
    handleToggle(id);

    if (!liked) {
      addToWishList(id);
      toast.success(`item "${name}" added to wishList`);
    } else {
      removeFromWishList(id);
      toast.warning(`item "${name}" removed from wishList`);
    }
  };

  return (
    <div>
      <HeartIcon
        size="1.8rem"
        className={twMerge(
          "heart-bg cursor-pointer duration-300 transition-all ease-in-out active:scale-150 text-muted-foreground",
          liked ? "fill-red-500 text-red-500" : "",
        )}
        onClick={handleLike}
      />
    </div>
  );
};
