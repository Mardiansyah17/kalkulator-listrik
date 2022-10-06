import React from "react";
import CurrencyFormat from "react-currency-format";
export default function Output({ title, biaya }) {
  return (
    <div>
      <div className="flex space-x-3 text-lg">
        <span>Biaya {title}</span>

        <CurrencyFormat
          value={biaya}
          thousandSeparator={"."}
          decimalSeparator={","}
          prefix="Rp"
          renderText={(value) => <span>{value}</span>}
        />
      </div>
    </div>
  );
}
