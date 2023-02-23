import {PaginationInfo} from "./pagination-info.interface";

export interface EpisodesInfo {
  info:    PaginationInfo;
  results: Episode[];
}

export interface Episode {
  id:         number;
  name:       string;
  air_date:   string;
  episode:    string;
  characters: string[];
  url:        string;
  created:    Date;
}
