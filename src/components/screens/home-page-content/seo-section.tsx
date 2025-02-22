import ExpandableContainer from "@/components/expandable-container";

interface SeoSectionProps {
  seoData: {
    title: string;
    text: string;
  };
}

const SeoSection = ({ seoData }: SeoSectionProps) => {
  if (!seoData.title.length && !seoData.text) {
    return null;
  }
  const { title, text } = seoData;
  return (
    <section className="section">
      <div className="container">
        <ExpandableContainer>
          {title.length > 0 && (
            <h1 className="mb-4 md:mb-3 lg:mb-2 text-2xl md:text-4xl lg:text-[44px] font-bold leading-[0.88] md:leading-tight lg:leading-none max-w-[905px]">
              {title}
            </h1>
          )}
          {text.length > 0 && (
            <div
              className="text-base font-normal leading-snug md:text-xl md:leading-snug max-w-[905px]"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
        </ExpandableContainer>
      </div>
    </section>
  );
};

export default SeoSection;
