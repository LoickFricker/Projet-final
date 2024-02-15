const Prestation = require('../models/prestation.model');

/**
 * Contrôleurs des prestations permettant de gérer les opérations CRUD (Create, Read, Update, Delete) liées aux prestations.
 * @module prestationsController
 */

module.exports = {
    /**
     * Récupère toutes les prestations disponibles.
     */
    getAllPrestations: async (req, res) => {
        try {
            const prestations = await Prestation.find();
            res.json(prestations);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    /**
     * Récupère l'image associée à une prestation spécifique.
     * @function getPrestationImage
     * @param {Object} req - L'objet représentant la requête HTTP contenant les paramètres de l'URL.
     * @param {Object} res - L'objet représentant la réponse HTTP à renvoyer.
     * @returns {Object} L'image associée à la prestation spécifique.
     */
    getPrestationImage: async (req, res) => {
        try {
            const prestation = await Prestation.findById(req.params.id);
            if (!prestation || !prestation.image) {
                return res.status(404).json({ message: "Image not found" });
            }
            res.set('Content-Type', 'image/jpeg'); // Définir le type de contenu approprié
            res.send(prestation.image); // Envoyer les données binaires de l'image
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    },

    /**
     * Crée une nouvelle prestation.
     * @function createPrestation
     * @param {Object} req - L'objet représentant la requête HTTP contenant les données de la nouvelle prestation.
     * @param {Object} res - L'objet représentant la réponse HTTP à renvoyer.
     * @returns {Object} Le JSON représentant la nouvelle prestation créée.
     */
    createPrestation: async (req, res) => {
        // Récupérez les données de l'image à partir de req.file.buffer
        const imageBuffer = req.file.buffer;

        const prestation = new Prestation({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            duration: req.body.duration,
            // Stockez les données binaires de l'image dans le champ image du modèle
            image: imageBuffer,
        });

        try {
            const newPrestation = await prestation.save();
            res.status(201).json(newPrestation);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    /**
     * Supprime une prestation existante.
     * @function deletePrestation
     * @param {Object} req - L'objet représentant la requête HTTP contenant l'identifiant de la prestation à supprimer.
     * @param {Object} res - L'objet représentant la réponse HTTP à renvoyer.
     * @returns {Object} Un message indiquant que la prestation a été supprimée avec succès.
     */
    deletePrestation: async (req, res) => {
        try {
            await Prestation.findByIdAndDelete(req.params.id);
            res.json({ message: 'Prestation deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};
