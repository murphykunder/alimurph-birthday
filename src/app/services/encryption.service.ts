import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

const secretKey = 'nL+ZX1QMPe03UNyRMmvkxs0Qgaj3ESk84xZ1CYRQphE=';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  encryptData(data:string){
    let b64EncryptedData = CryptoJS.AES.encrypt(data,secretKey).toString();
    // the encrypted text could have special chars like /=+, since we need to pass CardID in url we use encodeURIComponent to make it URL friendly
    return encodeURIComponent(b64EncryptedData);
  }

  decryptData(data:string){
    let decodedText = decodeURIComponent(data);
    const decryptData = CryptoJS.AES.decrypt(decodedText, secretKey);
    return decryptData.toString(CryptoJS.enc.Utf8);
  }
}
