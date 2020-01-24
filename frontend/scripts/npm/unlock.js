/* eslint-disable import/no-extraneous-dependencies,no-console */
const { decrypt } = require('../encryption');

let env;

if (!process.argv[2]) {
  console.error('Please input the password...');
} else {
  env = decrypt(process.argv[2]);
}

if (env) {
  console.log('Environment variables were unlocked successfully!');
} else {
  console.log('Something went wrong during the decryption.');
}
