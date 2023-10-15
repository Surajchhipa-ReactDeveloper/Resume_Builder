// import React, { useState } from "react";

// const YearSelector = () => {
//   const currentYear = new Date().getFullYear();
//   const startYear = 1900;
//   const years = Array.from(
//     { length: currentYear - startYear + 1 },
//     (_, index) => startYear + index
//   );
//   const [optionYear, setOptionYear] = useState(years);
//   const [selectedYear, setSelectedYear] = useState(currentYear);

//   const handleSelectYear = (selectedYear) => {
//     console.log("Selected Year: ", selectedYear);
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(parseInt(event.target.value));
//   };
//   console.log(optionYear);

//   return (
//     <div className="Year_Select_Container">
//       {optionYear.map((year, index) => (
//         <div key={index} value={year} className="Options_Container_Main">
//           <div
//             className="Option_Container_Option"
//             onClick={() => handleSelectYear(year)}
//           >
//             {year}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YearSelector;
