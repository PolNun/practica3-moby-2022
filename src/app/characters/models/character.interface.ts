import {Info} from "../../shared/interfaces/pagination-info.interface";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ShortLocation;
  location: ShortLocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface characterSearch {
  info: Info;
  results: Character[];
}

export interface ShortLocation {
  name: string;
  url: string;
}
