export interface IMoreAboutCategory {
  isBeta?: boolean;
  title: string;
  links?: { title: string; link: string }[];
}
export const moreAboutCategories: IMoreAboutCategory[] = [
  {
    title: "PAMBII",
    links: [
      { title: "Staking", link: "" },
      { title: "Documentation", link: "" },
      { title: "Explorer", link: "" },
    ],
  },
  {
    title: "Team",
    links: [
      { title: "Dalas - Youtube", link: "" },
      { title: "Dalas - Twitter", link: "" },
    ],
  },
  {
    title: "Community",
    links: [
      { title: "Twitter", link: "" },
      { title: "Medium", link: "" },
      { title: "Discord", link: "" },
      { title: "Telegram News", link: "" },
      { title: "Telegram Group", link: "" },
      { title: "Telegram Program", link: "" },
    ],
  },
  {
    title: "General",
    links: [
      { title: "Career", link: "" },
      { title: "Contact", link: "" },
      { title: "Media Kit", link: "" },
      { title: "Airdrop", link: "" },
      { title: "Terms and Conditions", link: "" },
    ],
  },
  {
    title: "Video on YT 11M+",
  },
  {
    title: "NEWS",
    isBeta: true,
  },
];
