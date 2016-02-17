import { expect }from 'chai';

describe('tests', () => {

    it('should test', () =>{
        expect(1).be.equal(1);
    });

    it('should be able to write to console', ()=>{
        expect(console).to.not.be.null;
    });
});

describe('JavaScript', function(){
    it('should be able to write to typed Arrays given by val', ()=>{
        const changeArray = buffer =>{
            buffer[0] = 1;
            buffer[1] = 2;
            buffer[2] = 3;
        };

        let buf = new Uint32Array(3);
        changeArray(buf);

        const one = buf[0];
        const two = buf[1];
        const three = buf[2];

        expect(buf).have.length(3);

        expect(one).be.equal(1);
        expect(two).be.equal(2);
        expect(three).be.equal(3);
    });
});
