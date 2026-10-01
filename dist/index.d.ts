export type LicenseInfo = {
    modifyProtective?: boolean;
    networkProtective?: boolean;
    permissive?: boolean;
    protective?: boolean;
    publicDomain?: boolean;
    useProtective?: boolean;
    weaklyProtective?: boolean;
};
export type LicenseTypes = Record<string, LicenseInfo>;
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
declare function getLicenseTypes(): LicenseTypes;
export type LicenseTypeInfo = {
    /**
     * The color or color codes
     */
    color: string[];
    /**
     * The human readable text
     */
    text: string;
};
export type LicenseTypeInfoMap = Record<string, LicenseTypeInfo>;
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
declare function getLicenseTypeInfo(): LicenseTypeInfoMap;
export { getLicenseTypes, getLicenseTypeInfo };
//# sourceMappingURL=index.d.ts.map