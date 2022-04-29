

    describe('test findItemsOver function', function () {
        it('should return threshold for the quantity of all available items in the 1st list', function () {
            assert.deepEqual(results, findItemsOver(itemList, 20));
    
        });
        it('should return threshold for the quantity of all available items in the 2nd list', function () {
            assert.deepEqual(results2, findItemsOver(itemList2, 20));
        });
        it('should return threshold for the quantity of all available items and in the 3rd list', function () {
            assert.deepEqual(results3, findItemsOver(itemList3, 20));
    
        });
    });