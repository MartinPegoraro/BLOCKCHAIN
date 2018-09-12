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

    minar(difficulty){
        var i;
        var cont;
        cont = 50;
        while (cont !== difficulty){
            cont = 0;
            for (i = 0; i < this.hash.length; i++) {
                if (this.hash.charAt(i) == "0"){
                  cont++;     
                }    
            } 
            if (cont == difficulty){
                console.log("bloque minado: "+this.hash);
            } else {
                this.nonce++;
                this.hash = this.crearHash();
            }
        } 
    }
}
module.exports=Bloque;