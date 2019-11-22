const openpgp = require('openpgp');

class crypter{
    async encrypt(message,passwords){
        let options = {
                  message: openpgp.message.fromText(message),
                 passwords: passwords,
                armor: false
            };
        return openpgp.encrypt(options).then(function(ciphertext) {
            return ciphertext.message.packets.write();
        });
    }
    
    async decrypt(encrypted,password){  
        let options = {
                message: await openpgp.message.read(encrypted),
                passwords: [password],
                format: 'text'
            };

            return openpgp.decrypt(options).then(function(plaintext) {
                return plaintext.data;
            });
    };
};

module.exports = crypter;