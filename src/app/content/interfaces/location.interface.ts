import {PaginationInfo} from "./pagination-info.interface";

export interface LocationsInfo {
  info: PaginationInfo;
  results: Location[];
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}
