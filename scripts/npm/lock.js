/* eslint-disable import/no-extraneous-dependencies,no-console */
const { encrypt } = require('../encryption');

let env;

if (!process.argv[2] || !process.argv[3] || !process.argv[4]) {
  console.error('Please input the password & env file directory...');
} else {
  env = encrypt(process.argv[4], process.argv[2], process.argv[3]);
}

if (env) {
  console.log('The environment variables were locked successfully!');
} else {
  console.log('Something went wrong during the encryption.');
}
