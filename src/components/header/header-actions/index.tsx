"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import RoutesPaths from "@/types/enums/routes";
import SearchLine from "@/components/search-line";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { toggleDropdownCatalog } from "@/store/slices/uiSlice";

const HeaderAction = () => {
  const dispatch = useAppDispatch();
  const isDropdownCatalogOpen = useAppSelector(
    (state) => state.ui.isDropdownCatalogOpen,
  );
  const linksStyles =
    "flex flex-col items-center justify-center gap-2 justify-between";
  const iconsStyles = "opacity-50";
  const textStyles = "text-sm font-normal";

  return (
    <div className="hidden lg:flex gap-6 h-[50px]">
      <Button
        className={isDropdownCatalogOpen ? "bg-nk-main-active" : ""}
        variant="primary"
        size="catalogBtn"
        onClick={() => dispatch(toggleDropdownCatalog())}
      >
        <Image
          style={{ width: "30px", height: "30px" }}
          priority
          src="/publicImages/global/icons/burger.svg"
          alt="Иконка каталога"
          width={30}
          height={30}
        />
        Каталог
      </Button>
      <div className="relative flex-grow">
        <SearchLine variant="header" className="flex h-full" />
      </div>
      <div className="flex gap-5">
        <Link href={RoutesPaths.CONTACTS} className={linksStyles}>
          <Image
            priority
            className={iconsStyles}
            src="/publicImages/global/icons/location.svg"
            width={24}
            height={24}
            alt="Иконка локации"
          />
          <span className={textStyles}>Магазины</span>
        </Link>
        <Link href={RoutesPaths.CART} className={linksStyles}>
          <Image
            style={{ width: "24px", height: "24px" }}
            priority
            className={iconsStyles}
            src="/publicImages/global/icons/cart.svg"
            width={24}
            height={24}
            alt="Иконка корзины"
          />
          <span className={textStyles}>Корзина</span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderAction;
