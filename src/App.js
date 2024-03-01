/*import React, { useState } from 'react';
import "./App.css";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { LuMicroscope } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { FcStatistics } from "react-icons/fc";
import { GrMoney } from "react-icons/gr";
import { Pages } from './Pages';
import { Paiment } from './Paiment';
import {Consultation  } from './Consultation';
import {FileAttente } from './FileAttente';
import { Bilan } from './Bilan';
import { Acceuil } from './Acceuil';
import { Statistiques } from './Statistiques';
import {  Medicament } from './Medicament';
import {  Patient } from './Patient';




function App() {
  const [showText, setShowText] = useState({
    acceuil: true,
    patient: true,
    fileAttente: true,
    consultation: true,
    bilan: true,
    medicament: true,
    statistiques: true,
    paiment: true,
  });

  const pages = [
    { title: "acceuil", icon: <FaHome /> },
    { title: "patient", icon: <IoPersonSharp /> },
    { title: "file d'attente", icon: <BsFillPeopleFill /> },
    { title: "consultation", icon: <FaUserDoctor /> },
    { title: "bilan", icon: <LuMicroscope /> },
    { title: "médicament", icon: <GiMedicines /> },
    { title: "statistiques", icon: <FcStatistics /> },
    { title: "paiment", icon: <GrMoney /> },
  ];

  const handleButtonClick = (title) => {
    setShowText((prevState) => ({
      ...Object.fromEntries(Object.entries(prevState).map(([key, value]) => [key, key === title])),
    }));
  };

  return (
    <div className='app'>
      <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
        {pages.map((page, key) => (
          <button className='button' onClick={() => handleButtonClick(page.title)} key={key}>
            <Pages icon={page.icon} title={page.title} />
          </button>
        ))}
        {showText.acceuil && <div className="acceuil"><Acceuil /></div>}
        {showText.patient && <div className="patient"><Patient /></div>}
        {showText.fileAttente && <div className="fileAttente"><FileAttente /></div>}
        {showText.consultation && <div className="consultation"><Consultation /></div>}
        {showText.bilan && <div className="bilan"><Bilan /></div>}
        {showText.medicament && <div className="medicament"><Medicament /></div>}
        {showText.statistiques && <div className="statistiques"><Statistiques /></div>}
        {showText.paiment && <div className="paiment"><Paiment /></div>}
      </div>
    </div>
  );
}

export default App;*/


































































import React, { useState } from 'react';
import "./App.css";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { LuMicroscope } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { FcStatistics } from "react-icons/fc";
import { GrMoney } from "react-icons/gr";
import { Pages } from './Pages';
import { Bilan } from './Bilan';
import { Paiment } from './Paiment';
import { Consultation } from './Consultation';
import { FileAttente } from './FileAttente';
import { Acceuil } from './Acceuil';
import { Statistiques } from './Statistiques';
import { Medicament } from './Medicament';
import { Patient } from './Patient';

function App() {
  const [currentPage, setCurrentPage] = useState(null);

  const pages = [
    { title: "acceuil", icon: <FaHome />, component: <Acceuil /> },
    { title: "patient", icon: <IoPersonSharp />, component: <Patient /> },
    { title: "file d'attente", icon: <BsFillPeopleFill />, component: <FileAttente /> },
    { title: "consultation", icon: <FaUserDoctor />, component: <Consultation /> },
    { title: "bilan", icon: <LuMicroscope />, component: <Bilan />  },
    { title: "médicament", icon: <GiMedicines />, component: <Medicament /> },
    { title: "statistiques", icon: <FcStatistics />, component: <Statistiques /> },
    { title: "paiment", icon: <GrMoney />, component: <Paiment /> },
  ];

  const handlePageClick = (index) => {
    setCurrentPage(pages[index].component);
  };

  return (
    <div className='app'>
      <div className="sidebar">
        {pages.map((page, index) => (
          <button className='button' onClick={() => handlePageClick(index)} key={index}>
            <Pages icon={page.icon} title={page.title} />
          </button>
        ))}
      </div>
      <div className="content">
        {currentPage}
      </div>
    </div>
  );
}

export default App;












































