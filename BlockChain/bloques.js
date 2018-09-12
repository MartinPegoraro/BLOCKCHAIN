const SHA256 = require('crypto-js/sha256')
class Bloque{
    constructor(index, timeStamp, previousHash='', data){
        this.index = index;
        this.date = timeStamp;
        this.previousHash = previousHash;
        this.hash = this.crearHash();
        this.data = data;
        this.nonce=0;
    }
    crearHash() {
        return SHA256(this.index + this.date.toString() + this.data).toString();
    }

    minar(dificultad) {
        while (!this.hash.startsWith(dificultad)) {
            this.nonce++;
            this.hash = this.createHash();
        }
    }

}
module.exports=Bloque;