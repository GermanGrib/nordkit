import { Lato, Nunito_Sans } from "next/font/google";
import "../assets/styles/globals.css";
import { ReactNode } from "react";
import { headers } from "next/headers";
import getMenuData from "@/services/wordpress/menus";
import Providers from "@/store/provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import { getAllRegions, getRegion } from "@/services/regions";
import Footer from "@/components/footer";

const LatoFont = Lato({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "700", "900"],
  variable: "--Lato--font",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

interface RootLayoutProps {
  children: Readonly<ReactNode>;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const headersList = await headers();
  const subdomain = headersList.get("x-sub-domain") || "";
  const currentRegion = await getRegion(subdomain);
  const allRegions = await getAllRegions();
  const catalogMenuData = await getMenuData("catalog", subdomain, true);
  const navigationData = await getMenuData("navigation", subdomain);
  const footerMenus = await getMenuData("footerMenus", subdomain);

  return (
    <html lang="ru">
      <body
        className={`${LatoFont.variable} ${nunitoSans.variable} antialiased`}
      >
        <Providers>
          <Header
            navData={navigationData}
            currentRegion={currentRegion}
            allRegions={allRegions}
            dropdownCatalogData={catalogMenuData}
          />
          <main className="flex-grow">{children}</main>
          <Footer menusLists={footerMenus} navData={navigationData} />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
