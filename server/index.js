const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");



//middleware
app.use(cors());
app.use(express.json());//req body

 //ROUTES//
//TABLE patient

// rechercher un patient par nom
app.get("/patient/:nom", async (req, res) => {
  try {
    const { nom } = req.params;
    const patient = await pool.query("SELECT * FROM patient WHERE nom = $1", [
      nom,
    ]);

    if (patient.rows.length === 0) {
      return res.status(404).json({ message: "Pas de résultat" });
    }
 
    res.json(patient.rows); // Return all patients with the specified name
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


//ajouter un patient 

app.post("/patient", async (req, res) => {
  try {
      const { Nom, Prenom, Date_naissance } = req.body;
      const newPatient = await pool.query("INSERT INTO patient (Nom, Prenom, Date_naissance) VALUES ($1, $2, $3) RETURNING *", 
      [Nom, Prenom, Date_naissance]);
      
      res.json(newPatient.rows[0]); // Assuming you only expect one row to be returned
  } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
  }
});





//donner tout la liste des patinets 
app.get("/patient",async(req,res)=>{
  try {
    const allPatient = await pool.query("SELECT * FROM patient");
     // Return 
    res.json(allPatient.rows);
  } catch (err) {
    console.error(err.message);
  }
})


//modifier un patient avec lr nom
app.put("/patient/:nom", async (req, res) => {
  try {
    const { nom } = req.params;
    const { prenom, date_naissance } = req.body; 

    const updatedPatient = await pool.query(
      "UPDATE patient SET prenom = $1, date_naissance = $2 WHERE nom = $3 RETURNING *",
      [prenom, date_naissance, nom]
    );

    if (updatedPatient.rows.length === 0) {
      return res.status(404).json({ message: "Pas de résultat" });
    }

    res.json(updatedPatient.rows[0]);  // Return 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});



//suprimer un patient 

app.delete("/patient/:nom", async (req, res) => {
  try {
    const { nom } = req.params;

    const deletedPatient = await pool.query(
      "DELETE FROM patient WHERE nom = $1 RETURNING *",
      [nom]
    );

    if (deletedPatient.rows.length === 0) {
      return res.status(404).json({ message: "pas de résultat" });
    }

    res.json(deletedPatient.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


//TABLE medicaments 

//rechercher un medicaments

app.get("/medicaments/:designation", async (req, res) => {
  try {
    const { designation } = req.params;
    const medicaments = await pool.query("SELECT * FROM medicaments WHERE designation = $1", [
      designation,
    ]);

    if (medicaments.rows.length === 0) {
      return res.status(404).json({ message: "Pas de résultat" });
    }
 
    res.json(medicaments.rows[0]); // Renvoyer le premier médicament trouvé correspondant à la désignation
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});



//ajouter medicaments
app.post("/medicaments", async (req, res) => {
  try {
      const { designation, dosage, forme, conditionnement, laboratoire, pays_laboratoire } = req.body;
      const newMedicament = await pool.query("INSERT INTO medicaments (designation, dosage, forme, conditionnement, laboratoire, pays_laboratoire) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", 
      [designation, dosage, forme, conditionnement, laboratoire, pays_laboratoire]);
      
      res.json(newMedicament.rows[0]); // Assuming you only expect one row to be returned
  } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
  }
});







//supprimer medicaments
app.delete("/medicaments/:designation", async (req, res) => {
  try {
    const { designation } = req.params;

    const deletedMedicament = await pool.query(
      "DELETE FROM medicaments WHERE designation = $1 RETURNING *",
      [designation]
    );

    if (deletedMedicament.rows.length === 0) {
      return res.status(404).json({ message: "pas de résultat" });
    }

    res.json(deletedMedicament.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//modifier un medicaments

app.put("/medicaments/:designation", async (req, res) => {
  try {
    const { designation } = req.params;
    const { dosage, forme, conditionnement, laboratoire, pays_laboratoire } = req.body; 

    const updatedMedicament = await pool.query(
      "UPDATE medicaments SET dosage = $1, forme = $2, conditionnement = $3, laboratoire = $4, pays_laboratoire = $5 WHERE designation = $6 RETURNING *",
      [dosage, forme, conditionnement, laboratoire, pays_laboratoire, designation]
    );

    if (updatedMedicament.rows.length === 0) {
      return res.status(404).json({ message: "Pas de résultat" });
    }

    res.json(updatedMedicament.rows[0]); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});












 //FIN ROUTES//
app.listen(5000, () =>{
console.log("server has started on port 5000");
});