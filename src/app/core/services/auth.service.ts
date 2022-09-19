import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, of } from "rxjs";
import { Auth } from "../../model/auth";

@Injectable({
  providedIn: 'root',
})

export class AuthService{

  data: Auth | null = null;

  constructor(
    private http: HttpClient,
    private router: Router
    ){}




  login({user, pass }: {user:string, pass: string}) {
    const params = new HttpParams()
      .set('user', user)
      .set('pass', pass);

    this.http.get<Auth>(`http://localhost:3000/login`, { params })
    .pipe(
      catchError(err => of(err))
    )
    .subscribe((res: Auth ) => {
      this.data = res;

      this.router.navigateByUrl('search');
    })

  };


  logout(){
    this.data = null;
    this.router.navigateByUrl('login')
  }

  isLogged(){
    return !!(this.data && this.data.token);
  }
}
