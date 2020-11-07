import React from "react";
import { FaPlus } from "react-icons/fa";
export default function IncomeForm({
  alert,
  setAlert,
  handleSubmit,
  ausgaben,
  preis,
  desc,
  datum,
  setPreis,
  setDesc,
  setDatum,

}) {
  React.useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [ausgaben, alert]);

  return (
    <form
      className="grid grid-cols-8 items-center mt-4 "
      onSubmit={handleSubmit}
    >
      <input
        type="number"
        placeholder="€"
        className="pl-1 md:pl-2 rounded-l-lg bg-red-200 md:text-xl h-8 md:h-12 col-span-1"
        value={preis}
        onChange={(e) => {
          setPreis(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Beschreibung"
        className="pl-1 md:pl-2 bg-red-200 md:text-xl h-8 md:h-12 col-span-3"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <input
        type="date"
        placeholder="Datum"
        className="pl-1 md:pl-2  bg-red-200 md:text-xl h-8 md:h-12 col-span-3"
        value={datum}
        onChange={(e) => {
          setDatum(e.target.value);
        }}

      />
      <button
        type="submit"
        className=" bg-red-400 text-red-700 h-8 md:h-12 flex justify-center rounded-r-lg text-lg md:text-xl hover:bg-red-200 hover:text-red-500 transition transition-all duration-300 ease-in-out"
      >
        <FaPlus />
      </button>
      {alert && (
        <h1 className="col-span-9 border-2 border-red-400 rounded-full text-center text-red-400 mt-4">
          Bitte Felder ausfüllen
        </h1>
      )}
    </form>
  );
}
