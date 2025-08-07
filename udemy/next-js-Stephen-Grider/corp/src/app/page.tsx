import Image from "next/image";

export default function Home() {
  return (
    <div>
      Home Page
      <div className="absolute -z-10 inset-0">
        <Image
          src="/home.jpg"
          alt="Home Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
