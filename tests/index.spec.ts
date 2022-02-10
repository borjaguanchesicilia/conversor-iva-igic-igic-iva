import Mocha from "mocha";
import { expect } from "chai";
import {comprobarValores, conversor} from "../src/index"


describe('comprobarValores function test', () => {

    it('comprobarValores(1, 8) return 888888', () => {
        expect(comprobarValores("a", 1)).to.be.equal(888888);
    });

    it('comprobarValores(20, 8) return 999999', () => {
        expect(comprobarValores(20, 8)).to.be.equal(999999);
    });
});


describe('conversor function test', () => {

    it('conversor(25, 0) return 21.1325', () => {
        expect(conversor(25, 0)).to.be.equal(21.1325);
    });

    it('conversor(25, 1) return 28.1325', () => {
        expect(conversor(25, 1)).to.be.equal(28.1325);
    });
});