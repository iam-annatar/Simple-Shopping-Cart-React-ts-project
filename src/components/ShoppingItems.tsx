import { Button } from '@/@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/@/components/ui/card';

type ShoppingItemsProps = {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
};

export const ShoppingItems = ({
  id,
  imgUrl,
  price,
  name,
}: ShoppingItemsProps) => {
  const count = 0;
  return (
    <Card className=" mb-4 shadow-md">
      <img src={imgUrl} className="object-cover w-full h-[200px]" alt="" />
      <CardContent>
        <div className="flex justify-between items-center mt-4">
          <div className="text-lg">{name}</div>{' '}
          <span className="text-gray-400">{price}</span>
        </div>
      </CardContent>
      <CardFooter>
        {count === 0 ? (
          <Button className="w-full bg-blue-600 hover:bg-blue-600/90">
            + Add To Cart
          </Button>
        ) : (
          <div className="grid grid-cols-1 grid-rows-2 place-items-center mx-auto gap-2">
            <div className="flex items-center gap-2">
              <Button className="bg-blue-600 hover:bg-blue-600/90 p-[12px] h-[1.7rem] rounded-sm ">
                -
              </Button>
              <div className="">
                <div className="text-lg">
                  {count} <span>in cart</span>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-600/90 p-2 h-[1.7rem] rounded-sm ">
                +
              </Button>
            </div>
            <Button className="bg-red-600 hover:bg-red-600/90 w-16 h-7 rounded-sm">
              Remove
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
