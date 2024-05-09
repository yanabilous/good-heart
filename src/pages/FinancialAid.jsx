import React from "react";
import {Link, Outlet} from "react-router-dom";



function FinancialAid() {
  return (
    <div className="container-about">
      <h2>Заповніть форму</h2>

      <div className="">
        <Link
          to="/financialAid/individual "
          // className={signInActive ? "activeLink" : "inactiveLink"}
        >
         Фіз.особа
        </Link>
        <Link
          to="/financialAid/legalEntity"
          // className={!signInActive ? "activeLink" : "inactiveLink"}
        >
          Юр.особа
        </Link>
      </div>
      <Outlet />

    </div>
  );
}
export default FinancialAid;
