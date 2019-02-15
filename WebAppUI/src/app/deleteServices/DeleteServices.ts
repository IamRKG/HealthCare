import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {BASE_URL} from "../../config/config";
import {endpoint} from "../constant/endpoint";

@Injectable({
  providedIn: 'root'
})
export class DeleteServices{
  constructor(private http:HttpClient,@Inject(BASE_URL) private baseUrl){}

  deletePatient(patient){
    return this.http.delete(`${this.baseUrl}${endpoint.patients}/${patient._id}`)
  }
}
