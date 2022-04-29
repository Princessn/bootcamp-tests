describe('test findItemsOver20 function', function () {
    it('should return all the products quantity higher that 20', function () {
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it('should return an empty list if there are no items less than 20', function () {
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });
    it('should return all the products quantity higher that 20 ', function () {
        assert.deepEqual(results3, findItemsOver20(itemList3));  
    });

    });