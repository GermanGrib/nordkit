import SearchLine from "@/components/search-line";
import regionsApiMOCK from "@/data/mocks/regionsApiMOCK";
import productsOfTheDayMOCK from "@/data/mocks/productsMOCK";
import OffersSlider from "@/components/sliders/offers-slider";
import MainBanner from "@/components/screens/home-page-content/main-banner";
import mainBannerData from "@/data/mocks/bannersMOCK";
import bannersMOCK from "@/data/mocks/bannersMOCK";
import sliderMOCKdata from "@/data/mocks/sliderMOCK";
import AdsSection from "@/components/screens/home-page-content/ads-section";
import PopularCategories from "@/components/screens/home-page-content/popular-categories";
import popularCategoriesMOCKdata from "@/data/mocks/popularCategoriesMOCK";
import AboutUsVideoSection from "@/components/screens/home-page-content/about-us-video-section";
import AboutUsVideoMOCKdata from "@/data/mocks/aboutUsVideoMOCKdata";
import WhyProfitableSection from "@/components/screens/home-page-content/why-profitable-section";
import profitableDataMOCK from "@/data/mocks/profitableDataMOCK";
import FreeConsultationSection from "@/components/screens/home-page-content/free-consultation-section";
import SeoSection from "@/components/screens/home-page-content/seo-section";
import seoSectionMOCK from "@/data/mocks/seoSectionMOCK";

// interface HomePageProps {
//   params: Promise<{ subdomain: string }>;
// }

const HomePage = async () =>
  // { params }: HomePageProps
  {
    const productsOfDayData = productsOfTheDayMOCK;
    // const { subdomain } = await params;
    return (
      <>
        <div className="container md:hidden">
          <SearchLine variant="homePage" />
        </div>
        <MainBanner
          productsOfDayData={productsOfDayData}
          mainBannerData={mainBannerData}
        />
        <section className="section bg-nk-secondary">
          <div className="container">
            <OffersSlider sliderData={sliderMOCKdata} />
          </div>
        </section>
        <AdsSection adsData={bannersMOCK} />
        <section className="section bg-nk-secondary">
          <div className="container">
            <OffersSlider sliderData={sliderMOCKdata} />
          </div>
        </section>
        <PopularCategories categoriesData={popularCategoriesMOCKdata} />
        {/*<section className="section">*/}
        {/*  <div className="container">*/}
        {/*    <PopularBrands brandsData={popularBrandsMOCKdata} />*/}
        {/*  </div>*/}
        {/*</section>*/}
        <section className="section bg-nk-secondary">
          <div className="container">
            <OffersSlider sliderData={sliderMOCKdata} />
          </div>
        </section>
        <AboutUsVideoSection sectionData={AboutUsVideoMOCKdata} />
        <WhyProfitableSection profitableData={profitableDataMOCK} />
        <FreeConsultationSection />
        <SeoSection seoData={seoSectionMOCK} />
      </>
    );
  };

export async function generateStaticParams() {
  // const allRegionsData = await getAllRegions();
  const allRegionsData = regionsApiMOCK;
  const subdomains = Object.values(allRegionsData)
    .map((region) => region.subdomain)
    .filter((region) => region !== "" && region !== "/");

  return subdomains.map((subdomain) => ({
    subdomain,
  }));
}

export default HomePage;
