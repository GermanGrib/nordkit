import StockStatuses from "@/types/enums/products";

interface StockStatusProps {
  status: StockStatuses;
  variant?: "default" | "productCard";
}

const statusWrapperStyle = {
  default: "",
  productCard: "flex gap-1 items-center",
};

const circleStyle = {
  default: "",
  productCard: "w-2 h-2 rounded-full",
};

const textStyle = {
  default: "",
  productCard: "text-xs leading-none font-normal opacity-60 whitespace-nowrap",
};

const StockStatus = ({ status, variant = "default" }: StockStatusProps) => {
  let statusText;
  let circleBackgroundColor;
  switch (status) {
    case StockStatuses.inStock: {
      statusText = "В наличии";
      circleBackgroundColor = "#00AF27";
      break;
    }
    case StockStatuses.outOfStock: {
      statusText = "Нет в наличии";
      circleBackgroundColor = "#C11111";
      break;
    }
    case StockStatuses.preOrder: {
      statusText = "Под заказ";
      circleBackgroundColor = "#C11111";
      break;
    }
    default:
      statusText = "";
  }
  return (
    <>
      {status && (
        <div className={statusWrapperStyle[variant]}>
          <div
            className={circleStyle[variant]}
            style={{ backgroundColor: circleBackgroundColor }}
          />
          <div className={textStyle[variant]}>{statusText}</div>
        </div>
      )}
    </>
  );
};

export default StockStatus;
