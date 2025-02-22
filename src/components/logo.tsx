import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  header?: boolean;
  footer?: boolean;
}

const Logo = ({ header, footer }: LogoProps) => {
  const isHeader = Boolean(header);
  const isFooter = Boolean(footer);

  return (
    <Link className="flex items-center" href="/">
      <Image
        className={isHeader ? "hidden lg:flex" : ""}
        style={footer ? { width: "187px", height: "36px" } : {}}
        priority={isHeader}
        loading={isFooter ? "lazy" : "eager"}
        src="/publicImages/global/logos/mainLogo.svg"
        width={187}
        height={36}
        alt="Логотип компании"
      />
      {isHeader && (
        <Image
          className="md:w-[120px] md:h-8 lg:hidden"
          src="/publicImages/global/logos/logoNoIcon.svg"
          width={100}
          height={26}
          alt="Логотип компании"
        />
      )}
    </Link>
  );
};

export default Logo;
