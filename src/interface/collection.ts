export interface Collection {
  name: string;
  image_url: string;
  title: string;
  nft_count: number;
  display_name: string;
  is_coming_soon: Boolean;
  desc?: string;
  brief_description?: string;
  collection?: string;
}