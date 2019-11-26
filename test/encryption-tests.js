const assert = require('assert');
const crypterClass = require('../lib/crypter');
let crypter = new crypterClass();
let message = 'test message';

describe('Encryption', function() {
    it('decrypts to original message', function(done) {
        crypter.encrypt(message, ['test1', 'test2'])
            .then(str => {
                crypter.decrypt(str, 'test1').
                    then(d => {
                        assert.equal(message,d),
                        done();
                    });
            });

    });
    
    it('wrong password error handled', function(done) {
        crypter.encrypt(message, ['test1', 'test2'])
            .then(str => {
                crypter.decrypt(str, 'test5').
                    catch(err => {
                        done();
                    });
            });

    });
});






