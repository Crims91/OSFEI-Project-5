export interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
  searchInfo: {
    textSnippet: string;
  };
}

export interface ApiResponce {
  totalItems: number;
  items: GoogleBook[];
}

export interface BookCardProps {
  book: GoogleBook;
}

export interface RemoveBookDetail {
  id: string | undefined;
}

export interface BookFavorite {
  bookFavorite: GoogleBook[];
}

export interface InitialValue {
  value: string;
}
