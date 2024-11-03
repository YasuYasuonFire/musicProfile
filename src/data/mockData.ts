import { Album, Artist, News, MusicVideo } from '../types/music';

export const favoriteAlbums: Album[] = [
  {
    id: '1',
    title: 'Renaissance',
    artist: 'Beyoncé',
    coverUrl: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?w=800',
    year: 2022
  },
  {
    id: '2',
    title: 'Midnights',
    artist: 'Taylor Swift',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800',
    year: 2022
  },
  {
    id: '3',
    title: 'Harry\'s House',
    artist: 'Harry Styles',
    coverUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    year: 2022
  }
];

export const favoriteArtists: Artist[] = [
  {
    id: '1',
    name: 'Beyoncé',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    genres: ['Pop', 'R&B']
  },
  {
    id: '2',
    name: 'Taylor Swift',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    genres: ['Pop', 'Country']
  }
];

export const latestNews: News[] = [
  {
    id: '1',
    title: 'New World Tour Announced',
    artist: 'Beyoncé',
    date: '2024-03-15',
    url: '#'
  },
  {
    id: '2',
    title: 'Surprise Album Release',
    artist: 'Taylor Swift',
    date: '2024-03-10',
    url: '#'
  }
];

export const recentMusicVideos: MusicVideo[] = [
  {
    id: '1',
    title: 'Latest Single',
    artist: 'Beyoncé',
    thumbnailUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800',
    videoUrl: '#'
  },
  {
    id: '2',
    title: 'New Music Video',
    artist: 'Taylor Swift',
    thumbnailUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    videoUrl: '#'
  }
];