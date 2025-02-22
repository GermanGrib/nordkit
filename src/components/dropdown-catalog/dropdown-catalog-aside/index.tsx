"use client";
import { MenuItem } from "@/types/interfaces/wordpress/menus.interface";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import IconArrow from "@/components/icons/icon-arrow";
import { useAppDispatch } from "@/store/store";
import { closeDropdownCatalog } from "@/store/slices/uiSlice";
import { Fragment } from "react";

interface DropdownCatalogMenuProps {
  catalogListData: MenuItem[] | null;
  extraMenuList: MenuItem[] | null;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const DropdownCatalogAside = ({
  catalogListData,
  extraMenuList,
  activeIndex,
  setActiveIndex,
}: DropdownCatalogMenuProps) => {
  const dispatch = useAppDispatch();
  const handleLinksClick = () => {
    dispatch(closeDropdownCatalog());
  };
  const listLinkClassname =
    "flex font-normal text-xl leading-snug items-center justify-between transition hover:text-nk-main active:text-nk-main-active";
  const linkTextClassname =
    "inline-block whitespace-nowrap max-w-[255px] text-ellipsis overflow-hidden";
  return (
    <aside className="w-80 min-w-[300px]">
      <ScrollArea className="h-[760px]">
        {extraMenuList && (
          <ul className="flex flex-col gap-3 py-6 mb-12 border-t border-b solid border-nk-main-inactive">
            {extraMenuList.map((item) => {
              return (
                <li key={item.title}>
                  <Link
                    className={listLinkClassname}
                    href="/"
                    onClick={handleLinksClick}
                  >
                    <span className={linkTextClassname}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {catalogListData && (
          <ul className="flex flex-col gap-3">
            {catalogListData.map((item, index) => {
              const resultsExist = item.children?.length !== 0;
              return (
                <Fragment key={item.title}>
                  {resultsExist && (
                    <li>
                      <Link
                        className={listLinkClassname}
                        href="/"
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={handleLinksClick}
                      >
                        <span
                          className={`${linkTextClassname} ${activeIndex === index ? "text-nk-main-active" : ""}`}
                        >
                          {item.title}
                        </span>
                        {activeIndex === index && (
                          <IconArrow
                            className={`${activeIndex === index ? "text-nk-main-active stroke-current" : ""}`}
                          />
                        )}
                      </Link>
                    </li>
                  )}
                </Fragment>
              );
            })}
          </ul>
        )}
      </ScrollArea>
    </aside>
  );
};

export default DropdownCatalogAside;
