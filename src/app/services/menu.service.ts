import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpClientModule, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  DJANGO_API_SERVER: string ="http://103.79.100.31:9001/jawata_dev/public/upload.php";
  // "https://6f8c2dcef3f5.ngrok.io";
  constructor(private http: HttpClient) { }

  public uploadFormData(formData) {
    // return this.http.post<any>(`${this.DJANGO_API_SERVER}/fileupload/upload.php`, formData);
    console.log('uploadFormData method called...')
    return this.http.post<any>(`${environment.apiUrl}/upload.php`, formData);
  }
  public uploadMultipleFormData(formData) {
    // return this.http.post<any>(`${this.DJANGO_API_SERVER}/fileupload/upload.php`, formData);
    console.log('uploadFormData method called...')
    return this.http.post<any>(`${environment.apiUrl}/uploadmultiple.php`, formData);
  }


  

  /* Entity Name API called Here*/
  getEntityData(token, userid) {
    var data = {
      'token': token,
      'userId': userid
    }
    return this.http.post(`${environment.apiUrl}/api/entityPopup`, data)
  }


  /**Class list API called here */
  getClassList(userId, entityId) {
    var data = {
      'userid': userId,
      'entityid': entityId
    }
    return this.http.post(`${environment.apiUrl}/api/loadClass`, data)
  }

  /* Subject Name API called Here*/
  getSubjectName(entityId, entityName, userId, userType, class_id) {

    var data = {
      'entityId': entityId,
      'entityName': entityName,
      'userId': userId,
      'userType': userType,
      'class_id': class_id
    }
    return this.http.post(`${environment.apiUrl}/api/subject`, data)
  }


  // http://103.79.100.31:9001/api/file_operation


  downloadedFile(description, ip_address, file_name, datetime, subjectId, userId, usertype) {

    var data = {
      'description': description,
      'ip_address': ip_address,
      'file_name': file_name,
      'datetime': datetime,
      'action_id': subjectId,
      'user_id': userId,
      'user_name': 'p',
      'user_type': 'Actor'
    }
    return this.http.post(`${environment.apiUrl}/api/file_operation`, data)
  }


  /* Feedback API Called Here */
  getFeedback(locale, userId, entityId, userType) {
    var data = {
      'locale': "en",
      'userId': userId,
      'entityId': 33240,
      'userType': userType
    }
    return this.http.post(`${environment.apiUrl}/api/feedback`, data);
  }

  insertFeedback(locale, feedback_txt, entityId, userid, userType) {
    var data = {
      'locale': locale,
      'entityId': entityId,
      'userid': userid,
      'feedback_txt': feedback_txt,
      'userType': userType
    }
    return this.http.post(`${environment.apiUrl}/api/insertFeedback`, data)
  }

  /* Audit trail API Called Here */
  getAuditTrail(userType, userId) {
    var data = {
      "userType": userType,
      "userId": userId
    }
    return this.http.post(`${environment.apiUrl}/api/audit-trails`, data)
  }

  /*Profile API Called Here */
  getProfile(userid) {
    return this.http.get(`${environment.apiUrl}/api/myProfile/${userid}`)
  }

  /* Notification API Called Here  */

  getNotification(entityId, userid) {
    var data = {
      'entityId': entityId,
      'userId': userid,
    }
    return this.http.post(`${environment.apiUrl}/api/notification`, data)
  }

  /** Third partry API Called Here */
  getThirdParty(entityId, userId) {
    var data = {
      'entityId': entityId,
      'userId': userId,
    }
    return this.http.post(`${environment.apiUrl}/api/third-party`, data)
  }

  /** SSO  API Called Here */
  ssoInsert(SSOVar, descriptionVar, URLVar, userIdvar, passwordVar) {

    var data = {
      'userId': localStorage.getItem('userId'),
      'entityId': localStorage.getItem('entityId'),
      'userType': localStorage.getItem('userType'),
      'txtsso_name': SSOVar,
      'txtsso_description': descriptionVar,
      'txtsso_url': URLVar,
      'txtuser_id': userIdvar,
      'txtpassword': passwordVar
    }
    return this.http.post(`${environment.apiUrl}/api/ssoInsert`, data)
  }

  getSSO(userId, entityId, userType) {
    var data = {
      'userId': userId,
      'entityId': entityId,
      'userType': userType,
    }
    return this.http.post(`${environment.apiUrl}/api/ssoListing`, data)
  }

  deleteSSO(ssoId, userType, userId) {
    var data = {
      'ssoId': ssoId,
      'userType': userType,
      'userId': userId
    }
    return this.http.post(`${environment.apiUrl}/api/ssoDelete`, data)
  }

  editSSO(ssoId) {
    var data = {
      'userId': ssoId
    }
    return this.http.post(`${environment.apiUrl}/api/ssoEdit`, data);
  }

  modifySSO(ssoId, SSOVar, descriptionVar, URLVar, userIdvar, passwordVar) {

    var data = {
      'userId': ssoId,
      'txtsso_name': SSOVar,
      'txtsso_description': descriptionVar,
      'txtsso_url': URLVar,
      'txtuser_id': userIdvar,
      'txtpassword': passwordVar
    }
    return this.http.post(`${environment.apiUrl}/api/ssoUpdate`, data)
  }

  /**Forgot Password API Called Here */

  forgotpasword(emailID, birthDate, locale) {
    console.log("emailID is:-", emailID);
    console.log("birthDate is:-", birthDate);
    console.log("locale is 111==", locale);

    var data = {

      'email': emailID,
      'dob': birthDate,
      'locale': locale

    }

    return this.http.post(`${environment.apiUrl}/api/forgot_password`, data)
  }

  getDashboardData(userId) {

    var data = {
      'userId': userId
    }
    return this.http.post(`${environment.apiUrl}/api/actor_dashboard`, data)
  }


  /*Test session API's Called Here */

  getTestSessionData(userId, entityId) {

    var data = {
      "user_id":userId,
      // "user_id": 1722,
      "entity_id":entityId
    }

    return this.http.post(`${environment.apiUrl}/api/actor_test_listing`, data)
  }

  getData(id, status) {

    var data = {
      "test_session_id": id,
      "operation": status
    }

    return this.http.post(`${environment.apiUrl}/api/list_test_session_files/open`, data)
  }

  getGrade(testSessionId, actorId) {
    var data = {
      // "testSessionId": 1,
      // "actorId": 1722,
      "testSessionId": testSessionId,
      "actorId": actorId
    }

    return this.http.post(`${environment.apiUrl}/api/list_graded_files`, data)

  }

}