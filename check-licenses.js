import spdxLicenseList from 'spdx-license-list';

import existingJSON from './index.json' with {type: 'json'};

const spdxLicenses = Object.keys(spdxLicenseList);

const existingLicenses = Object.keys(existingJSON);

let invalidCount = 0;
existingLicenses.forEach((existingLicense) => {
  if (!spdxLicenses.includes(existingLicense)) {
    console.log('Invalid license', existingLicense);
    invalidCount++;
  }
});

let missingCount = 0;
Object.entries(spdxLicenseList).forEach(([spdxLicense, {
  name, url // , osiApproved
}]) => {
  if (!existingLicenses.includes(spdxLicense)) {
    console.log('Missing license', spdxLicense, name, url);
    missingCount++;
  }
});

if (invalidCount) {
  console.log('Invalid count', invalidCount)
};
if (missingCount) {
  console.log('Missing count', missingCount);
}

// console.log('spdxLicenseList', spdxLicenseList);
