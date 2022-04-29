describe("The countRegNumber function", function () {
    
        it("Should return the total number of reg numbers in the string which is 3", function () {
          assert.equal('3' ,countRegNumber('CA 182736,CY 523519,CJ 812328'));
        });
        it("Should return 2 because thereare only 2 regnumbers in the string that is passed", function () {
          assert.equal('2' ,countRegNumber('CA 182736,CJ 812328'));
        });
        
    });