import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import { MenuItem } from "@/types/interfaces/wordpress/menus.interface";
import { SingleRegion } from "@/types/interfaces/regions/regions.interface";
import BurgerButton from "@/components/burger/burgerButton";
import Communication from "@/components/communication";
import CommunicationTypes from "@/types/enums/communication";
import SearchLine from "@/components/search-line";
import Location from "@/components/location";

interface HeaderNavigationProps {
  navData: MenuItem[] | null;
  currentRegion: SingleRegion | null;
  allRegions: SingleRegion[] | null;
}

const HeaderNavigation = ({
  navData,
  currentRegion,
  allRegions,
}: HeaderNavigationProps) => {
  return (
    <div className="flex justify-between gap-6 pb-4 lg:shadow-nk-box-shadow">
      <div className="flex gap-5 md:gap-10 flex-grow">
        <div className="flex items-center justify-center">
          <BurgerButton className="mr-2 lg:hidden" />
          <Logo header />
        </div>
        <div className="hidden lg:flex justify-center items-center flex-grow">
          <Navigation navData={navData} variant="header" />
        </div>
        <SearchLine
          className="hidden md:flex flex-grow lg:hidden"
          variant="header"
        />
      </div>
      <div className="flex items-center justify-center gap-4 lg:items-start 2xl:gap-10">
        <Communication
          communicationType={CommunicationTypes.tel}
          variant={"header"}
          textClassname={"sm:flex"}
        />
        <Communication
          communicationType={CommunicationTypes.whatsapp}
          variant={"header"}
          textClassname={"xl:flex"}
        />
        <Location
          currentRegion={currentRegion}
          allRegions={allRegions}
          variant={"header"}
        />
      </div>
    </div>
  );
};

export default HeaderNavigation;
