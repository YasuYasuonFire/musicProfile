import React from 'react';
import { Album } from '../types/music';
import { Music } from 'lucide-react';

interface AlbumGridProps {
  albums?: Album[];
}

export const AlbumGrid: React.FC<AlbumGridProps> = ({ albums = [] }) => {
  if (!albums.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <Music className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">No albums found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {albums.map((album) => (
        <div
          key={album.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
        >
          <div className="relative aspect-square">
            {album.coverUrl ? (
              <img
                src={album.coverUrl}
                alt={album.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '';
                  e.currentTarget.className = 'hidden';
                  e.currentTarget.parentElement?.classList.add('bg-gray-200');
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <Music className="w-12 h-12 text-gray-400" />
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">{album.title}</h3>
            <p className="text-gray-600">{album.artist}</p>
            <p className="text-gray-500 text-sm">{album.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};