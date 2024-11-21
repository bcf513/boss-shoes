import React from "react";
import { AiOutlineMessage } from "react-icons/ai";

function CustomerOpinionCard({
  name,
  opinion,
  image,
  profession,
}: Readonly<{
  name: string;
  opinion: string;
  image?: string;
  profession?: string;
}>) {
  return (
    <div className="flex flex-col p-8 gap-4 backdrop-blur-sm bg-white/30 rounded-3xl">
      <div className="flex justify-between p-2 items-center">
        <img
          className="w-16 h-16 rounded-full drop-shadow-2xl"
          src={image ?? "/images/Avatar.png"}
          alt={name}
        />
        <AiOutlineMessage size="3em" />
      </div>
      <div>
        <p className="text-gray-200">{opinion}</p>
      </div>
      <div>
        <h3 className="font-bold ">{name}</h3>
        <p className="text-sm text-gray-200">
          {profession ?? "Happy Customer"}
        </p>
      </div>
    </div>
  );
}

function CustomersOpinions() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="text-center">
        <h1 className="text-bold text-4xl">What Our Happy Customers Says</h1>
        <hr className="w-24 my-4 border-t-2 border-white mx-auto" />
        <p className="text-gray-200">
          Our customers love the products that we make. Here are some of the
          reviews that they have given us.
        </p>
      </div>
      <div className="flex flex-col justify-evenly gap-8 lg:flex-row w-full">
        <CustomerOpinionCard
          name="John Doe"
          opinion="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <CustomerOpinionCard
          name="John Doe"
          opinion="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </div>
    </div>
  );
}

export default CustomersOpinions;
