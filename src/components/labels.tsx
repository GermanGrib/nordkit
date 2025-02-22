import { TagsInterface } from "@/types/interfaces/wordpress/product.interface";

interface LabelsProps {
  labelsData: TagsInterface[];
  variant?: "default" | "productCard";
  className?: string;
}

const listVariantStyle = {
  default: "",
  productCard:
    "flex gap-2 overflow-scroll scrollbar-none max-w-[260px] h-[26px]",
};

const labelVariantStyle = {
  default: "",
  productCard:
    "flex px-2 py-1 justify-center items-center text-xs sm:text-sm lg:text-xs font-normal sm:font-bold lg:font-normal leading-snug lg:leading-snug rounded whitespace-nowrap",
};

const Labels = ({
  labelsData,
  className,
  variant = "default",
}: LabelsProps) => {
  const listStyle = `${listVariantStyle[variant]} ${className}`;
  return (
    <ul className={listStyle}>
      {labelsData.map(({ id, name, color: backgroundColor, text_color }) => {
        const DEFAULT_BACKGROUND_COLOR = "#C11111";
        const DEFAULT_TEXT_COLOR = "#ffffff";
        const colorsStyles = {
          backgroundColor: backgroundColor
            ? backgroundColor
            : DEFAULT_BACKGROUND_COLOR,
          color: text_color ? text_color : DEFAULT_TEXT_COLOR,
        };
        return (
          <li
            key={id}
            style={colorsStyles}
            className={labelVariantStyle[variant]}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default Labels;
