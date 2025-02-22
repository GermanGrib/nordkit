interface AboutUsVideoSectionProps {
  sectionData: {
    title: string;
    text: string;
    videoSrc: string;
  };
}

const AboutUsVideoSection = ({ sectionData }: AboutUsVideoSectionProps) => {
  const { title, text, videoSrc } = sectionData;
  return (
    <section className="section">
      <div className="container flex flex-col gap-6 sm:flex-row-reverse sm:gap-5 sm:items-center lg:max-w-[1196px] xl:gap-24">
        <div className="sm:flex-1">
          <div className="mb-4 text-xl leading-tight font-bold sm:hidden">
            {title}
          </div>
          <div className="h-[232px] md:h-[302px] xl:h-[458px]">
            <iframe
              className="rounded-2xl"
              src={videoSrc}
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="sm:flex-1 sm:flex sm:flex-col sm:gap-3 xl:gap-6 2xl:gap-3">
          <div className="hidden sm:block font-bold text-3xl leading-snug xl:text-4xl xl:leading-snug">
            {title}
          </div>
          <div
            className="text-base font-normal leading-snug sm:leading-tight xl:text-xl xl:leading-snug"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsVideoSection;
