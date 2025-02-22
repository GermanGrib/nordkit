"use client";
import { ProductResponse } from "@/types/interfaces/wordpress/product.interface";
import Link from "next/link";
import Labels from "@/components/labels";
import Image from "next/image";
import FormatiPrice from "@/utils/formatiPrice";
import { Button } from "@/components/ui/button";
import React from "react";
import StockStatus from "@/components/stock-status";
import StockStatuses from "@/types/enums/products";

interface ProductCardProps {
  productData: ProductResponse;
  className?: string;
}

const ProductCard = ({ productData, className }: ProductCardProps) => {
  const { name, images, tags, price, regular_price } = productData;

  const handleBuyOneClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
  };
  const handleToCartBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
  };
  const handlePriceRequestClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
  };
  //ToDo: add href
  return (
    <Link
      href={"/"}
      className={`${className} flex flex-grow bg-white gap-2.5 md:gap-2 p-3 md:pt-4 md:px-8 md:pb-10 flex-col rounded-2xl`}
    >
      {/*<Skeleton className="h-[26px]" />*/}
      {productData.tags.length > 0 && (
        <Labels labelsData={tags} variant="productCard" />
      )}

      {!productData.tags.length && <div className="h-[26px]" />}

      <div className="relative h-[200px] lg:h-[210px]">
        <Image
          className="object-contain"
          src={images[0].src}
          fill
          alt="Изображение товара"
        />
      </div>
      <StockStatus status={productData.stock_status} variant="productCard" />
      <div className="text-base sm:text-xl font-bold leading-snug md:leading-snug line-clamp-2">
        {name}
      </div>
      <div className="flex flex-col gap-2.5 mt-auto">
        <div className="flex sm:flex-col-reverse items-center sm:items-start gap-2 sm:gap-1 text-xl font-bold leading-tight sm:leading-snug">
          {productData.stock_status === StockStatuses.inStock && (
            <>
              <div>{FormatiPrice(price, 0)}</div>
              <div className="font-normal line-through text-sm opacity-50 sm:text-base sm:leading-normal lg:text-sm lg:leading-none">
                {FormatiPrice(regular_price, 0)}
              </div>
            </>
          )}
          {(productData.stock_status === StockStatuses.outOfStock ||
            productData.stock_status === StockStatuses.preOrder) && (
            <div>Под заказ</div>
          )}
        </div>
        <div className="flex flex-col gap-2.5 md:flex-row">
          <Button
            className="md:flex-1"
            variant={
              productData.stock_status === StockStatuses.inStock
                ? "outline"
                : "primary"
            }
            size="productCard"
            onClick={(e) =>
              productData.stock_status === StockStatuses.inStock
                ? handleBuyOneClick(e)
                : handlePriceRequestClick(e)
            }
            preventProgressBar
          >
            {productData.stock_status === StockStatuses.inStock
              ? "Купить в 1 клик"
              : "Узнать цену"}
          </Button>
          {productData.stock_status === StockStatuses.inStock && (
            <Button
              className="md:flex-1"
              variant="primary"
              size="productCard"
              onClick={(e) => handleToCartBtnClick(e)}
              preventProgressBar
            >
              <Image
                style={{ width: "24px", height: "24px" }}
                width={24}
                height={24}
                src="/publicImages/global/icons/cart-white.svg"
                alt="иконка корзины"
              />
              <span>В корзину</span>
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
