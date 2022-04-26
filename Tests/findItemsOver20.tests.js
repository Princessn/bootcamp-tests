describe('The findItemsOver20 function', function () {
    
        it("should return all item over20 qty", function(){
         assert.equal(findItemsOver20 ['pears ,qty  37' , 'bananas,qty 27'])
        })
        it("should return all item over20 qty", function(){
        assert.equal(findItemsOver20  [
            {name : 'apples', qty : 40},{name : 'apples', qty : 37}, 
            {name : 'pears', qty : 20}, {name : 'bananas', qty : 23}  ]) 
        
           })
    });