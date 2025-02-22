"use client";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { MenuItem } from "@/types/interfaces/wordpress/menus.interface";
import Link from "next/link";
import Communication from "@/components/communication";
import CommunicationTypes from "@/types/enums/communication";
import { SingleRegion } from "@/types/interfaces/regions/regions.interface";
import { closeBurger, openDropdownCatalog } from "@/store/slices/uiSlice";
import Location from "@/components/location";

interface BurgerMenuProps {
  navData: MenuItem[] | null;
  currentRegion: SingleRegion | null;
  allRegions: SingleRegion[] | null;
}

const BurgerMenu = ({
  navData,
  currentRegion,
  allRegions,
}: BurgerMenuProps) => {
  const isOpen = useAppSelector((state) => state.ui.isBurgerOpen);
  const dispatch = useAppDispatch();
  const listItemClassname =
    "flex pb-3.5 font-normal leading-snug border-b border-solid border-nk-secondary cursor-pointer";

  const handleLinksClick = () => {
    dispatch(closeBurger());
  };

  const handleCatalogBtnClick = () => {
    dispatch(closeBurger());
    dispatch(openDropdownCatalog());
  };
  return (
    <>
      <div
        className={`absolute w-screen h-screen bg-black bg-opacity-50 z-20 ${isOpen ? "block" : "hidden"}`}
        onClick={() => dispatch(closeBurger())}
      />
      <div
        className={`absolute sm:max-w-xs h-screen bg-white container pt-8 z-50 ${isOpen ? "block" : "hidden"} lg:hidden`}
      >
        <ul className="flex mb-14 flex-col gap-5">
          <li className={listItemClassname} onClick={handleCatalogBtnClick}>
            Каталог
          </li>
          {navData &&
            navData.map((item) => {
              //ToDo: ADd Href
              return (
                <li key={item.title}>
                  <Link href="/" className={listItemClassname}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
        </ul>
        <div className="flex flex-col gap-5">
          <Communication
            communicationType={CommunicationTypes.tel}
            onClick={handleLinksClick}
            variant="burgerMenu"
          />
          <Location
            currentRegion={currentRegion}
            allRegions={allRegions}
            variant="burgerMenu"
          />
          <Communication
            communicationType={CommunicationTypes.whatsapp}
            onClick={handleLinksClick}
            variant="burgerMenu"
          />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
