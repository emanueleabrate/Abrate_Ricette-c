import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private REST_API_SERVER = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) {}

   public sendGetRequest(endpoint: string){
    return this.httpClient.get(this.REST_API_SERVER+endpoint);
   }
   public sendPostRequest(endpoint: string, body: any){
    return this.httpClient.post(this.REST_API_SERVER+endpoint,body);
   }
   public sendPutRequest(endpoint: string, body: any){
    return this.httpClient.put(this.REST_API_SERVER+endpoint,body);
   }
   public sendDeleteRequest(endpoint: string){
    return this.httpClient.delete(this.REST_API_SERVER+endpoint);
   }
}
