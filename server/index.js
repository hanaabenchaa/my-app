const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");



//middleware
app.use(cors());
app.use(express.json());//req body

 //ROUTES//


// rechercher un patient

app.get("/patient/:N_dossier", async (req, res) => {
  try {
    const { N_dossier } = req.params;
    const patient = await pool.query("SELECT * FROM patient WHERE N_dossier = $1", [
      N_dossier,
    ]);

    if (patient.rows.length === 0) {
      return res.status(404).json({ message: "Pas de résultat" });
    }
 
    res.json(patient.rows[0]);// Return 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


//ajouter un patient 

app.post("/patient", async (req, res) => {
  try {
      const { N_dossier, Nom, Prenom, Date_naissance } = req.body;
      const newPatient = await pool.query("INSERT INTO patient (N_dossier, Nom, Prenom, Date_naissance) VALUES ($1, $2, $3, $4) RETURNING *", 
      [N_dossier, Nom, Prenom, Date_naissance]);
      
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


//modifier un patient 
app.put("/patient/:N_dossier", async (req, res) => {
  try {
    const { N_dossier } = req.params;
    const { nom, prenom, date_naissance } = req.body; 

    const updatedPatient = await pool.query(
      "UPDATE patient SET nom = $1, prenom = $2, date_naissance = $3 WHERE N_dossier = $4 RETURNING *",
      [nom, prenom, date_naissance, N_dossier]
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

app.delete("/patient/:N_dossier", async (req, res) => {
  try {
    const { N_dossier } = req.params;

    const deletedPatient = await pool.query(
      "DELETE FROM patient WHERE N_dossier = $1 RETURNING *",
      [N_dossier]
    );

    if (deletedPatient.rows.length === 0) {
      return res.status(404).json({ message: "pas de résultat" });
    }

    res.json(deletedPatient.rows[0] );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
 //FIN ROUTES//
app.listen(5000, () =>{
console.log("server has started on port 5000");
});