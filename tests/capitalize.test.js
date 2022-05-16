import capitalize from '../scripts/capitalize'

test("Empty string", () =>
    expect(capitalize('')).toBe('')
)

test("Two character string", () => 
    expect(capitalize('hi')).toBe('Hi')
)

test("One character string", () =>
    expect(capitalize('x')).toBe("X")
)
