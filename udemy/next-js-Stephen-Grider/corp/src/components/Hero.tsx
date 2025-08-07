import Image from "next/image";
import React, { FC } from "react";

interface IHero {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const Hero: FC<IHero> = ({ imageSrc, imageAlt, title }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <p className="text-white text-6xl">{title}</p>
      </div>
    </div>
  );
};

export default Hero;
