var expect = chai.expect;

/*!!!!!!!!!!!!!!!!!!wenn das herbarium gerändert wird den wert auch anpassen!!!!!!!!!!!*/

describe("Database", function () {
    database.init();
    it("should get all Values", function (done) {
        database.getAllValues(function (values) {

            expect(values).to.have.length(3);
            done();
        });
    });

    it('should get all "Nutzpflanze"', function (done) {
        database.getByTyp('Nutzpflanze',
            function (values) {
                expect(values).to.be.have.length(2);
                done();
            });
    });

    it('should get all Alchimistischesmittel', function (done) {
        database.getByTyp('Alchimistischesmittel',
            function (values) {
                expect(values).to.be.have.length(1);
                done();
            });
    });


    it('should get things with the Char "Alra" in the Name', function(done){
        database.getByName("Alra", function(values){
            expect(values).to.be.have.length(3);
            done();
        });
    })

})