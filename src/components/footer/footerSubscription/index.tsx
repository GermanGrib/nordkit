import SubscribeToNews from "@/components/subscribeToNews";

const FooterSubscription = () => {
  return (
    <div className="p-[18px] pt-6 md:p-10 lg:ml-24 bg-black text-white rounded-b-3xl lg:max-w-[441px]">
      <div className="text-xl font-bold mb-3 md:mb-5 lg:mb-4 leading-tight md:leading-snug">
        Подпишись на рассылку
      </div>
      <p className="mb-6 text-base font-normal leading-snug md:leading-tight">
        Подпишитесь и получайте промокоды, акции и подборки товаров на свою
        почту.
      </p>
      <SubscribeToNews className="mb-4" variant="footer" />
      <p className="text-xs lg:text-sm font-normal leading-snug md:leading-tight">
        Нажимая «Подписаться» вы соглашаетесь с условиями использования сайта и
        Политикой обработки персональных данных.
      </p>
    </div>
  );
};

export default FooterSubscription;
