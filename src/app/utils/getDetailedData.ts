interface Video {
  url: string;
  type: string;
  language: string;
  title: string;
  author: string;
  date: string;
}

async function fetchYouTubeVideoData(
  videoId: string,
  youtubeAPIKey: string | undefined
): Promise<any> {
  const youtubeResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${youtubeAPIKey}`
  );
  const youtubeData = await youtubeResponse.json();
  return youtubeData.items[0].snippet;
}

async function fetchVideoData(
  video: Video,
  youtubeAPIKey: string | undefined
): Promise<Video | null> {
  if (video.type === "youtube") {
    const videoId = video.url.includes("youtu.be")
      ? video.url.slice(-11)
      : new URL(video.url).searchParams.get("v");
    if (videoId) {
      const videoData = await fetchYouTubeVideoData(videoId, youtubeAPIKey);
      return {
        ...video,
        title: videoData.title || video.title,
        author: videoData.channelTitle || video.author,
        date: videoData.publishedAt
          ? videoData.publishedAt.slice(0, 10)
          : video.date,
      };
    }
  }

  return null;
}

export async function getDetailedData(
  videos: Video[],
  youtubeAPIKey: string | undefined
): Promise<Video[]> {
  const updatedVideos = await Promise.all(
    videos.map(async (video) => {
      try {
        const updatedVideo = await fetchVideoData(video, youtubeAPIKey);
        return updatedVideo || video;
      } catch (error) {
        return video;
      }
    })
  );

  return updatedVideos;
}
