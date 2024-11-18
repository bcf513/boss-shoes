"use client";

import { CartProvider } from "@/providers/Cart";
import AdvertisementCards from "./(components)/AdvertisementCards";
import CartModal from "./(components)/CartModal";
import Header from "./(components)/Header";
import Products from "./(components)/Products";
import ProductQualityHero from "./(components)/ProductQualityHero";
import CustomersOpinions from "./(components)/CustomersOpinions";

export default function Home() {
  return (
    <CartProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-12 gap-24">
        <CartModal />
        <Header />
        <AdvertisementCards />
        <Products />
        <ProductQualityHero />
        <CustomersOpinions />
      </main>
    </CartProvider>
  );
}
