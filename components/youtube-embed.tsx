import { useEffect, useRef } from "react";

// Add type definitions above the existing code
interface YouTubePlayer {
  pauseVideo: () => void;
}

interface YTPlayerEvent {
  data: number;
}

declare global {
  interface Window {
    YT: {
      Player: new (
        element: HTMLElement,
        options: { events: { onStateChange: (event: YTPlayerEvent) => void } }
      ) => YouTubePlayer;
      PlayerState: {
        PLAYING: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

// Modify the global array to use YouTubePlayer type
let youtubePlayers: YouTubePlayer[] = [];

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
}

export function YoutubeEmbed({ videoId, title }: YoutubeEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let player: YouTubePlayer | undefined;

    const loadPlayer = () => {
      if (!iframeRef.current) return;
      player = new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: (event: YTPlayerEvent) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              youtubePlayers.forEach((p) => {
                if (p !== player && typeof p.pauseVideo === "function") {
                  p.pauseVideo();
                }
              });
            }
          },
        },
      });
      youtubePlayers.push(player);
    };

    if (window.YT && window.YT.Player) {
      loadPlayer();
    } else {
      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        if (previousCallback) previousCallback();
        loadPlayer();
      };
      if (!document.getElementById("youtube-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }

    return () => {
      youtubePlayers = youtubePlayers.filter((p) => p !== player);
    };
  }, []);

  return (
    <div className="aspect-video overflow-hidden rounded-md">
      <iframe
        ref={iframeRef}
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
