export default function SpotifyPlayer() {
  return (
    <div className="w-80 md:w-96 lg:w-[420px] bg-black rounded-xl overflow-hidden h-[152px]">
      <iframe
        style={{
          borderRadius: "12px",
          backgroundColor: "transparent",
        }}
        src="https://open.spotify.com/embed/playlist/6HuGmDDzcvvcJ88nWrPEoG?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}
