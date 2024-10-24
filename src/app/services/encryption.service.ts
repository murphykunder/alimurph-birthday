import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { BirthdayRequestResponse } from '../model/birthday-request-response.model';

const secretKey = 'nL+ZX1QMPe03UNyRMmvkxs0Qgaj3ESk84xZ1CYRQphE=';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  encryptData(request: BirthdayRequestResponse){
    let b64EncryptedData = CryptoJS.AES.encrypt(JSON.stringify(request),secretKey).toString();
    return encodeURIComponent(b64EncryptedData);
  }

  decryptData(data:string): BirthdayRequestResponse | undefined{
    let decodedText = decodeURIComponent(data);
    const decryptDataArray = CryptoJS.AES.decrypt(decodedText, secretKey);
    const decryptData = decryptDataArray.toString(CryptoJS.enc.Utf8);
    if(decryptData){
      return JSON.parse(decryptData);
    }
    else {
      return undefined;
    }
  }
}
