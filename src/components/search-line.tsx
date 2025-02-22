import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchLineProps {
  className?: string;
  variant?: "default" | "header" | "homePage";
}

const inputStyles = {
  default: "",
  header: "h-full w-full px-6",
  homePage: "px-6 py-3",
};

const SearchLine = ({ className, variant = "default" }: SearchLineProps) => {
  return (
    <div className={`relative ${className}`}>
      <Input
        className={`bg-nk-secondary border-0 ${inputStyles[variant]}`}
        type="search"
        placeholder="Я ищу"
      />
      <Search className="absolute right-8 xl:right-10 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
};

export default SearchLine;
