import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Новая заявка с сайта!\nИмя: ${name}\nТелефон: ${phone}`;
    const url = `https://wa.me/79386932928?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-neutral-50 px-6 py-20 md:py-32" id="contact">
      <div className="max-w-xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-600 mb-4">Запись</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Запишитесь на сеанс
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-neutral-300 px-4 py-4 text-base bg-white outline-none focus:border-black transition-colors duration-200"
          />
          <input
            type="tel"
            placeholder="Ваш телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border border-neutral-300 px-4 py-4 text-base bg-white outline-none focus:border-black transition-colors duration-200"
          />
          <button
            type="submit"
            className="bg-black text-white border border-black px-6 py-4 text-sm transition-all duration-300 hover:bg-white hover:text-black uppercase tracking-wide mt-2"
          >
            Отправить заявку
          </button>
        </form>
        <p className="text-neutral-400 text-sm mt-4">
          Нажимая кнопку, вы перейдёте в WhatsApp — мы ответим в течение 15 минут
        </p>
      </div>
    </div>
  );
}
