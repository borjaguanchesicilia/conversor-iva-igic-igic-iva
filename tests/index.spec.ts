import Mocha from "mocha";
import { expect } from "chai";
import {conversor, redondeo} from "../src/index"


describe('conversor function test', () => {

    it('conversor(25, "IGIC") return 22.107438016528928', () => {
        expect(conversor(25, "IGIC")).to.be.equal(22.107438016528928);
    });

    it('conversor(25, "IVA") return 28.271028037383175', () => {
        expect(conversor(25, "IVA")).to.be.equal(28.271028037383175);
    });
});

describe('redondeo function test', () => {

    it('redondeo(22.107438016528928) return 22.11', () => {
        expect(redondeo(22.107438016528928)).to.be.equal(22.11);
    });

    it('redondeo(28.271028037383175) return 28.27', () => {
        expect(redondeo(28.271028037383175)).to.be.equal(28.27);
    });
});