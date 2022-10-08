'use strict';

/**
 * top-tea service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-tea.top-tea');
