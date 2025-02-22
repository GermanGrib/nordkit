import { YoastHeadJsonInterface } from "@/types/interfaces/wordpress/yoast.interface";
import StockStatuses from "@/types/enums/products";

interface ProductResponse {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: string;
  regular_price: string;
  average_rating: string;
  rating_count: number;
  categories: { id: number; name: string; slug: string }[];
  tags: TagsInterface[];
  images: { id: number; src: string }[];
  attributes: AttributeInterface[];
  related_ids: number[];
  stock_status: StockStatuses;
  yoast_head_json: YoastHeadJsonInterface;

  brand: {
    id: number;
    name: string;
    logo: string;
  };
}

export interface TagsInterface {
  id: number;
  name: string;
  slug: string;
  color: string;
  text_color: string;
}

interface AttributeInterface {
  id: number;
  characteristic: string;
  name: string;
  options: string[];
  visible: boolean;
}

export type { ProductResponse, AttributeInterface };
