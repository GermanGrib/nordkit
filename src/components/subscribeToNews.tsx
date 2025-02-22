"use client";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import IconLongArrow from "@/components/icons/icon-long-arrow";

interface SubscribeToNews {
  className?: string;
  variant?: "default" | "footer";
}

const inputStyles = {
  default: "",
  footer: "pl-6 h-10 md:h-14 bg-white rounded-lg text-foreground",
};

const SubscribeToNews = ({
  className,
  variant = "default",
}: SubscribeToNews) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = async () => {
    if (!inputRef.current?.checkValidity()) {
      toast({ title: "Ошибка", description: "Введите корректный email" });
      return;
    }
    console.log("Подписка на:", email);

    toast({
      title: "Спасибо за подписку!",
      description: `Вы подписаны на обновления на ${email}`,
      action: (
        <ToastAction
          onClick={() => console.log("Отмена подписки для:", email)}
          altText="Test text ???"
        >
          Undo
        </ToastAction>
      ),
    });

    setEmail("");
  };

  return (
    <div className={className}>
      <div className="relative flex gap-2 max-w-sm">
        <Input
          ref={inputRef}
          className={inputStyles[variant]}
          type="email"
          placeholder="Введите email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        {variant === "footer" && (
          <Button
            className="absolute h-full right-0 w-10 md:w-14 bg-nk-main hover:bg-nk-main-hover active:bg-nk-main-active"
            onClick={handleSubscribe}
          >
            <IconLongArrow />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SubscribeToNews;
