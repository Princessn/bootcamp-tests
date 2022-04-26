describe ('test my greet function', function(){
    it ('should return hello mbali when mbali is passed in', function(){
        assert.equal('Hello, mbali', greet('mbali'))
    })
    it ('should return "error" when the string is empty', function(){
        assert.equal('error', greet(''))
    })
    it ('should return "error" when a number is passed', function(){
        assert.equal('error', greet(5))
    })
    it ('should return "error" when a number is passed', function(){
        assert.equal('error', greet(25))
    })
})