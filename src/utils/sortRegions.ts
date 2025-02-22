import { SingleRegion } from "@/types/interfaces/regions/regions.interface";

const sortRegions = (regions: SingleRegion[]) => {
  const prioritizedCities = ["Москва", "Санкт-Петербург"];

  const sortedRegions = regions.sort((a, b) => {
    const cityA = a.city_name ?? "";
    const cityB = b.city_name ?? "";

    return cityA.localeCompare(cityB);
  });

  const isPrioritizedCity = (city: string) => {
    return prioritizedCities.some((prioritizedCity) =>
      city.includes(prioritizedCity),
    );
  };

  const prioritized = sortedRegions.filter((region) =>
    isPrioritizedCity(region.city_name ?? ""),
  );

  const rest = sortedRegions.filter(
    (region) => !isPrioritizedCity(region.city_name ?? ""),
  );

  return [...prioritized, ...rest];
};

export default sortRegions;
