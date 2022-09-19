"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async find(ctx) {
    const populatedList = ["seo.*"];

    populatedList.push(ctx.query.populate);
    ctx.query.populate = populatedList.join(",");

    const content = await super.find(ctx);
    return content;
  },

  async findOne(ctx) {
    const populatedList = ["seo.*"];

    populatedList.push(ctx.query.populate);
    ctx.query.populate = populatedList.join(",");

    const content = await super.find(ctx);
    return content;
  },
}));
