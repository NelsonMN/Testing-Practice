import module from "../scripts/analyzeArray";

// Average

test("Average: empty array", () => 
    expect(module.object([]).average).toBe(0)
)

test("Average: one-element array", () => 
    expect(module.object([10]).average).toBe(10)
)

test("Average: multiple-element array", () => 
    expect(module.object([1, 2, 3, 4, 5]).average).toBe(3)
)

// Minimum

test("Minimum: empty array", () =>
    expect(module.object([]).min).toBe(0)
)

test("Minimum: single element array", () =>
    expect(module.object([1]).min).toBe(1)
)

test("Minimum: multiple positive element array", () =>
    expect(module.object([52, 90, 43, 26, 64]).min).toBe(26)
)

test("Minimum: multiple negative element array", () =>
    expect(module.object([-52, -90, -43, -26, -64]).min).toBe(-90)
)


// Maximum:

test("Maximum: empty array", () =>
    expect(module.object([]).max).toBe(0)
)

test("Maximum: single element array", () =>
    expect(module.object([1]).max).toBe(1)
)

test("Maximum: multiple positive element array", () =>
    expect(module.object([52, 90, 43, 26, 64]).max).toBe(90)
)

test("Maximum: multiple negative element array", () =>
    expect(module.object([-52, -90, -43, -26, -64]).max).toBe(-26)
)


// Length:
test("Length: empty array", () =>
    expect(module.object([]).length).toBe(0)
)

test("Length: single element array", () =>
    expect(module.object([1]).length).toBe(1)
)

test("Length: multiple element array", () =>
    expect(module.object([52, 90, 43, 26, 64]).length).toBe(5)
)
