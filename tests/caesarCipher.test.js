import module from '../scripts/caesarCipher';

test("All lowercase letters", () => 
    expect(module.caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs')
)

test("All uppercase letters", () =>
    expect(module.caesarCipher('WELCOME TO CLASS', 6)).toBe('CKRIUSK ZU IRGYY')    
)

test("All non-alpha characters", () => 
    expect(module.caesarCipher('!!!12345!!!!', 5)).toBe('!!!12345!!!!')
)

test("Empty String", () => 
    expect(module.caesarCipher('', 1)).toBe('')
)

test("Mix of alpha and non-alpha characters", () =>
    expect(module.caesarCipher('Hi, fellow learners!', 3)).toBe('Kl, ihoorz ohduqhuv!')
)