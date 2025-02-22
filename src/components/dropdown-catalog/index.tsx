"use client";
import { MenuItem } from "@/types/interfaces/wordpress/menus.interface";
import DropdownCatalogAside from "@/components/dropdown-catalog/dropdown-catalog-aside";
import DropdownCatalogResults from "@/components/dropdown-catalog/dropdown-catalog-results";
import { useAppSelector } from "@/store/store";
import { useState } from "react";

interface DropdownCatalogProps {
  catalogListData: MenuItem[] | null;
  extraMenuList: MenuItem[] | null;
}

const DropdownCatalog = ({
  catalogListData,
  extraMenuList,
}: DropdownCatalogProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isOpen = useAppSelector((state) => state.ui.isDropdownCatalogOpen);

  return (
    <div
      className={`container absolute h-[80vh] bg-nk-secondary left-1/2 transform -translate-x-1/2 rounded-md z-50 hidden ${isOpen ? "lg:flex" : "hidden"}`}
    >
      <div className="flex gap-16 px-8 pt-10 pb-6 w-full">
        <DropdownCatalogAside
          catalogListData={catalogListData}
          extraMenuList={extraMenuList}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <DropdownCatalogResults
          catalogListData={catalogListData}
          activeIndex={activeIndex}
        />
      </div>
    </div>
  );
};

export default DropdownCatalog;
