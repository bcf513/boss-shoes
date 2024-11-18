import Image from "next/image";
import React, { ReactElement } from "react";
import { GrStatusGood } from "react-icons/gr";
import { IoDiamondOutline } from "react-icons/io5";
import { RiMedalLine } from "react-icons/ri";

function ProductQualityCard({
  title,
  description,
  icon,
}: Readonly<{
  title: string;
  description: string;
  icon: ReactElement;
}>) {
  return (
    <div className="flex gap-4">
      <div className="flex border-spacing-4 border-solid border-white rounded-2xl border-2 p-2 items-center">
        {React.cloneElement(icon, { size: "2.2em" })}
      </div>
      <div>
        <h3 className="font-bold ">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
}

function ProductQualityHero() {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex flex-col justify-center flex-1 p-4 gap-8">
        <h1 className="font-bold text-4xl w-fit ">Our Product Quality</h1>
        <div className="flex flex-col gap-4" style={{ maxWidth: "70%" }}>
          <ProductQualityCard
            title="Best Quality Shoes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            icon={<RiMedalLine />}
          />
          <ProductQualityCard
            title="Long Lasting Shoes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            icon={<GrStatusGood />}
          />
          <ProductQualityCard
            title="Best Value"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            icon={<IoDiamondOutline />}
          />
        </div>
      </div>
      <div className="relative flex-1 flex items-center justify-center  p-4">
        <div
          className="relative w-96 h-96 rounded-full bg-gradient-to-b opacity-75"
          style={{
            background: "linear-gradient(to bottom, #1BADFF, transparent)",
          }}
        ></div>
        <Image
          width={500}
          height={500}
          className="absolute w-[130%] h-[130%] object-cover"
          src="/images/Green_Airoo-7.png"
          style={{ right: "10%" }}
          alt="Green Airoo 7"
        />
      </div>
    </div>
  );
}

export default ProductQualityHero;
