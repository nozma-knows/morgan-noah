import { H1, P } from "@/components/ui/typography";
import Image from "next/image";

const WEDDING_DATE = "July 11, 2026";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Top section - content centered in space below header, up to 50vh */}
      <div className="flex flex-col items-center justify-center text-primary gap-4" 
           style={{ height: 'calc(25vh)' }}>
        <H1>Morgan & Noah</H1>
        <P className="text-2xl font-medium">{WEDDING_DATE}</P>
      </div>
      
      {/* Image positioned to start exactly at 50vh from top of viewport */}
      <div className="absolute w-full" style={{ top: '25vh' }}>
        <Image 
          src="/cover-photo.jpeg" 
          alt="Cover photo" 
          width={1000} 
          height={1000}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
