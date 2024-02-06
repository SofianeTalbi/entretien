// Importation du module express
var express = require('express');

// Initialisation du routeur express
const router = express.Router();

// Importation du contrôleur utilisateur
var userController = require('../src/user/userController');

// Définition des routes pour les opérations CRUD sur les utilisateurs

// Route pour récupérer tous les utilisateurs
router.route('/user/getAll').get(userController.getDataConntrollerfn);

// Route pour créer un nouvel utilisateur
router.route('/user/create').post(userController.createUserControllerFn);

// Route pour mettre à jour un utilisateur existant
router.route('/user/update/:id').patch(userController.updateUserController);

// Route pour supprimer un utilisateur
router.route('/user/delete/:id').delete(userController.deleteUserController);

// Exportation du routeur pour une utilisation dans d'autres fichiers
module.exports = router;
