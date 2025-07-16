const { sudetis } = require('../sum.js');

test ('Turi atlikti sudeti', () =>{
    const x = 2;
    const y = 6;

    const rez = sudetis(x, y);

    expect(rez).toBe(8);
});

test('Neatlieka atimties', () => {
    expect(sudetis(3,2)).not.toBe(1);
});