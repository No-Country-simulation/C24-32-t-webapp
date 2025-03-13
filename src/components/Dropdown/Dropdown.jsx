// import { useState, useEffect } from "react";
// import "./Dropdown.css";

// const countries1 = [
//   { code: "usd", name: "Estados Unidos (USD)", flag: "/img/usa.svg" },
//   { code: "eur", name: "Unión Europea (EURO)", flag: "/img/eu.svg" },
// ];

// const countries2 = [
//   { code: "ars", name: "Argentina (ARS)", flag: "/img/argentina.svg" },
//   { code: "bob", name: "Bolivia (BOB)", flag: "/img/bolivia.svg" },
//   { code: "brl", name: "Brasil (BRL)", flag: "/img/brasil.svg" },
//   { code: "clp", name: "Chile (CLP)", flag: "/img/chile.svg" },
//   { code: "cop", name: "Colombia (COP)", flag: "/img/colombia.svg" },
//   { code: "usd", name: "Ecuador (USD)", flag: "/img/usa.svg" },
//   { code: "pen", name: "Perú (PEN)", flag: "/img/peru.svg" },
// ];

// const Dropdown = () => {
//   const [selected1, setSelected1] = useState(null);
//   const [selected2, setSelected2] = useState(null);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   // Cierra el menú si haces clic fuera
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".dropdown-container")) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <div className="dropdown-container">
//       {/* Primer Dropdown */}
//       <div className="dropdown" onClick={() => setOpenDropdown(openDropdown === "1" ? null : "1")}>
//         <div className="selected">
//           {selected1 ? (
//             <>
//               <img src={selected1.flag} alt={selected1.name} className="flag" />
//               {selected1.name}
//             </>
//           ) : (
//             "Valor en dólares"
//           )}
//         </div>
//         {openDropdown === "1" && (
//           <ul className="dropdown-menu">
//             {countries1.map((country) => (
//               <li key={country.code} onClick={() => { setSelected1(country); setOpenDropdown(null); }}>
//                 <img src={country.flag} alt={country.name} className="flag" />
//                 {country.name}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Segundo Dropdown */}
//       <div className="dropdown" onClick={() => setOpenDropdown(openDropdown === "2" ? null : "2")}>
//         <div className="selected">
//           {selected2 ? (
//             <>
//               <img src={selected2.flag} alt={selected2.name} className="flag" />
//               {selected2.name}
//             </>
//           ) : (
//             "Conversión en dólares"
//           )}
//         </div>
//         {openDropdown === "2" && (
//           <ul className="dropdown-menu">
//             {countries2.map((country) => (
//               <li key={country.code} onClick={() => { setSelected2(country); setOpenDropdown(null); }}>
//                 <img src={country.flag} alt={country.name} className="flag" />
//                 {country.name}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dropdown;
