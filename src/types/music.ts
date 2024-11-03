export interface Album {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  year: number;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  genres: string[];
}

export interface News {
  id: string;
  title: string;
  artist: string;
  date: string;
  url: string;
}

export interface MusicVideo {
  id: string;
  title: string;
  artist: string;
  thumbnailUrl: string;
  videoUrl: string;
}