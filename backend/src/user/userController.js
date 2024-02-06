// Importation du service utilisateur userService.js
var userService = require('./userService');

// Contrôleur pour récupérer les données des utilisateurs
var getDataConntrollerfn = async (req, res) =>
{
    // Appel de la fonction du service pour récupérer les données des utilisateurs
    var employees = await userService.getDataFromDBService();
    // Envoi des données récupérées en réponse
    res.send({ "status": true, "data": employees });
}

// Contrôleur pour créer un nouvel utilisateur
var createUserControllerFn = async (req, res) => 
{
    // Appel de la fonction du service pour créer un nouvel utilisateur avec les données de la requête
    var status = await userService.createUserDBService(req.body);
    // Vérification du statut de création et envoi de la réponse appropriée
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}

// Contrôleur pour mettre à jour un utilisateur existant
var updateUserController = async (req, res) => 
{
    // Récupération de l'identifiant de l'utilisateur à mettre à jour depuis les paramètres de la requête
    console.log(req.params.id);
    // Affichage des données de mise à jour dans la console
    console.log(req.body);
    // Appel de la fonction du service pour mettre à jour l'utilisateur avec les données de la requête
    var result = await userService.updateUserDBService(req.params.id, req.body);
    // Vérification du résultat de la mise à jour et envoi de la réponse appropriée
    if (result) {
        res.send({ "status": true, "message": "User Updated"} );
    } else {
        res.send({ "status": false, "message": "User Update Failed" });
    }
}

// Contrôleur pour supprimer un utilisateur existant
var deleteUserController = async (req, res) => 
{
    // Récupération de l'identifiant de l'utilisateur à supprimer depuis les paramètres de la requête
    console.log(req.params.id);
    // Appel de la fonction du service pour supprimer l'utilisateur avec l'identifiant donné
    var result = await userService.removeUserDBService(req.params.id);
    // Vérification du résultat de la suppression et envoi de la réponse appropriée
    if (result) {
        res.send({ "status": true, "message": "User Deleted"} );
    } else {
        res.send({ "status": false, "message": "User Deletion Failed" });
    }
}

// Exportation des contrôleurs pour utilisation dans d'autres fichiers
module.exports = { getDataConntrollerfn, createUserControllerFn, updateUserController, deleteUserController };
