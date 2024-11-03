import React from 'react';
import { Artist } from '../types/music';
import { User } from 'lucide-react';

interface ArtistSectionProps {
  artists?: Artist[];
}

export const ArtistSection: React.FC<ArtistSectionProps> = ({ artists = [] }) => {
  if (!artists.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">No artists found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {artists.map((artist) => (
        <div
          key={artist.id}
          className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
            {artist.imageUrl ? (
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '';
                  e.currentTarget.className = 'hidden';
                  e.currentTarget.parentElement?.classList.add('bg-gray-200');
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-bold text-lg">{artist.name}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {artist.genres?.map((genre) => (
                <span
                  key={genre}
                  className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};