const expect = require('chai').expect;
const assert = require('chai').assert;

import { GuiFactory, WinFactory, MacFactory } from '../src/creational/abstract-factory/abstract-factory_es6';

describe('abstract factory test', () => {

    it('GuiFactory Test', () => {
        const guiFactory = new GuiFactory();
        assert.instanceOf(guiFactory, GuiFactory, 'Instance of GuiFactory');
        expect(guiFactory.onClick()).to.equal('Hi');
    });

    it('WinFactory Test', () => {
        const guiFactory = new WinFactory();
        assert.instanceOf(guiFactory, GuiFactory, 'Instance of GuiFactory');
        expect(guiFactory.renderBtn()).to.equal('<win>Button</win>');
        expect(guiFactory.onClick()).to.equal('Hi');
    });

    it('MacFactory Test', () => {
        const guiFactory = new MacFactory();
        assert.instanceOf(guiFactory, GuiFactory, 'Instance of GuiFactory');
        expect(guiFactory.renderBtn()).to.equal('<mac>Button</mac>');
        expect(guiFactory.onClick()).to.equal('Hi');
    });

});
