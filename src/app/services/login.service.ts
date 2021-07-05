import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username, password, deviceId) {

    var data = {
      'email': username,
      'password': password,
      'deviceid':deviceId
    }
    return this.http.post(`${environment.apiUrl}/api/applogin?`, data)
  }

  getEntityData(token, userid) {
    var data = {
      'token': token,
      'userId': userid
    }
    return this.http.post(`${environment.apiUrl}/api/entityPopup`, data)
  }

}
