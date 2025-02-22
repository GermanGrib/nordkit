import { ProductResponse } from "@/types/interfaces/wordpress/product.interface";
import Image from "next/image";
import ProductOfDaySlider from "@/components/sliders/product-of-day-slider";
import { Button } from "@/components/ui/button";
import MainBannerSlider from "@/components/sliders/main-banner-slider";

interface MainBannerProps {
  mainBannerData: {
    id: number;
    imgSrc: string;
    linkHref: string;
  }[];
  productsOfDayData: ProductResponse[];
}

const MainBanner = ({ productsOfDayData, mainBannerData }: MainBannerProps) => {
  return (
    <section className="section">
      <div className="container flex gap-6 items-center flex-col lg:flex-row lg:justify-between">
        <MainBannerSlider
          className="w-full h-[152px] sm:h-[278px] lg:h-[300px] lg:w-[66%]"
          variant="mainBanner"
          sliderData={mainBannerData}
          showPagination
          showArrows
          loop
          autoplay={{ autoplay: true, duration: 4000 }}
        />
        <div className="flex w-full flex-col sm:flex-row gap-6 lg:w-[32%]">
          <div className="flex pb-5 md:pb-10 flex-col lg:hidden sm:flex-1 rounded-2xl bg-nk-secondary">
            <div className="relative mb-3 h-[109px] sm:h-[137px]">
              <Image
                className="rounded-t-2xl"
                priority
                src="/publicImages/banners/selectVehicle.webp"
                alt="Рекламный баннер"
                fill
              />
            </div>
            <div className="flex flex-col flex-grow gap-2.5 px-3">
              <div className="font-bold text-xl leading-tight">
                Подбор мототехники и экипировки
              </div>
              <div className="font-normal text-base leading-snug">
                Вы можете самостоятельно подобрать себе технику и аксессуары,
                используя фильтр по категориям
              </div>
              <Button className="mt-auto h-10 sm:h-12" variant="primary">
                Подобрать
              </Button>
            </div>
          </div>
          <div className="flex sm:flex-1 lg:flex-initial lg:flex-grow">
            <ProductOfDaySlider productData={productsOfDayData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
