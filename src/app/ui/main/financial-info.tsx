import { montserrat } from "@/app/fonts";
import { fetchFinancialInfo } from "@/app/lib/data";

function FinancialInfoUnit({ name, value }: { name: string; value: string }) {
  return (
    <article className="grid justify-center">
      <p className={`${montserrat.className} text-lg mb-2 md:mb-4 text-center`}>
        {name}
      </p>
      <p className="text-3xl md:text-4xl lg:text-5xl">${value}</p>
    </article>
  );
}

export default async function FinancialInfo() {
  const { fdv, liquidity, token_price, twenty_four_volume } =
    await fetchFinancialInfo();

  return (
    <section className="mt-10 lg:w-[1000px]">
      <section className="mx-auto max-w-3xl">
        <section className="grid grid-cols-2 gap-y-4 md:flex justify-center">
          <FinancialInfoUnit
            key="token-price"
            name="Token Price"
            value={token_price.toPrecision(5)}
          />
          <div className="hidden md:block mx-6 border border-[hsla(0,0%,100%,.1)]"></div>
          <FinancialInfoUnit
            key="twenty-four-hou-volume"
            name="24h Volume"
            value={twenty_four_volume.toString()}
          />
          <div className="hidden md:block mx-6 border border-[hsla(0,0%,100%,.1)]"></div>
          <FinancialInfoUnit
            key="liquidity"
            name="Liquidity"
            value={liquidity + "K"}
          />
          <div className="hidden md:block mx-6 border border-[hsla(0,0%,100%,.1)]"></div>
          <FinancialInfoUnit key="fdv" name="FDV" value={fdv + "K"} />
        </section>
      </section>
    </section>
  );
}
