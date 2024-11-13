export interface IMoreAboutCategory {
  isBeta?: boolean;
  title: string;
  links?: { title: string; link: string }[];
  link?: string;
}

export interface IFinancialInfo {
  token_price: number;
  twenty_four_volume: number;
  liquidity: number;
  fdv: number;
}
