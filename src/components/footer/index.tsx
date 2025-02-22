import { MenuItem } from "@/types/interfaces/wordpress/menus.interface";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Communication from "@/components/communication";
import CommunicationTypes from "@/types/enums/communication";
import FooterSubscription from "@/components/footer/footerSubscription";
import Logo from "@/components/logo";

interface FooterProps {
  menusLists: MenuItem[] | null;
  navData: MenuItem[] | null;
}

const Footer = ({ menusLists, navData }: FooterProps) => {
  return (
    <footer className="pb-10 lg:pb-16 bg-nk-secondary">
      <div className="md:px-5 md:container">
        <div className="flex flex-col-reverse lg:flex-row mb-6 md:mb-12 md:pb-12 md:border-b-4 md:solid md:border-nk-main-inactive">
          <div className="flex flex-col gap-7 md:flex-row pt-6 lg:pt-10 px-[18px] md:px-0 justify-between flex-grow">
            {menusLists &&
              menusLists.map((list) => {
                const { title, children } = list;
                return (
                  <div key={title}>
                    <div className="text-xl font-bold mb-3 md:mb-5 lg:mb-4 leading-tight md:leading-snug">
                      {title}
                    </div>
                    <ul className="flex flex-col gap-4">
                      {children &&
                        children.map((item) => {
                          return (
                            <li key={item.title}>
                              <Link
                                href="/next/public"
                                className="text-base font-normal leading-tight transition hover:text-nk-main active:text-nk-main-active"
                              >
                                {item.title}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                );
              })}
          </div>
          <FooterSubscription />
        </div>
        <div className="flex gap-6 px-[18px] md:px-0 flex-col-reverse md:flex-row mb-4 md:justify-between md:items-center">
          <Logo footer />
          <Navigation navData={navData} variant="footer" />
          <Communication
            communicationType={CommunicationTypes.whatsapp}
            variant="footer"
          />
        </div>
        <div className="px-[18px] md:px-0 text-xs lg:text-sm font-normal leading-snug md:leading-tight">
          <p>© 2010–{new Date().getFullYear()} Nordkit.Всe права защищены.</p>
          <p>
            Предложения, размещенные на сайте {process.env.NEXT_PUBLIC_API_URL}
            <br /> не являются публичной офертой
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
