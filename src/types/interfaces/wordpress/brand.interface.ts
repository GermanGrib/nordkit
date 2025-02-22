import { YoastHeadJsonInterface } from "@/types/interfaces/wordpress/yoast.interface";

interface BrandResponse {
  id: number;
  name: string;
  slug: string;
  logo: string;
  yoast_head_json: YoastHeadJsonInterface;
}

export default BrandResponse;
