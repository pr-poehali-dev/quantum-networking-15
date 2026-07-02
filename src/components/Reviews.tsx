const reviews = [
  {
    name: "Di",
    text: "Асечка, спасибо большое за процедуры, очень эффективно и безболезненно, вы профессионал!",
  },
  {
    name: "Milka",
    text: "Ася, хотела поблагодарить вас за такое профессиональное отношение к своим клиентам, осталась очень довольна. Ваш аппарат не только занимается удалением волос, но ещё и обладает каким-то освежающим эффектом для кожи. Первая зона позади, обязательно начинаем работать над следующей зоной!",
  },
  {
    name: "Клиентка",
    text: "Волосы выпали! Это без тонального... Моя ты спасительница!",
  },
];

export default function Reviews() {
  return (
    <div className="bg-white px-6 py-20 md:py-32" id="reviews">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-600 mb-4">Отзывы</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Говорят клиенты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="border border-neutral-200 p-8 flex flex-col gap-6">
              <p className="text-neutral-700 text-lg leading-relaxed flex-1">
                «{review.text}»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white text-sm font-semibold">
                  {review.name[0]}
                </div>
                <span className="text-neutral-900 font-medium">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
