import { useRef } from "react";

export default function MediaGallery() {
  const videoRef = useRef();

  const play = () => videoRef.current.play();
  const pause = () => videoRef.current.pause();

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4 font-semibold dark:text-white">Course Media</h2>
      <video ref={videoRef} width="600" className="rounded shadow" controls>
        <source src="/sample.mp4" type="video/mp4" />
      </video>
      <div className="mt-4 space-x-2">
        <button onClick={play} className="bg-blue-500 text-white px-4 py-2 rounded">Play</button>
        <button onClick={pause} className="bg-red-500 text-white px-4 py-2 rounded">Pause</button>
      </div>
    </div>
  );
}
