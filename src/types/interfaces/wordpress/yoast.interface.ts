interface YoastHeadJsonInterface {
  title: string;
  description: string;
  schema: {
    "@graph": YoastGraphFields[];
  };
}

type YoastGraphFields = YoastBreadcrumbInterface | YoastGraphImageInterface;

interface YoastBreadcrumbInterface {
  "@type": "BreadcrumbList";
  itemListElement: SingleBreadCrumbInterface[];
}

interface YoastGraphImageInterface {
  "@type": "ImageObject";
  url: string;
}

interface SingleBreadCrumbInterface {
  position: number;
  name: string;
  item?: string;
}

export type { YoastHeadJsonInterface };
