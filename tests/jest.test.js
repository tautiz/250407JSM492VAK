//masyvu testavimas
const maistoProduktai = ['pienas', 'duona', 'vanduo'];

test('Ar produktu sarase yra pienas', () => {
    expect(maistoProduktai).toContain('pienas')
})

function grazinaMasyva() {
    return ['pienas', 'druska', 'miltai']
}

test('Ar produktu sarase yra miltai', () => {
    const maistoProduktai2 = grazinaMasyva();
    expect(maistoProduktai2).toContain('miltai')
})

//async
async function delayedFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Atsakymas')
        }, 2000)
    })
}

test('testuojam async funkcija', async () => {
    const result = await delayedFunction()
    expect(result).toBe('Atsakymas')
})

async function fakeAPI(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if( delay > 2000) {
                reject('negausi duomenu')
            }
            resolve('Atsakymas')
        }, delay)
    })
}

test('testuojam fakeAPI kai delay 1s', async () => {
    const result = await fakeAPI(1000);
    expect(result).toBe('Atsakymas');
});

test('testuojam fakeAPI kai delay 2.5s', async () => {
    await expect(fakeAPI(2500)).rejects.toBe('negausi duomenu');
    
    // Alternatyvus variantas

    // try {
    //     const result2 = await fakeAPI(2500)
    // } catch (error) {
    //     expect(error).toBe('negausi duomenu')
    // }
})

const atmetantiFunckija = async () => {
    return Promise.reject(new Error('nutiko bedele'))
}

test('tikrinam atmetimo funkcija', async () => {
    await expect(atmetantiFunckija()).rejects.toThrow('nutiko bedele');

    // Alternstyva

    // try {
    //     await atmetantiFunckija()
    // } catch(error) {
    //     expect(error.message).toBe('nutiko bedele')
    // }
})
