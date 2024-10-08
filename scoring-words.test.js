const { high } = require('./scoring-words'); 

test('debería devolver taxi', () => {
    expect(high('man i need a taxi up to ubud')).toBe('taxi'); 
});


test('debería devolver volcano', () => {
    expect(high('what time are we climbing up the volcano')).toBe('volcano'); 
});


test('debería devolver semynak', () => {
    expect(high('take me to semynak')).toBe('semynak'); 
});

test('deberia devolver aa', () => {
    expect(high('aa b')).toBe('aa'); 
});


it('should return a word with all the vowels in case there is one present', () => {
    const words = "I think education is the most valuable investment in a modern state";
    const maxPointsWord = high(words);
    expect(maxPointsWord).toBe("education");
})
