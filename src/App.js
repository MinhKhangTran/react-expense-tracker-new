import React from "react";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import { v4 as uuidv4 } from "uuid";


const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("ausgaben")) || [];
};

export default function App() {
  const [alert, setAlert] = React.useState(false);
  const [ausgaben, setAusgaben] = React.useState(getLocalStorage());
  const [preis, setPreis] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [datum, setDatum] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("ausgaben", JSON.stringify(ausgaben));
  }, [ausgaben]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (preis > 0 && desc !== "" && datum !== "") {
      const neueAusgabe = {
        id: uuidv4(),
        preis,
        desc,
        datum: new Date(datum).getTime()
      };
      setAusgaben((oldValue) => {
        return [...oldValue, neueAusgabe];
      });
    } else {
      setAlert(true);
    }
    setPreis("");
    setDesc("");
    setDatum("");
  };

  const itemDelete = (id) => {
    setAusgaben(
      ausgaben.filter((ausgabe) => {
        return ausgabe.id !== id;
      })
    );
  };
  return (
    <div className="mx-auto w-11/12 md:w-2/3">
      <header className="flex justify-between mt-8">
        <h1 className="underline text-red-500 md:text-xl text-lg uppercase tracking-wider">
          Buchhaltungsapp
        </h1>
        <h1 className="px-4 bg-red-300 text-red-800 font-bold rounded-full flex items-center">
          {ausgaben.reduce((total, curr) => {
            return (total += parseInt(curr.preis));
          }, 0)}
        </h1>
      </header>
      <IncomeForm
        alert={alert}
        handleSubmit={handleSubmit}
        ausgaben={ausgaben}
        setAlert={setAlert}
        preis={preis}
        desc={desc}
        datum={datum}
        setPreis={setPreis}
        setDesc={setDesc}
        setDatum={setDatum}
      />
      <IncomeList ausgaben={ausgaben} itemDelete={itemDelete} />
    </div>
  );
}
