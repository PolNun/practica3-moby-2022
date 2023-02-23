import {PaginationInfo} from "./pagination-info.interface";

export interface LocationsInfo {
  info: PaginationInfo;
  results: LocationRickAndMorty[];
}

export interface LocationRickAndMorty {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}
