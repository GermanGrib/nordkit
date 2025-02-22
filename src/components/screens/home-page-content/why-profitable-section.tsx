import { Fragment } from "react";
import Image from "next/image";

interface WhyProfitableSectionProps {
  profitableData: {
    title: string;
    data: { id: number; title: string; imgSrc: string }[];
  };
}

const WhyProfitableSection = ({
  profitableData,
}: WhyProfitableSectionProps) => {
  const { data, title } = profitableData;
  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((part, index) => (
      <Fragment key={index}>
        {part}
        <br />
      </Fragment>
    ));
  };
  return (
    <section className="section">
      <div className="container lg:max-w-[1196px]">
        <div className="mb-4 sm:mb-8 font-bold text-xl sm:text-center sm:text-3xl lg:text-4xl leading-tight sm:leading-snug lg:leading-tight">
          {title}
        </div>
        <ul className="grid grid-cols-2 gap-x-8 md:gap-x-4 gap-y-6 md:gap-y-10 sm:grid-cols-4 md:grid-cols-5">
          {data.map((item) => {
            return (
              <li key={item.id} className="flex flex-col gap-2 items-center">
                <div className="flex w-16 h-16 lg:w-20 lg:h-20 justify-center items-center rounded-full bg-black border-[3px] border-nk-main">
                  <Image
                    className="lg:w-10 lg:h-10"
                    src={item.imgSrc}
                    alt={"Иконка пункта"}
                    width={30}
                    height={30}
                  />
                </div>
                <div className="text-center text-xs leading-snug font-normal lg:text-xl lg:leading-snug">
                  {renderWithLineBreaks(item.title)}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WhyProfitableSection;
