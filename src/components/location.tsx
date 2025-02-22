"use client";
import { SingleRegion } from "@/types/interfaces/regions/regions.interface";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import sortRegions from "@/utils/sortRegions";
import Link from "next/link";

interface LocationProps {
  currentRegion: SingleRegion | null;
  allRegions: SingleRegion[] | null;
  variant?: "default" | "header" | "burgerMenu";
}

const textStyles = {
  default: "",
  header:
    "hidden sm:inline-block font-normal whitespace-nowrap max-w-[150px] text-ellipsis overflow-hidden font-nunito leading-tight",
  burgerMenu: "",
};

const triggerStyles = {
  default: "",
  header:
    "flex gap-1 justify-center items-center transition hover:text-nk-main active:text-nk-main-active",
  burgerMenu: "flex gap-1 items-center",
};

const Location = ({
  currentRegion,
  allRegions,
  variant = "default",
}: LocationProps) => {
  if (!currentRegion && !allRegions) return null;
  const sortedRegions = sortRegions(
    Object.values(allRegions ? allRegions : []),
  );
  return (
    <Dialog>
      <DialogTrigger className={triggerStyles[variant]}>
        <span className={textStyles[variant]}>
          {currentRegion && currentRegion.city_name}
        </span>
        <Image
          className="sm:w-3.5 sm:h-3.5"
          width={28}
          height={28}
          src="/publicImages/global/icons/location.svg"
          alt="Иконка Локации"
        />
      </DialogTrigger>
      {sortedRegions.length > 0 && (
        <DialogContent className="rounded-3xl">
          <DialogHeader>
            <Image
              style={{ width: "190px", height: "42px" }}
              className="mb-4.5 md:mb-5"
              src="/publicImages/global/logos/mainLogo.svg"
              width={190}
              height={42}
              alt="Логотип компании"
              loading="lazy"
            />
            <DialogTitle className="text-xl md:text-4xl leading-tight font-bold text-start">
              Выберите свой город
            </DialogTitle>
            <DialogDescription></DialogDescription>
            <Command className="min-h-[340px]">
              <CommandInput placeholder="Поиск города" />
              <CommandList>
                <CommandEmpty>
                  Такого города не найдено, но у нас есть доставка
                </CommandEmpty>
                {sortedRegions.map((region: SingleRegion) => {
                  //ToDO: href надо собирать чтобы получался protocol+subdomain.domain/path?params
                  return (
                    <CommandItem key={region.city_name}>
                      <Link
                        className="w-full text-start text-base leading-snug font-normal"
                        href={"/"}
                        key={region.subdomain}
                      >
                        {region.city_name}
                      </Link>
                    </CommandItem>
                  );
                })}
              </CommandList>
            </Command>
          </DialogHeader>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Location;
