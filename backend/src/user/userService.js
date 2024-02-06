// Importation du modèle User depuis userModele.js
var userModel = require('./userModel');

// Fonction pour récupérer les données des utilisateurs depuis la base de données
module.exports.getDataFromDBService = () => {
    return new Promise(function checkURL(resolve, reject) {
        // Recherche de tous les documents dans la collection 'employees'
        userModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false); // En cas d'erreur, rejeter la promesse
            } else {
                resolve(result); // En cas de succès, résoudre la promesse avec les données
            }
        });
    });
}

// Fonction pour créer un nouvel utilisateur dans la base de données
module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        // Création d'une nouvelle instance du modèle User avec les détails de l'utilisateur
        var userModelData = new userModel(userDetails);
        // Enregistrement de l'utilisateur dans la base de données
        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false); // En cas d'erreur, rejeter la promesse
            } else {
                resolve(true); // En cas de succès, résoudre la promesse avec la confirmation de succès
            }
        });
    });
}

// Fonction pour mettre à jour les détails d'un utilisateur dans la base de données
module.exports.updateUserDBService = (id, userDetails) => {     
    return new Promise(function myFn(resolve, reject) {
        // Recherche de l'utilisateur par son identifiant et mise à jour de ses détails
        userModel.findByIdAndUpdate(id, userDetails, function returnData(error, result) {
            if(error) {
                reject(false); // En cas d'erreur, rejeter la promesse
            } else {
                resolve(result); // En cas de succès, résoudre la promesse avec les données mises à jour
            }
        });
    });
}

// Fonction pour supprimer un utilisateur de la base de données
module.exports.removeUserDBService = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        // Recherche de l'utilisateur par son identifiant et suppression de l'enregistrement
        userModel.findByIdAndDelete(id, function returnData(error, result) {
            if(error) {
                reject(false); // En cas d'erreur, rejeter la promesse
            } else {
                resolve(result); // En cas de succès, résoudre la promesse avec la confirmation de suppression
            }          
        });
    });
}
