const formatPrice = (value: unknown, fraction = 2): string => {
  let numericValue: number;

  if (typeof value === "string") {
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
      return "";
    }

    numericValue = parseFloat(trimmedValue);
    if (isNaN(numericValue)) {
      return "";
    }
  } else if (typeof value === "number") {
    numericValue = value;
  } else {
    return "";
  }

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: fraction,
  }).format(numericValue);
};

export default formatPrice;
