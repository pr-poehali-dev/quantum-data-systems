import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    birthDate: "",
    socDate: "",
    socEndDate: "",
    militaryUnit: "",
    investigator: "",
    caseNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F5F3] flex flex-col items-center">
      {/* Навигация */}
      <div className="w-full flex justify-center border-b border-[rgba(55,50,47,0.12)]">
        <div className="w-full max-w-[1060px] h-16 flex items-center px-6 lg:px-0">
          <button
            onClick={() => navigate("/")}
            className="flex flex-col justify-center text-[#2F3037] text-lg font-medium font-sans"
          >
            Бриллиант
          </button>
        </div>
      </div>

      {/* Форма */}
      <div className="w-full max-w-[600px] px-4 py-12 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#37322F] text-3xl font-serif font-normal leading-tight">
            Новый розыскной пакет
          </h1>
          <p className="text-[rgba(55,50,47,0.60)] text-sm font-sans">
            Заполните данные для формирования документов
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* ФИО */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#49423D] text-sm font-medium font-sans">
              ФИО
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Иванов Иван Иванович"
              className="w-full h-11 px-4 bg-white border border-[rgba(55,50,47,0.18)] rounded-lg text-[#37322F] text-sm font-sans placeholder:text-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#37322F] transition-colors"
            />
          </div>

          {/* Дата рождения */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#49423D] text-sm font-medium font-sans">
              Дата рождения
            </label>
            <input
              type="date"
              name="birthDate"
              value={form.birthDate}
              onChange={handleChange}
              className="w-full h-11 px-4 bg-white border border-[rgba(55,50,47,0.18)] rounded-lg text-[#37322F] text-sm font-sans focus:outline-none focus:border-[#37322F] transition-colors"
            />
          </div>

          {/* Дата СОЧ */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#49423D] text-sm font-medium font-sans">
              Дата СОЧ
            </label>
            <input
              type="date"
              name="socDate"
              value={form.socDate}
              onChange={handleChange}
              className="w-full h-11 px-4 bg-white border border-[rgba(55,50,47,0.18)] rounded-lg text-[#37322F] text-sm font-sans focus:outline-none focus:border-[#37322F] transition-colors"
            />
          </div>

          {/* Дата окончания СОЧ */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#49423D] text-sm font-medium font-sans">
              Дата окончания СОЧ{" "}
              <span className="text-[rgba(55,50,47,0.40)] font-normal">
                (если есть)
              </span>
            </label>
            <input
              type="date"
              name="socEndDate"
              value={form.socEndDate}
              onChange={handleChange}
              className="w-full h-11 px-4 bg-white border border-[rgba(55,50,47,0.18)] rounded-lg text-[#37322F] text-sm font-sans focus:outline-none focus:border-[#37322F] transition-colors"
            />
          </div>

          {/* Войсковая часть */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#49423D] text-sm font-medium font-sans">
              Войсковая часть
            </label>
            <input
              type="text"
              name="militaryUnit"
              value={form.militaryUnit}
              onChange={handleChange}
              placeholder="в/ч 00000"
              className="w-full h-11 px-4 bg-white border border-[rgba(55,50,47,0.18)] rounded-lg text-[#37322F] text-sm font-sans placeholder:text-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#37322F] transition-colors"
            />
          </div>

          {/* Следователь */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#49423D] text-sm font-medium font-sans">
              Следователь
            </label>
            <input
              type="text"
              name="investigator"
              value={form.investigator}
              onChange={handleChange}
              placeholder="Петров Пётр Петрович"
              className="w-full h-11 px-4 bg-white border border-[rgba(55,50,47,0.18)] rounded-lg text-[#37322F] text-sm font-sans placeholder:text-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#37322F] transition-colors"
            />
          </div>

          {/* Номер уголовного дела */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#49423D] text-sm font-medium font-sans">
              Номер уголовного дела
            </label>
            <input
              type="text"
              name="caseNumber"
              value={form.caseNumber}
              onChange={handleChange}
              placeholder="№ 12345678"
              className="w-full h-11 px-4 bg-white border border-[rgba(55,50,47,0.18)] rounded-lg text-[#37322F] text-sm font-sans placeholder:text-[rgba(55,50,47,0.35)] focus:outline-none focus:border-[#37322F] transition-colors"
            />
          </div>

          {/* Кнопка */}
          <button
            type="submit"
            className="w-full h-12 mt-2 bg-[#322D2B] rounded-full text-white text-sm font-medium font-sans hover:bg-[#2A2520] transition-colors"
          >
            Сформировать документы
          </button>
        </form>
      </div>
    </div>
  );
}
