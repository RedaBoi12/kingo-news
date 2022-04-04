import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { SnackbarService } from './snackbar.service';
import { Injectable } from '@angular/core';
import {Auth, GoogleAuthProvider, signInWithPopup, signOut} from '@angular/fire/auth'
import { ref, set, getDatabase, onValue, remove} from 'firebase/database';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth, public guard: AuthGuard, public snack: SnackbarService, private router: Router, public admin: AdminGuard) { }






/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// SIGN IN USER ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
  googleSignIn(){
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(this.auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;  
        const user = result.user;
        const database = getDatabase();
              set(ref(database, 'users/' + this.auth.currentUser?.uid), {
                fullname: user.displayName,
                email: user.email,
                photo: user.photoURL,
                rank: 'Member',
                country: 'null',
                city: 'null',
                phone: 'null',
                SignedIn: Date()
              })               
         
        this.snack.openSnackBar(`${user.email} Signed Up`,'Horray!');
        this.guard.isLogged = true;

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        this.snack.openSnackBar(`${email} Couldnt Sign Up :(`,'Oops!');
        this.guard.isLogged = false;
        console.log(errorCode+' / '+errorMessage);
      });
  }






  

/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// LOG IN USER ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
  googleLogIn(){
    const provider = new GoogleAuthProvider();
    const database = getDatabase();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(this.auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;  
        const user = result.user;
        this.snack.openSnackBar(`${user.email} Logged In`,'Horray!');
        this.guard.isLogged = true;
        const refr =  ref(database, 'users/' + this.auth.currentUser?.uid + '/rank');
        onValue(refr, (snapshot) => {
          const data = snapshot.val();
          if(data == 'admin') this.admin.Admin = true;
          else this.admin.Admin = false;
        });

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        this.snack.openSnackBar(`${email} Couldnt Log In :(`,'Oops!');
        this.guard.isLogged = false;
        console.log(errorCode+' / '+errorMessage);
      });
  }







/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// SIGN OUT USER //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
  signout(){
    this.snack.openSnackBar(`${this.auth.currentUser?.email} Logged Out!`,'Horray!');
    signOut(this.auth).then(() => {
      this.guard.isLogged = false;
      this.admin.Admin = false;
      this.router.navigate(['']);
    }).catch((error) => {
      this.snack.openSnackBar(`${error.message}`,'Oops!');
    });
  }










/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// MODIFY USER INFORMATION ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
  modifyUser(value:any){
    const database = getDatabase();
    set(ref(database, 'users/' + this.auth.currentUser?.uid), {
      fullname: value.fullname,
      email: this.loadUseremail(),
      photo: this.loadUserphoto(),
      rank: this.loadUserrank(),
      country: value.country,
      city: value.city,
      phone: value.phone,
      SignedIn: this.loadUserSignedIn()
    })
    this.snack.openSnackBar('Information Saved','Horray!');
    this.signout();
    this.snack.openSnackBar('Account Refreshed, Please Login','Horray!');
  }







  



/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// DELETE USER INFORMATION ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
  deleteUser(){
    const db = getDatabase();
    remove(ref(db, 'users/' + this.auth.currentUser?.uid));
    this.guard.isLogged = false;
    this.router.navigate(['']);
  }





  

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// LOADING USER INFORMATION //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

  loadUserfullname():string{
    let fullname= '';
    const db = getDatabase();
    const fullnameRef = ref(db, 'users/' + this.auth.currentUser?.uid + '/fullname');
    onValue(fullnameRef, (snapshot) => {
      fullname = snapshot.val();
    });
    return fullname;
  }
  loadUserphone():string{
    let phone= '';
    const db = getDatabase();
    const numberRef = ref(db, 'users/' + this.auth.currentUser?.uid + '/phone');
    onValue(numberRef, (snapshot) => {
      phone = snapshot.val();
    });
    return phone;
  }
  loadUseremail():string{
    let email= '';
    const db = getDatabase();
    const emailRef = ref(db, 'users/' + this.auth.currentUser?.uid + '/email');
    onValue(emailRef, (snapshot) => {
      email = snapshot.val();
    });
    return email;
  }
  loadUserphoto():string{
    let photo= '';
    const db = getDatabase();
    const photoRef = ref(db, 'users/' + this.auth.currentUser?.uid + '/photo');
    onValue(photoRef, (snapshot) => {
      photo = snapshot.val();
    });
    return photo;
  }
  loadUsercountry():string{
    let country= '';
    const db = getDatabase();
    const countryRef = ref(db, 'users/' + this.auth.currentUser?.uid + '/country');
    onValue(countryRef, (snapshot) => {
      country = snapshot.val();
    });
    return country;
  }

  loadUsercity():string{
    let city= '';
    const db = getDatabase();
    const cityRef = ref(db, 'users/' + this.auth.currentUser?.uid + '/city');
    onValue(cityRef, (snapshot) => {
      city = snapshot.val();
    });
    return city;
  }

  loadUserSignedIn():string{
    let SignedIn= '';
    const db = getDatabase();
    const SignedInRef = ref(db, 'users/' + this.auth.currentUser?.uid + '/SignedIn');
    onValue(SignedInRef, (snapshot) => {
      SignedIn = snapshot.val();
    });
    return SignedIn;
  }

  loadUserrank():string{
    let rank= '';
    const db = getDatabase();
    const SignedInRef = ref(db, 'users/' + this.auth.currentUser?.uid + '/rank');
    onValue(SignedInRef, (snapshot) => {
      rank = snapshot.val();
    });
    return rank;
  }


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

}
