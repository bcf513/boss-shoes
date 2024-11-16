import AdvertisementCards from "./(components)/AdvertisementCards";
import CartModal from "./(components)/CartModal";
import Header from "./(components)/Header";
import Products from "./(components)/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 gap-12">
      <CartModal />
      <Header />
      <AdvertisementCards />
      <Products />
    </main>
  );
}
