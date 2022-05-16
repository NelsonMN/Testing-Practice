import reverseString from "../scripts/reverseString";

test("Empty String", () => 
    expect(reverseString('')).toBe('')
)

test("One letter", () => 
    expect(reverseString('x')).toBe('x')
)

test("More than one character", () =>
    expect(reverseString('hello')).toBe('olleh')
)
