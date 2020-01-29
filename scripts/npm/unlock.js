/* eslint-disable import/no-extraneous-dependencies,no-console */
const { decrypt } = require('../encryption');

let env;

if (!process.argv[2] || !process.argv[3]) {
  console.error('Please input the password & env file directory...');
} else {
  env = decrypt(process.argv[3], process.argv[2]);
}

if (env) {
  console.log('Environment variables were unlocked successfully!');
} else {
  console.log('Something went wrong during the decryption.');
}
