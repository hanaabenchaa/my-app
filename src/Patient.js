
/*import React, { Fragment, useState } from 'react';
import './App.css'; // Import your CSS file for styling

export const Patient = () => {
  const [N_dossier, setNdossier] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { N_dossier, Nom: nom, Prenom: prenom, Date_naissance: dateNaissance };
      const response = await fetch("http://localhost:5000/patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error('Failed to add patient');
      }

      // Clear input fields after successful addition
      setNdossier('');
      setNom('');
      setPrenom('');
      setDateNaissance('');

      alert('Patient added successfully');
    } catch (error) {
      console.error('Error adding patient:', error.message);
      alert('Failed to add patient');
    }
  };

  return (
    <Fragment>
      <div><h4 className="text-center ">Rechercher un patient</h4>
        <form className="d-flex">
          <input type="text" className="form-control" />
          <button className="btn btn-success">Rechercher</button>
        </form>
      </div>

      <div>
        <div className="ajouter-section">
          <h4 className="text-center">Ajouter un patient</h4>
          <form className="d-flex" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" placeholder="N_dossier" value={N_dossier} onChange={e => setNdossier(e.target.value)} />
            <input type="text" className="form-control" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} />
            <input type="text" className="form-control" placeholder="Prenom" value={prenom} onChange={e => setPrenom(e.target.value)} />
            <input type="text" className="form-control" placeholder="Date_naissance" value={dateNaissance} onChange={e => setDateNaissance(e.target.value)} />
            <button type="submit" className="btn btn-success">Ajouter</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Patient;*/



import React, { Fragment, useState } from 'react';
import './App.css';

export const Patient = () => {
  const [N_dossier, setNdossier] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');

  const onSubmitFrom = async e => {
    e.preventDefault();
    try {
      const body = { N_dossier, Nom: nom, Prenom: prenom, Date_naissance: dateNaissance };
      const response = await fetch("http://localhost:5000/patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/";
      alert('Patient added successfully');
    } catch (error) {
      console.error(error.message);
      alert('Failed to add patient');
    }
  };

  return (
    <Fragment>
      <div>
        <h4 className="text-center ">Rechercher un patient</h4>
        <form className="d-flex">
          <input type="text" className="form-control" />
          <button className="btn btn-success">Rechercher</button>
        </form>
      </div>

      <div>
        <div className="ajouter-section">
          <h4 className="text-center">Ajouter un patient</h4>
          <form className="d-flex" onSubmit={onSubmitFrom}>
            <input type="text" className="form-control" placeholder="N_dossier" value={N_dossier} onChange={e => setNdossier(e.target.value)} />
            <input type="text" className="form-control" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} />
            <input type="text" className="form-control" placeholder="Prenom" value={prenom} onChange={e => setPrenom(e.target.value)} />
            <input type="text" className="form-control" placeholder="Date_naissance" value={dateNaissance} onChange={e => setDateNaissance(e.target.value)} />
            <button type="submit" className="btn btn-success">Ajouter</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Patient;
