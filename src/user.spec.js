const user = require('./user');

describe('user', () => {
    it('input is a string', function() {
        expect(function(){
            user('peeter');
        }).toThrow('id needs to be integer')
    })
})