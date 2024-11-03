import React from 'react';
import { Music } from 'lucide-react';
import { AlbumGrid } from './components/AlbumGrid';
import { ArtistSection } from './components/ArtistSection';
import { NewsAndVideos } from './components/NewsAndVideos';
import { favoriteAlbums, favoriteArtists, latestNews, recentMusicVideos } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Music className="w-10 h-10" />
            <h1 className="text-3xl font-bold">My Music Profile</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Favorite Albums</h2>
          <AlbumGrid albums={favoriteAlbums} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Favorite Artists</h2>
          <ArtistSection artists={favoriteArtists} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">News & Videos</h2>
          <NewsAndVideos news={latestNews} videos={recentMusicVideos} />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Music Profile. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;