import React from "react";
import IncomeItem from "./IncomeItem";

export default function IncomeList({ ausgaben, itemDelete }) {
  const sortByDate = (a, b) => {
    return a.datum - b.datum;
  };

  // console.log(typeof ausgaben[0].datum);

  return (
    <div className="mt-8">
      {ausgaben.sort(sortByDate).map((ausgabe) => {
        return (
          <IncomeItem key={ausgabe.id} {...ausgabe} itemDelete={itemDelete} />
        );
      })}
    </div>
  );
}
