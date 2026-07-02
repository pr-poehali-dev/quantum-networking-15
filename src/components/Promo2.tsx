export default function PromoOffer() {
  return (
    <div className="bg-neutral-900 px-6 py-20 md:py-32" id="promo">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="uppercase text-sm tracking-wide text-neutral-400 mb-4">Специальное предложение</h3>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Скидка 2000 ₽<br />на первый приём
        </h2>
        <p className="text-neutral-400 text-lg mb-12 max-w-xl mx-auto">
          Запишитесь на первый сеанс лазерной эпиляции и получите скидку 2000 рублей от общей стоимости процедуры
        </p>
        <a
          href="https://wa.me/79386932928?text=Хочу записаться на первый приём со скидкой 2000 рублей"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black border border-white px-8 py-4 text-sm transition-all duration-300 hover:bg-transparent hover:text-white uppercase tracking-wide"
        >
          Записаться со скидкой
        </a>
      </div>
    </div>
  );
}
