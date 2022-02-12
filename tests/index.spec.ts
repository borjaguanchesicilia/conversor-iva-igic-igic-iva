import Mocha from "mocha";
import { expect } from "chai";
import {conversor} from "../src/index"


describe('conversor function test', () => {

    it('conversor(25, "IGIC") return 21.1325', () => {
        expect(conversor(25, "IGIC")).to.be.equal(21.1325);
    });

    it('conversor(25, "IVA") return 28.1325', () => {
        expect(conversor(25, "IVA")).to.be.equal(28.1325);
    });
});