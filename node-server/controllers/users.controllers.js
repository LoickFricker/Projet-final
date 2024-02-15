const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
    /**
     * Authentifie un utilisateur en vérifiant les informations d'identification fournies.
     * @function userLogin
     * @param {Object} req - L'objet représentant la requête HTTP contenant les informations d'identification de l'utilisateur.
     * @param {string} req.body.username - Le nom d'utilisateur saisi par l'utilisateur.
     * @param {string} req.body.password - Le mot de passe saisi par l'utilisateur.
     * @param {Object} res - L'objet représentant la réponse HTTP à renvoyer.
     * @returns {Object} Un objet JSON contenant un jeton d'authentification si l'authentification est réussie.
     */
    userLogin: async (req, res) => {
        const { username, password } = req.body;

        try {
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).json({ message: 'Utilisateur non trouvé' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Mot de passe incorrect' });
            }

            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur de serveur' });
        }
    }
};