import { capitalize, reverseString } from './index'

// capitalize():

test("Empty string", () =>
    expect(capitalize('')).toBe('')
)

test("Two character string", () => 
    expect(capitalize('hi')).toBe('Hi')
)

test("One character string", () =>
    expect(capitalize('x')).toBe("X")
)




// reverseString():

test("Empty String", () => 
    expect(reverseString('')).toBe('')
)

test("One letter", () => 
    expect(reverseString('x')).toBe('x')
)

test("More than one character", () =>
    expect(reverseString('hello')).toBe('olleh')
    )