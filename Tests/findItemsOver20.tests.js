describe('The findItemsOver20 function', function () {
    
        it("should return the names of all item over20 in qty when 'findItemsOver20' is passed", function(){
        assert.equal(findItemsOver20  [
            {name : 'apples', qty : 40},{name : 'apples', qty : 37}, 
            {name : 'pears', qty : 20}, {name : 'bananas', qty : 23} ]) 
        })
        it("should return all item with over20 qty from the string when 'findItemsOver20' is passed", function(){
            assert.equal(findItemsOver20 ['pears ,qty  37' , 'bananas,qty 27'])
        })
        it("should return 0 when thereare noitems with over20 qty from the string when 'findItemsOver20' is passed", function(){
            assert.equal(findItemsOver20 ['apples ,qty  14' , 'bananas,qty 8'])
        })
    });