import { WishList } from "@/components/WishList";
import { useWishListContext } from "@/hooks/useWishListContext";

export const WhishListPage = () => {
  const { wishList } = useWishListContext();

  return (
    <div className="mt-8">
      <div className="mb-8 text-center text-2xl">WishList</div>
      {wishList.map((item) => {
        return <WishList key={item.id} {...item} />;
      })}
    </div>
  );
};
