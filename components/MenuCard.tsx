import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface menuProp {
  menu: MenusListType;
  index: number;
}

const MenuCard = ({ menu, index }: menuProp) => {
  const { slug, title, description, image, price, stock } = menu;

  const isOutOfStock = (stock ?? 0) === 0;
  const isLowOfStock = (stock ?? 0) > 0 && (stock ?? 0) <= 10;

  return (
    <Card key={index} className="w-full md:w-72 shrink-0 ">
      <Link href={`/menu/${slug}`}>
        <CardHeader>
          <div className="w-full h-64 relative mb-4 overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              width={300}
              height={200}
              className="w-full h-full object-cover cursor-pointer object-center transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex justify-between">
            <CardTitle className="font-semibold text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">
              {title}
            </CardTitle>
            {/* start stock status badge */}
            {isOutOfStock ? (
              <Badge variant={"destructive"} className="shrink-0">
                Sold Out
              </Badge>
            ) : isLowOfStock ? (
              <Badge variant={"secondary"} className="shrink-0">
                {stock} Item Left
              </Badge>
            ) : (
              <Badge variant={"default"} className="shrink-0">
                In Stock
              </Badge>
            )}
            {/* end stock status badge */}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
          <CardDescription className="font-bold text-xl">
            Rp {price.toLocaleString()}
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
};

export default MenuCard;
