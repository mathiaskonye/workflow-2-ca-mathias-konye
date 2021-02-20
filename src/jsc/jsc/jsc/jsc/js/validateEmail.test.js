"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_1 = require("./contact");
test('should validate if the value is valid and equal to regex', function () {
    expect(contact_1.default("testemail@gmail.com")).toBe(true);
});
