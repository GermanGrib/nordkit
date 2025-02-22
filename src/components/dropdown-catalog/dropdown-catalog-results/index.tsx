"use client";
import { MenuItem } from "@/types/interfaces/wordpress/menus.interface";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch } from "@/store/store";
import { closeDropdownCatalog } from "@/store/slices/uiSlice";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DropdownCatalogResultsProps {
  catalogListData: MenuItem[] | null;
  activeIndex: number;
}

const DropdownCatalogResults = ({
  catalogListData,
  activeIndex,
}: DropdownCatalogResultsProps) => {
  const dispatch = useAppDispatch();
  const handleLinksClick = () => {
    dispatch(closeDropdownCatalog());
  };
  return (
    <div>
      <Image
        className="rounded-3xl mb-8"
        src="/publicImages/unordered/dropdownCatalogImg.jpg"
        alt="Баннер с товаром"
        width={974}
        height={188}
        loading={"lazy"}
      />
      <div>
        <ScrollArea className="h-[500px]">
          {catalogListData &&
            catalogListData.map((item, index) => {
              return (
                <ul
                  key={item.title}
                  className={`grid-cols-2 gap-3 ${activeIndex === index ? "grid" : "hidden"}`}
                >
                  {item.children &&
                    item.children.map((point) => {
                      return (
                        <li key={point.title}>
                          <Link
                            href="/"
                            className="block font-normal leading-tight max-w-[285px] text-ellipsis overflow-hidden whitespace-nowrap transition hover:text-nk-main active:text-nk-main-active"
                            onClick={handleLinksClick}
                          >
                            {point.title}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              );
            })}
        </ScrollArea>
      </div>
    </div>
  );
};

export default DropdownCatalogResults;
