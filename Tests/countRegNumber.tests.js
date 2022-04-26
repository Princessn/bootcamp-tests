describe("The countRegNumber function", function () {
    
        it("Should return the number 3 when only three reg numbers are passed", function () {
          assert.equal('3' ,countRegNumber('CA 182736,CY 523519,CJ 812328'));
        });
        it("Should return 2 because only two reg numbers are passed", function () {
          assert.equal('2' ,countRegNumber('CA 182736,CJ 812328'));
        });
        
    });