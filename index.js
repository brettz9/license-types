import licenseTypes from './index.json' with {type: 'json'};
import licenseTypeInfo from './types.json' with {type: 'json'};

/**
 * @typedef {object} LicenseInfo
 * @property {boolean} [modifyProtective]
 * @property {boolean} [networkProtective]
 * @property {boolean} [permissive]
 * @property {boolean} [protective]
 * @property {boolean} [publicDomain]
 * @property {boolean} [useProtective]
 * @property {boolean} [weaklyProtective]
 */
/**
 * License SPDX identifiers mapped to info
 * @typedef {Record<string, LicenseInfo>} LicenseTypes
 */

/**
 * @returns {LicenseTypes}
 */
function getLicenseTypes () {
  return licenseTypes;
}

/**
 * @typedef {object} LicenseTypeInfo
 * @property {string[]} color The color or color codes
 * @property {string} text The human readable text
 */

/**
 * @typedef {Record<string, LicenseTypeInfo>} LicenseTypeInfoMap
 */

/**
 * @returns {LicenseTypeInfoMap}
 */
function getLicenseTypeInfo () {
  return licenseTypeInfo;
}

export {getLicenseTypes, getLicenseTypeInfo};
