import CheckoutPage from "./components/Checkout";
import ShoppingCartPage from "./components/ShoppingCart";

export default function CartPage() {
  return (
    <div className="w-full min-h-screen">
      <ShoppingCartPage />
      <CheckoutPage />
    </div>
  );
}
