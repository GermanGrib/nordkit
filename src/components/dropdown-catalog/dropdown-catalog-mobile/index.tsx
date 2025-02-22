"use client";
import Image from "next/image";
import CrossSvg from "@/components/icons/icon-cross";
import { MenuItem } from "@/types/interfaces/wordpress/menus.interface";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Link from "next/link";
import { Fragment } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { closeDropdownCatalog } from "@/store/slices/uiSlice";

interface DropdownCatalogMobileProps {
  catalogListData: MenuItem[] | null;
  extraMenuList: MenuItem[] | null;
}

const DropdownCatalogMobile = ({
  catalogListData,
  extraMenuList,
}: DropdownCatalogMobileProps) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isDropdownCatalogOpen);
  const listsItemTextClassname =
    "text-base font-normal leading-snug hover:no-underline";

  const handleCrossBtnClick = () => {
    dispatch(closeDropdownCatalog());
  };

  const handleItemClick = () => {
    dispatch(closeDropdownCatalog());
  };

  return (
    <div
      className={`absolute top-0 pt-5 bg-white w-full h-screen z-50 ${isOpen ? "flex flex-col" : "hidden"} lg:hidden`}
    >
      <div className="flex px-[18px] pb-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src="/publicImages/global/icons/logoIcon.svg"
            alt="Иконка логотипа компании"
            width={44}
            height={44}
          />
          <div className="font-bold text-xl leading-tight">Каталог</div>
        </div>
        <CrossSvg onClick={handleCrossBtnClick} />
      </div>
      <div className="flex flex-col pt-6 bg-nk-secondary h-full">
        <div className="flex relative mb-5  min-h-[88px] sm:min-h-[170]">
          <Image
            className="rounded-3xl"
            src="/publicImages/unordered/dropdownCatalogMobile.jpg"
            alt="Банер с мототехникой"
            fill
            loading={"lazy"}
          />
        </div>
        <div className="container">
          {extraMenuList && (
            <ul className="flex flex-col gap-3 py-3 border-t border-b solid border-nk-main-inactive">
              {extraMenuList.map((item) => {
                return (
                  <li key={item.title}>
                    <Link href="/" onClick={handleItemClick}>
                      <span className={listsItemTextClassname}>
                        {item.title}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          {catalogListData && (
            <Accordion type="single" collapsible className="w-full">
              {catalogListData.map((item, index) => {
                const resultsExist = item.children?.length !== 0;
                //ToDo: add href to Links
                return (
                  <Fragment key={item.title}>
                    {resultsExist && (
                      <AccordionItem
                        className="border-none"
                        value={`item-${index}`}
                      >
                        <AccordionTrigger className={listsItemTextClassname}>
                          <Link href="/" onClick={handleItemClick}>
                            {item.title}
                          </Link>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col pl-3 gap-3">
                            {item.children?.map((point) => {
                              //ToDo: add href
                              return (
                                <li key={point.title}>
                                  <Link
                                    href="/"
                                    className={listsItemTextClassname}
                                    onClick={handleItemClick}
                                  >
                                    {point.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </Fragment>
                );
              })}
            </Accordion>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownCatalogMobile;
