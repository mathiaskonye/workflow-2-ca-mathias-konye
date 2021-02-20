import validateEmail from "./contact";

test('should validate if the value is valid and equal to regex', () => {
    expect(validateEmail("testemail@gmail.com")).toBe(true);
})
