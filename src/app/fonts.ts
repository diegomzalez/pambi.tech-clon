import { Chakra_Petch, Inter, Montserrat } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
});

export const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
