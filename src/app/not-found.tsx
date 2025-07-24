import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="relative w-screen h-[calc(100vh-72px)] m-0 p-0 overflow-hidden">
      <Image
        src="/Launching-soon-hero.jpg"
        alt="Launching Soon Hero"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="relative z-10 w-[600px] h-full flex flex-col items-center justify-center text-left ml-16">
        <h1 className="text-[180px] leading-[172px] font-normal text-tertiary-blue-50 font-['Graphik_Trial','Graphik',sans-serif] tracking-[-0.04em] m-0 drop-shadow-lg">
          Coming Soon
        </h1>
        <p className="text-[18px] leading-[21.6px] font-normal text-tertiary-blue-50 font-['Graphik_Trial','Graphik',sans-serif] mt-8 max-w-[600px] drop-shadow">
          Subscribe to our social networks to be the first to know all the events and get a discount
          on your first order!
        </p>
      </div>
    </div>
  );
}
