"use client";

import { CartProvider } from "@/providers/Cart";
import AdvertisementCards from "./(components)/AdvertisementCards";
import CartModal from "./(components)/CartModal";
import Header from "./(components)/Header";
import Products from "./(components)/Products";
import ProductQualityHero from "./(components)/ProductQualityHero";
import CustomersOpinions from "./(components)/CustomersOpinions";
import Hero from "./(components)/Hero";

export default function Home() {
  return (
    <CartProvider>
      <main className="relative flex flex-col items-center justify-between gap-6 lg:gap-6">
        <CartModal />
        <Header />
        <Hero />
        <div className="flex flex-col items-center justify-between gap-12 lg:gap-36 p-6 lg:p-12">
          <AdvertisementCards />
          <Products />
          <ProductQualityHero />
          <CustomersOpinions />
        </div>
      </main>
    </CartProvider>
  );
}
