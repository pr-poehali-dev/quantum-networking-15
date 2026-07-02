const zones = [
  { name: "Лицо", price: 1500 },
  { name: "Руки", price: 1500 },
  { name: "Подмышечные впадины", price: 1000 },
  { name: "Бикини", price: 2000 },
  { name: "Ноги", price: 3000 },
];

export default function Prices() {
  return (
    <div className="bg-white px-6 py-20 md:py-32" id="prices">
      <div className="max-w-3xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-600 mb-4">Прайс-лист</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Цены на зоны
        </h2>
        <div className="divide-y divide-neutral-200">
          {zones.map((zone) => (
            <div
              key={zone.name}
              className="flex justify-between items-center py-6 group"
            >
              <span className="text-xl md:text-2xl text-neutral-900 group-hover:translate-x-2 transition-transform duration-300">
                {zone.name}
              </span>
              <span className="text-xl md:text-2xl font-semibold text-neutral-900">
                {zone.price.toLocaleString("ru-RU")} ₽
              </span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="https://wa.me/79386932928?text=Хочу записаться на лазерную эпиляцию"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black uppercase tracking-wide"
          >
            Записаться на сеанс
          </a>
        </div>
      </div>
    </div>
  );
}