import { IFinancialInfo } from "@/app/lib/definitions";
import { financialInfo } from "@/app/lib/placeholder-data";

export async function fetchFinancialInfo(): Promise<IFinancialInfo> {
  try {
    return new Promise<IFinancialInfo>((resolve) => {
      setTimeout(() => {
        resolve(financialInfo);
      }, 5000);
    });
  } catch (error) {
    throw new Error("Failed to fetch financial info: " + error);
  }
}
