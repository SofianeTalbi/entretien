// Importation du module mongoose pour la gestion de la base de données MongoDB
var mongoose = require('mongoose');

// Récupération du schéma mongoose
var Schema = mongoose.Schema;

// Définition du schéma pour le modèle User
var userSchema = new Schema({
    // Définition des champs et de leurs contraintes
    firstname: {
        type: String,
        required: true // Le prénom est requis
    },
    lastname: {
        type: String,
        required: true // Le nom de famille est requis
    },
    companyid: {
        type: String,
        required: true // L'ID de la société est requis
    },
    position: {
        type: String,
        required: true // La position est requise
    },
    startdate: {
        type: Date, // Utilisation du type Date pour un champ de date
        required: true // La date de début est requise
    },
    selectedCity: {
        type: String,
        required: false // La ville sélectionnée n'est pas requise
    },
});

// Exportation du modèle User basé sur le schéma userSchema
module.exports = mongoose.model('employees', userSchema);
