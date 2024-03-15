
import  { useState } from 'react';
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












































