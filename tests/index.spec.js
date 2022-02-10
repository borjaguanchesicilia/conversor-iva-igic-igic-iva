"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../src/index");
/*describe('comprobarValores function test', () => {

    it('comprobarValores(1, 8) return 9', () => {
        expect(conversor(1, 8)).to.be.equal(1);
    });

    it('conversor(-1, 8) return 7', () => {
        expect(conversor(-1, 8)).to.be.equal(7);
    });
});*/
describe('conversor function test', () => {
    it('conversor(25, 0) return 21.1325', () => {
        (0, chai_1.expect)((0, index_1.conversor)(25, 0)).to.be.equal(21.1325);
    });
    it('conversor(25, 1) return 28.1325', () => {
        (0, chai_1.expect)((0, index_1.conversor)(25, 1)).to.be.equal(28.1325);
    });
});
