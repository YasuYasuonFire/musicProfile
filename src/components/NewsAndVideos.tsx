import React from 'react';
import { News, MusicVideo } from '../types/music';
import { Calendar, Play } from 'lucide-react';

interface NewsAndVideosProps {
  news?: News[];
  videos?: MusicVideo[];
}

export const NewsAndVideos: React.FC<NewsAndVideosProps> = ({ 
  news = [], 
  videos = [] 
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Calendar className="w-6 h-6 mr-2" />
          Latest News
        </h2>
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.artist}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </a>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500">
              No news available
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Play className="w-6 h-6 mr-2" />
          Recent Music Videos
        </h2>
        <div className="space-y-4">
          {videos.length > 0 ? (
            videos.map((video) => (
              <a
                key={video.id}
                href={video.videoUrl}
                className="block rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
              >
                <div className="relative aspect-video">
                  {video.thumbnailUrl ? (
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '';
                        e.currentTarget.className = 'hidden';
                        e.currentTarget.parentElement?.classList.add('bg-gray-200');
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <Play className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="font-semibold">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.artist}</p>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500">
              No music videos available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};