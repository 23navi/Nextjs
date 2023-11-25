import Image from "next/image";
import { StaticImageData } from "next/image";

interface IHeroProps {
  imgData: StaticImageData;
  altText: string;
  title: string;
}

export default function Hero(props: IHeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.altText}
          fill
          style={{ objectFit: "cover" }}
        ></Image>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>

      <div className="pt-48 z-1 flex justify-center items-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
}
