import { should }from 'chai';
should();

describe('tests', () => {

    it('should test', () =>{
        (1).should.be.equal(1);
    });

    it('should be able to write to console', ()=>{
        console.should.to.not.be.null;
        console.log('ConsoleTest', 'Hello World!');
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

        buf.should.have.length(3);

        one.should.be.equal(1);
        two.should.be.equal(2);
        three.should.be.equal(3);
    });
});
