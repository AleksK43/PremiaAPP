import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
private unique_name$ = new BehaviorSubject<string>("");
private role$ = new BehaviorSubject<string>("");
constructor() { }

  public getRoleFromStore(){
    return this.role$.asObservable() 
  }

  public setRoleForStore( role : string ){
    this.role$.next(role); 
  }

  public getFullNameFromStore(){
    return this.unique_name$.asObservable(); 
  } 

  public setFullNameFromStore(fullname : string){
    this.unique_name$.next(fullname); 
  }

}
