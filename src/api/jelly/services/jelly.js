'use strict';

/**
 * jelly service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jelly.jelly');
