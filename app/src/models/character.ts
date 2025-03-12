export interface Character {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
      name: string;
    };
  }
  
  export interface CharacterResponse {
    characters: {
      info: {
        next: number | null;
        prev: number | null;
      };
      results: Character[];
    };
  }
  