interface YoutubeEmbedProps {
  videoId: string
  title: string
}

export function YoutubeEmbed({ videoId, title }: YoutubeEmbedProps) {
  return (
    <div className="aspect-video overflow-hidden rounded-md">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

