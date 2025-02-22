import getSubdomain from "@/utils/getSubdomain";

const getApiUrl = (subdomain: string, path: string): string => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
  const domain = apiUrl.replace(/https?:\/\/(www\.)?/, "");
  const schemeMatch = apiUrl.match(/^(https?:\/\/)/);
  const scheme = schemeMatch ? schemeMatch[0] : "http://";
  const validSubdomain = getSubdomain(subdomain);

  return `${scheme}${validSubdomain ? `${validSubdomain}.` : "www."}${domain}${path}`;
};
export default getApiUrl;
