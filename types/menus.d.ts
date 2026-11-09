interface MenusResponseType {
  success: boolean;
  message: string;
  data: MenusListType[];
}

interface MenusListType {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isBestSeller: boolean;
  isAvailable: boolean;
  stock: number;
}

interface CartItem extends MenusListType {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];

  addToCart: (menu: MenusListType) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}
