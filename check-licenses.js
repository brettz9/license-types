import {readFile} from 'fs/promises';

import spdxLicenseList from 'spdx-license-list';

const existingJSON = JSON.parse(await readFile('./index.json'));

const spdxLicenses = Object.keys(spdxLicenseList);

const existingLicenses = Object.keys(existingJSON);

existingLicenses.forEach((existingLicense) => {
  if (!spdxLicenses.includes(existingLicense)) {
    console.log('Invalid license', existingLicense);
  }
});

Object.entries(spdxLicenseList).forEach(([spdxLicense, {
  name, url // , osiApproved
}]) => {
  if (!existingLicenses.includes(spdxLicense)) {
    console.log('Missing license', spdxLicense, name, url);
  }
});

// console.log('spdxLicenseList', spdxLicenseList);
