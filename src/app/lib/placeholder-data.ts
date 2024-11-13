import { IFinancialInfo, IMoreAboutCategory } from "./definitions";
export const moreAboutCategories: IMoreAboutCategory[] = [
  {
    title: "PAMBII",
    links: [
      { title: "Staking", link: "/" },
      { title: "Documentation", link: "https://www.pambi.tech/whitepaper.pdf" },
      { title: "Explorer", link: "/" },
    ],
  },
  {
    title: "Team",
    links: [
      { title: "Dalas - Youtube", link: "https://youtube.com/DalasReview" },
      { title: "Dalas - Twitter", link: "https://x.com/DalasReview" },
    ],
  },
  {
    title: "Community",
    links: [
      { title: "Twitter", link: "https://x.com/Pambicoin" },
      { title: "Medium", link: "https://medium.com/@PAMBII" },
      { title: "Discord", link: "https://discord.gg/pambii" },
      { title: "Telegram News", link: "https://t.me/pambi_tech" },
      { title: "Telegram Group", link: "https://t.me/+CUw6TJ5g869kNWM1" },
      {
        title: "Pioneer Program",
        link: "/pioneer-program",
      },
    ],
  },
  {
    title: "General",
    links: [
      { title: "Career", link: "/" },
      { title: "Contact", link: "mailto:official@pambi.tech" },
      { title: "Media Kit", link: "/mediakit" },
      { title: "Airdrop", link: "/airdrop" },
      { title: "Terms and Conditions", link: "/terms-and-conditions" },
    ],
  },

  {
    title: "Video on YT 11M+",
    link: "https://www.youtube.com/@DalasReview",
  },
  {
    title: "NEWS",
    isBeta: true,
    link: "https://pambii.news/",
  },
];

export const financialInfo: IFinancialInfo = {
  token_price: 0.0,
  twenty_four_volume: 834.4,
  liquidity: 5.6,
  fdv: 9.4,
};
