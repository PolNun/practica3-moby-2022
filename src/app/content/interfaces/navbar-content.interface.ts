export interface LinksBody {
  link: string;
  text: string;
}

export interface NavbarContent {
  contentTitle: string;
  contentListingLink: string;
  contentSearchingLink: string;
  dropdownLinks: LinksBody[];
}
