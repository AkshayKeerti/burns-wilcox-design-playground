import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="relative w-screen h-screen m-0 p-0 overflow-hidden">
      <Image
        src="/Launching-soon.png"
        alt="Launching Soon Hero"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="relative z-10 w-[800px] h-full flex flex-col items-center justify-center text-left ml-16">
        <h1 className="text-[220px] leading-[210px] font-normal text-tertiary-blue-50 font-['Graphik_Trial','Graphik',sans-serif] tracking-[-0.04em] m-0 drop-shadow-lg">
          Coming Soon
        </h1>
      </div>
    </div>
  );
}
