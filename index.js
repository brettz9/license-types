import {readFile} from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @typedef {object} LicenseInfo
 * @property {boolean} modifyProtective
 * @property {boolean} networkProtective
 * @property {boolean} permissive
 * @property {boolean} protective
 * @property {boolean} publicDomain
 * @property {boolean} useProtective
 * @property {boolean} weaklyProtective
 */
/**
 * License SPDX identifiers mapped to info
 * @typedef {Object<string, LicenseInfo>}
 */

async function getLicenseTypes () {
  return JSON.parse(await readFile(join(__dirname, 'index.json')));
}
export default getLicenseTypes;
