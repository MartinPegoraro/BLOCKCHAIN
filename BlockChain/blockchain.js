var bloque2 = require('./bloques');


class Blockchain{

    constructor(){
        this.bloque=[];
        this.crearGenesis();                
    }

    crearGenesis(){
        var genesis= new bloque2(0, new Date(), null, null, null);
        this.bloque.push(genesis);
    }

    crearBloque(transaccion){
        let prevBlock = this.ultimoBloque();
        var bloq = new bloque2(this.bloque.length, new Date, prevBlock.hash, transaccion);
        bloq.minar(2);
        this.bloque.push(bloq);
    }


 //Obtener ultimo bloque usando el arrelgo bloque
    ultimoBloque(){
        
        if(this.bloque != null){
            return this.bloque.slice(-1)[0];
          }else {
            console.log("No hay bloque anterior");
          }
    }

}
module.exports=Blockchain;