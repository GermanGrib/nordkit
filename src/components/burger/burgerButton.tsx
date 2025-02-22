"use client";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { toggleBurger } from "@/store/slices/uiSlice";

interface BurgerProps {
  className?: string;
}

const BurgerButton = ({ className }: BurgerProps) => {
  const isOpen = useAppSelector((state) => state.ui.isBurgerOpen);
  const dispatch = useAppDispatch();
  const burgerClassname = `${className}`;
  const lineClassname =
    "absolute h-[3px] bg-white rounded-full transition left-0";

  return (
    <div className="relative">
      <Button
        className={burgerClassname}
        onClick={() => dispatch(toggleBurger())}
        variant="burger"
        size="burger"
      >
        <span className="relative inline-block w-full h-full">
          <span
            className={`${lineClassname} w-full ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0 translate-y-0"}`}
          />
          <span
            className={`${lineClassname} ${isOpen ? "hidden" : "w-1/2 top-1/2 -translate-y-1/2"}`}
          />
          <span
            className={`${lineClassname} w-full ${isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
          />
        </span>
      </Button>
      {isOpen && (
        <div className="absolute -top-2 left-[180px] w-screen min-h-14 h-full bg-white z-10" />
      )}
    </div>
  );
};

export default BurgerButton;
