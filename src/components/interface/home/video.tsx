"use client";
import { PlayCircle } from "lucide-react";
import Video from "next-video";
import { useState } from "react";

interface CustomVideoProps {
  src: string;
}
export default function CustomVideo({ src }: CustomVideoProps) {
  const [play, setPlay] = useState(false);
  return (
    <div className="rounded-md relative overflow-hidden">
      <Video src={src} className="rounded-md" controls={play} />
      {!play && (
        <>
          <div className="absolute bg-black/50 top-0 bottom-0 left-0 right-0"></div>
          <PlayCircle
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer hover:fill-white/20"
            size={70}
            strokeWidth={0.5}
            onClick={() => setPlay(!play)}
          />
        </>
      )}
    </div>
  );
}
