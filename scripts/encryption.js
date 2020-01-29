/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// file names
const encFile = './.env.enc';
const decFile = './.env';

// algorithm constants
const hashAlgorithm = 'sha256';
const cipherAlgorithm = 'aes256';

function encryptFile(decryptedFile, encryptedFile, password) {
  // normalize file paths
  encryptedFile = path.normalize(encryptedFile);
  decryptedFile = path.normalize(decryptedFile);

  // shrink file
  const fileData = fs.readFileSync(decryptedFile, 'utf8');
  const gzipped = Buffer.from(fileData, 'utf8').toString('base64');

  // encrypt
  const key = crypto.createHash(hashAlgorithm).update(password).digest();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(cipherAlgorithm, key, iv);
  const encrypted = Buffer.concat([iv, cipher.update(gzipped), cipher.final()]).toString('base64');

  // write encrypted.env file
  fs.writeFileSync(encryptedFile, encrypted, 'utf8');

  // return encrypted.env file path
  return encryptedFile;
}

function decryptFile(decryptedFile, encryptedFile, password) {
  // normalize file paths
  decryptedFile = path.normalize(decryptedFile);
  encryptedFile = path.normalize(encryptedFile);

  // get file
  let fileData = Buffer.from(fs.readFileSync(encryptedFile, 'utf8'), 'base64');

  // decryption credentials
  const key = crypto.createHash(hashAlgorithm).update(password).digest();
  const iv = fileData.slice(0, 16);
  fileData = fileData.slice(16);

  // decrypt
  const decipher = crypto.createDecipheriv(cipherAlgorithm, key, iv);
  const gzipped = Buffer.concat([decipher.update(fileData), decipher.final()]).toString();
  const decrypted = Buffer.from(gzipped, 'base64').toString('utf8');

  // write to decrypted file to .env
  fs.writeFileSync(decryptedFile, String(decrypted).trim(), 'utf8');

  // return .env path
  return decryptedFile;
}

function decrypt(password, dir) {
  try {
    password = String(password).trim();

    const encryptedFile = path.resolve(dir, encFile);
    const decryptedFile = path.resolve(dir, decFile);
    
    return decryptFile(decryptedFile, encryptedFile, password);
  } catch (error) {
    return null;
  }
}

function encrypt(password, dir) {
  try {
    password = String(password).trim();
    
    const encryptedFile = path.resolve(dir, encFile);
    const decryptedFile = path.resolve(dir, decFile);

    return encryptFile(decryptedFile, encryptedFile, password);
  } catch (error) {
    return null;
  }
}

/**
 *
 * Sources:
 * [Link] https://medium.com/@brandonstilson/lets-encrypt-files-with-node-85037bea8c0e
 * [Link] https://medium.com/@anned20/encrypting-files-with-nodejs-a54a0736a50a
 *
 */

module.exports = {
  decrypt,
  encrypt,
};
