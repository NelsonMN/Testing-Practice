import { capitalize, reverseString, calculator } from './index'

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


// calculator():

// add() - addition is associative so we only need the three cases:
test("Addition - two positive integers", () =>
    expect(calculator.add(1, 2)).toBe(3)
)

test("Addition - one positive, one negative integer", () =>
    expect(calculator.add(6, -4)).toBe(2)    
)

test("Addition - two negative integers", () => 
    expect(calculator.add(-5, -2)).toBe(-7)
)


// sub():
test("Subtraction - two positive integers", () => 
    expect(calculator.sub(6, 5)).toBe(1)
)

test("Subtraction - first integer positive, second integer negative", () =>
    expect(calculator.sub(5, -5)).toBe(10)
)

test("Subtraction - first integer negative, second integer positive", () =>
    expect(calculator.sub(-2, 2)).toBe(-4)    
)

test("Subtraction - both negative integers", () =>
    expect(calculator.sub(-2,-4)).toBe(2)
)


