import { NextRequest, NextResponse } from "next/server";

import GetInfoBySlugTypes from "@/types/enums/slugTypes";

export function middleware(request: NextRequest) {
  // Add global headers
  const url = new URL(request.url);
  const host = request.headers.get("host") || url.host;
  const pathname = url.pathname;
  const subDomain = host.split(".")[0] || "";

  // Создаем новый объект заголовков из текущих заголовков запроса
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-protocol", url.protocol);
  requestHeaders.set("x-host", host);
  requestHeaders.set("x-sub-domain", subDomain);
  requestHeaders.set("x-pathname", pathname);
  requestHeaders.delete("x-forwarded-for");
  requestHeaders.delete("x-forwarded-host");
  requestHeaders.delete("x-forwarded-port");
  requestHeaders.delete("x-forwarded-proto");

  const [subdomain] = host.split(".");

  const omitValues = [
    "_next",
    "favicon",
    "callbackWidget",
    "omnichannelMenu",
    "publicImages",
  ];
  const isNotOmitRequest = omitValues.every(
    (value) => !request.url.includes(value),
  );
  const omitPages = [
    GetInfoBySlugTypes.PRODUCT,
    GetInfoBySlugTypes.CATEGORY,
    // RoutesPaths.BRAND,
    // RoutesPaths.CATALOG,
    // RoutesPaths.ARTICLES,
  ].map((item) => item.slice(0, item.length - 1));
  const isMultiSubdomainBuildingPage = omitPages.every(
    (value) => !request.nextUrl.pathname.includes(value),
  );

  if (isNotOmitRequest && isMultiSubdomainBuildingPage) {
    const url = request.nextUrl.clone();
    url.pathname = `/${subdomain}${url.pathname ? url.pathname : ""}`;

    return NextResponse.rewrite(url, {
      headers: requestHeaders,
    });
  }

  return NextResponse.next({
    headers: requestHeaders,
  });
}
