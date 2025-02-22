import { SingleRegion } from "@/types/interfaces/regions/regions.interface";
import globalFetch from "@/utils/globalFetch";
import getApiUrl from "@/utils/getApiUrl";

const getRegion = async (subdomain: string): Promise<SingleRegion | null> => {
  const path = "/wp-json/custom-api/v1/region";
  const url = getApiUrl(subdomain, path);
  try {
    const singleRegionResponse = await globalFetch(url);
    return await singleRegionResponse.json();
  } catch (error) {
    console.error(
      `Ошибка! Запрос single регион из плагина 'Регионы'\n${error}`,
    );
    return null;
  }
};

const getAllRegions = async (): Promise<SingleRegion[] | null> => {
  const path = "/wp-json/custom-api/v1/all-regions";
  try {
    const regionResponse = await globalFetch(
      `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    );

    return await regionResponse.json();
  } catch (error) {
    console.error(`Ошибка! Запрос ВСЕ регионы из плагина 'Регионы'\n${error}`);
    return null;
  }
};

export { getAllRegions, getRegion };
