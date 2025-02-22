import Link from "next/link";
import Image from "next/image";
import CommunicationTypes from "@/types/enums/communication";
import formatPhoneNumber from "@/utils/formatPhoneNumber";
import {
  NEXT_PUBLIC_PHONE_GENERAL_NUMBER,
  NEXT_PUBLIC_WHATSAPP_GENERAL,
} from "@/data/ENV";

interface CommunicationProps {
  communicationType: CommunicationTypes;
  width?: number;
  height?: number;
  variant?: "default" | "header" | "footer" | "burgerMenu";
  onClick?: () => void;
  textClassname?: string;
}

const communicationConfig = {
  [CommunicationTypes.tel]: {
    href: `tel:${NEXT_PUBLIC_PHONE_GENERAL_NUMBER}`,
    iconSrc: "/publicImages/global/icons/phone.svg",
    altText: "Иконка телефона",
    text: formatPhoneNumber(NEXT_PUBLIC_PHONE_GENERAL_NUMBER),
  },
  [CommunicationTypes.whatsapp]: {
    href: `https://wa.clck.bar/${NEXT_PUBLIC_WHATSAPP_GENERAL}`,
    iconSrc: "/publicImages/global/icons/whatsApp.svg",
    altText: "Иконка WhatsApp",
    text: "WhatsApp",
  },
} as const;

const linkStyles = {
  default: "",
  header:
    "flex gap-1 justify-center items-center min-h-[20px] transition hover:text-nk-main active:text-nk-main-active",
  burgerMenu: "flex gap-1 items-center",
  footer: "",
};

const textStyles = {
  default: "",
  header: "hidden font-normal whitespace-nowrap leading-tight",
  burgerMenu: "leading-snug font-normal",
  footer: "hidden",
};

const iconStyles = {
  default: "",
  header: "sm:w-3.5 sm:h-3.5",
  burgerMenu: "w-3.5 h-3.5",
  footer: "w-12 h-12",
};

const Communication = ({
  communicationType,
  width = 28,
  height = 28,
  variant = "default",
  onClick,
  textClassname,
}: CommunicationProps) => {
  const config = communicationConfig[communicationType];

  if (!config) return null;

  return (
    <Link
      href={config.href}
      className={linkStyles[variant]}
      onClick={onClick}
      target={communicationType === CommunicationTypes.whatsapp ? "_blank" : ""}
    >
      <span className={`${textStyles[variant]} ${textClassname}`}>
        {config.text}
      </span>

      {config.iconSrc && (
        <Image
          priority={variant === "header"}
          src={config.iconSrc}
          alt={config.altText}
          width={width}
          height={height}
          className={iconStyles[variant]}
        />
      )}
    </Link>
  );
};

export default Communication;
