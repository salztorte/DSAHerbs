import expect from 'expect';

describe('tests', () => {
    it('should test', () =>{
        expect(1).toBe(1);
    });

    it('should be able to write to console', ()=>{
        expect(console).toNotBe(null);
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

        expect(buf.length).toBe(3);
        expect(one).toBe(1);
        expect(two).toBe(2);
        expect(three).toBe(3);
    });
});
