import * as process from "process";

const getSubdomain = (subdomain: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_API_URL is not defined");
    return null;
  }

  const defaultDomainName = apiUrl.replace(/^https?:\/\//, "");
  const includeLocalhost = String(subdomain).includes("localhost");
  const includeDefaultDomain = String(subdomain).includes(defaultDomainName);
  const isValid =
    subdomain &&
    subdomain !== "favicon.ico" &&
    !includeLocalhost &&
    !includeDefaultDomain;
  if (isValid) {
    return subdomain;
  } else {
    return null;
  }
};

export default getSubdomain;
