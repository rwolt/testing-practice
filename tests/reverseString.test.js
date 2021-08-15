import { expect, it } from "@jest/globals";
import reverseString from "../functions/reverseString";

it('One word string', () => {
    expect(reverseString('word')).toBe('drow');
})

it('Two word string', () => {
    expect(reverseString('Compound Word')).toBe('droW dnuopmoC');
})

it('Number string', () => {
    expect(reverseString("123456")).toBe('654321');
})



