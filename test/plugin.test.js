'use strict';

const mm = require('egg-mock');
const assert = require('assert');

describe('test/plugin.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'validate_form',
    });
    return app.ready();
  });

  after(() => app.close());
  describe('controller#validator init', () => {
    it('ctx validator associate init success', () => {
      const ctx = app.mockContext();
      assert(ctx.validator);
      assert(ctx.validator.validate);
    });
    it('ctx validate associate init success', () => {
      const ctx = app.mockContext();
      assert(ctx.validate);
    });
  });


});
