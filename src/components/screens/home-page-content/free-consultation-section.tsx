import Link from "next/link";
import Image from "next/image";

const FreeConsultationSection = () => {
  return (
    <section className="section">
      <div className="container flex flex-col gap-3 sm:flex-row sm:gap-5 sm:items-center lg:max-w-[1269px] lg:gap-20 xl:gap-40">
        <div className="sm:flex-1">
          <div className="mb-4 text-xl leading-tight font-bold sm:hidden">
            Бесплатная видеоконсультация
          </div>
          <div className="flex justify-center">
            <Image
              className="rounded-2xl object-contain md:w-full md:h-[302px] md:object-fill xl:h-[458px]"
              alt="Видеоконсультация"
              src="/publicImages/banners/free-video-consultant.webp"
              width={284}
              height={232}
            ></Image>
          </div>
        </div>
        <div className="sm:flex-1 md:w-2/5 flex flex-col">
          <div className="hidden sm:block md:mb-3 lg:mb-2 font-bold text-3xl leading-snug xl:text-4xl xl:leading-tight md:w-4/5 lg:w-3/4">
            Бесплатная видеоконсультация
          </div>
          <div className="mb-3 md:mb-5 lg:mb-6 text-base font-normal leading-snug sm:leading-tight xl:text-xl xl:leading-snug md:w-4/5 lg:w-3/4">
            Получите подробную консультацию по видеосвязи, напрямую из магазина
          </div>
          <Link
            href="/"
            className="flex mb-3 lg:mb-5 justify-center items-center h-10 md:h-12 bg-nk-main text-white font-bold md:text-xl md:font-normal leading-snug md:leading-snug rounded-lg hover:bg-nk-main-hover active:bg-nk-main-active md:w-4/5 lg:w-3/4"
          >
            Звонок по видеосвязи
          </Link>
          <div className="mb-4 text-sm font-normal lg:font-base lg:leading-tight md:w-4/5 lg:w-3/4">
            Звонок по видеосвязи будет совершён на WhatsApp на указанный вами
            номер
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultationSection;
