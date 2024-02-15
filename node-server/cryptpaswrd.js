/**
 * j'ai utilisé brcypt pour hacher le mot de pase en bdd 
 */

const bcrypt = require('bcrypt');

const plainPassword = 'lemotdepassecryptévoulu';

bcrypt.hash(plainPassword, 10, (err, hash) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Mot de passe crypté :', hash);
});
