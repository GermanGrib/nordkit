import { MenuItem } from "@/types/interfaces/wordpress/menus.interface";
import { SingleRegion } from "@/types/interfaces/regions/regions.interface";
import HeaderNavigation from "@/components/header/header-navigation";
import HeaderActions from "@/components/header/header-actions";
import BurgerMenu from "@/components/burger/burgerMenu";
import DropdownCatalog from "@/components/dropdown-catalog";
import DropdownCatalogMobile from "@/components/dropdown-catalog/dropdown-catalog-mobile";

interface HeaderProps {
  navData: MenuItem[] | null;
  currentRegion: SingleRegion | null;
  allRegions: SingleRegion[] | null;
  dropdownCatalogData: MenuItem[] | null;
}

const Header = ({
  navData,
  currentRegion,
  allRegions,
  dropdownCatalogData,
}: HeaderProps) => {
  return (
    <header className="relative">
      <div className="container py-6 flex flex-col gap-6 shadow-nk-box-shadow lg:shadow-none">
        <HeaderNavigation
          navData={navData}
          currentRegion={currentRegion}
          allRegions={allRegions}
        />
        <HeaderActions />
      </div>
      <DropdownCatalog
        catalogListData={dropdownCatalogData}
        extraMenuList={navData}
      />
      <DropdownCatalogMobile
        catalogListData={dropdownCatalogData}
        extraMenuList={navData}
      />
      <BurgerMenu
        navData={navData}
        currentRegion={currentRegion}
        allRegions={allRegions}
      />
    </header>
  );
};

export default Header;
