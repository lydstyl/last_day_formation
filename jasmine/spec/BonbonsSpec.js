describe('MagasinDeBonbons', function(){
    describe('Premier type de bonbon', function(){
        describe('Un client retire 20 bonbons d\'une boite de 510 bonbons', function(){
            var chamallow = Object.create(Bonbon);
            chamallow.retire(20);
            it('devrait y avoir 490 bonbons qui restent dans la boite', function(){
                expect(chamallow.stock).toEqual(490);
            });
        });
    });
    describe('Second type de bonbon', function(){
        describe('Un employé ajoute 600 bonbons dans une boite qui contient 4 bonbons', function(){
            var fraiseTagada = Object.create(Bonbon);
            fraiseTagada.stock = 4;
            fraiseTagada.ajoute(600)
            it('devrait y avoir 604 bonbons dans la boite', function(){
                expect(fraiseTagada.stock).toEqual(604);
            });
        });
    });
    describe('Enlever des bonbons d\'un type ne change pas la quantité de l\'autre type de bonbon', function(){
            var fraiseTagada = Object.create(Bonbon);
            var chamallow = Object.create(Bonbon);
            fraiseTagada.retire(10);
            it('devrait y avoir 490 bonbons qui restent dans la boite', function(){
                expect(chamallow.stock).toEqual(510);
            });
    });
});