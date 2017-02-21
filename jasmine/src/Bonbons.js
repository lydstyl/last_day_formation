var Bonbon = {
    stock : 510,
    retire : function(nb){
        this.stock -= nb;
    },
    ajoute : function(nb){
        this.stock += nb;
    }
};