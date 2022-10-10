'use strict';

/**
 * sweetness service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sweetness.sweetness');
