const assert = require('assert');
const crypterClass = require('../lib/crypter');
let crypter = new crypterClass();

describe('Encryption', function() {
    it('decrypts to original message', function(done) {
        crypter.encrypt('test message',['test1','test2'])
        .then(str => {

            crypter.decrypt(str,'test5').
            
            
            then(d => {
                console.log(d);
               done();
            }).
            catch   (   e => {
                            console.log('wrong password');
                
                
                done(false);
            });
        });
        
    });
  });






