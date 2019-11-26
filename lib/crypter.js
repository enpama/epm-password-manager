const openpgp = require('openpgp');

class crypter {
    encrypt(message, passwords) {
        return new Promise(function(resolve, reject) {
            let options = {
                message: openpgp.message.fromText(message),
                passwords: passwords,
                armor: false
            };
            openpgp.encrypt(options)
                .then(ciphertext => {
                    resolve(ciphertext.message.packets.write());
                })
                .catch(err => {
                    reject(err);
                })
        });
    };
    decrypt(encrypted, password) {
        return new Promise(function(resolve, reject) {
            openpgp.message.read(encrypted)
                .then(message => {
                    let options = {
                        message: message,
                        passwords: [password],
                        format: 'text'
                    };

                    openpgp.decrypt(options)
                        .then(plaintext => {
                            resolve(plaintext.data);
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
        });
    };
};

module.exports = crypter;

