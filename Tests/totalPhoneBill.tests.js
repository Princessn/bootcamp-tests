describe('Test my totalPhoneBill Function',function(){
    it('it should return the total cost of a phone bill',function(){
        assert.equal('R10.20',totalPhoneBill('sms,sms,sms,call,call,call'))
    })
    it('it should return the total cost of a phone bill',function(){
        assert.equal('R8.90',totalPhoneBill('sms,call,call,call'));
    })
    it('it should return the total cost of a phone bill',function(){
        assert.equal('R1.30',totalPhoneBill('sms,sms'));
    })
    it('it should return the total cost of a phone bill',function(){
        assert.equal('R5.50',totalPhoneBill('call,call'));
    })
})