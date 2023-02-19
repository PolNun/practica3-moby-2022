export interface LinksBody {
  link: string;
  text: string;
}

export interface NavbarContentInterface {
  contentTitle: string;
  contentListingLink: string;
  contentSearchingLink: string;
  dropdownLinks: LinksBody[];
}
