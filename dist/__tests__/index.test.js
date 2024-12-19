"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe("mOcKcAsE", () => {
    it("should transform a basic string (default behavior)", () => {
        const input = "Hello World";
        const output = (0, index_1.mOcKcAsE)(input);
        // hElLo wOrLd
        expect(output).toBe("hElLo wOrLd");
    });
    it("should transform a basic string with capitalizeFirst = true", () => {
        const input = "Hello World";
        const output = (0, index_1.mOcKcAsE)(input, { capitalizeFirst: true });
        // HeLlO WoRlD
        expect(output).toBe("HeLlO WoRlD");
    });
    it("should handle an empty string", () => {
        const input = "";
        const output = (0, index_1.mOcKcAsE)(input);
        expect(output).toBe("");
    });
    it("should handle a string with punctuation and spaces", () => {
        const input = "Hello, World!";
        const defaultOutput = (0, index_1.mOcKcAsE)(input);
        // hElLo, WoRlD!
        expect(defaultOutput).toBe("hElLo, WoRlD!");
        const capitalFirstOutput = (0, index_1.mOcKcAsE)(input, { capitalizeFirst: true });
        // HeLlO, wOrLd!
        expect(capitalFirstOutput).toBe("HeLlO, wOrLd!");
    });
    it("should handle a string with mixed casing in input", () => {
        const input = "hElLo";
        const defaultOutput = (0, index_1.mOcKcAsE)(input);
        // hElLo -> hElLo (as per pattern: even lower, odd upper)
        // h(0, lower) e(1, upper) l(2, lower) l(3, upper) o(4, lower)
        expect(defaultOutput).toBe("hElLo");
        const capitalFirstOutput = (0, index_1.mOcKcAsE)(input, { capitalizeFirst: true });
        // capitalFirst pattern: even upper, odd lower
        // h(0, upper) e(1, lower) l(2, upper) l(3, lower) o(4, upper)
        expect(capitalFirstOutput).toBe("HeLlO");
    });
});
