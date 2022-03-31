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

  constructor(public auth: Auth, public guard: AuthGuard, public snack: SnackbarService, private router: Router) { }
  googleSignIn(){
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;  
        const user = result.user;
        const database = getDatabase();
              set(ref(database, 'users/' + this.auth.currentUser?.uid), {
                fullname: user.displayName,
                email: user.email,
                photo: user.photoURL,
                rank: 'member',
                country: '',
                city: '',
                phone: ''
              })               
         
        this.snack.openSnackBar(`${user.email} Signed Up`,'Horray!');
        this.guard.isLogged = true;

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        this.snack.openSnackBar(`${email} Couldnt Sign Up :(`,'Oops!');
        this.guard.isLogged = false;
        console.log(errorCode+' / '+errorMessage);
      });
  }
  googleLogIn(){
    const provider = new GoogleAuthProvider();
    const database = getDatabase();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;  
        const user = result.user;
        this.snack.openSnackBar(`${user.email} Logged In`,'Horray!');
        this.guard.isLogged = true;
        const refr =  ref(database, 'users/' + this.auth.currentUser?.uid + '/rank');
        onValue(refr, (snapshot) => {
          const data = snapshot.val();
          if(data == 'admin') this.guard.isAdmin = true;
          else this.guard.isAdmin = false;
        });

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        this.snack.openSnackBar(`${email} Couldnt Log In :(`,'Oops!');
        this.guard.isLogged = false;
        console.log(errorCode+' / '+errorMessage);
      });
  }
  signout(){
    signOut(this.auth).then(() => {
      this.snack.openSnackBar(`${this.auth.currentUser?.email} Logged Out!`,'Horray!');
      this.guard.isLogged = false;
      this.guard.isAdmin = false;
      this.router.navigate(['']);
    }).catch((error) => {
      this.snack.openSnackBar(`${error.message}`,'Oops!');
    });
  }

  modifyUser(value:any){
    const database = getDatabase();
    set(ref(database, 'users/' + this.auth.currentUser?.uid), {
      fullname: value.fullname,
      email: this.loadUseremail(),
      photo: this.loadUserphoto(),
      rank: 'member',
      country: value.country,
      city: value.city,
      phone: value.phone
    })
    this.snack.openSnackBar('Information Saved','Horray!');
  }

  deleteUser(){
    const db = getDatabase();
    remove(ref(db, 'users/' + this.auth.currentUser?.uid));
    this.guard.isLogged = false;
    this.router.navigate(['']);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


  UserCheck(){
    const db = getDatabase();
    const Ref = ref(db, 'users/' + this.auth.currentUser?.uid + '/fullname');
    onValue(Ref, (snapshot) => {
      const data = snapshot.val();
      if (data == '') this.guard.newUser = true;
      else this.guard.newUser = false;
    });
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










/*   ReadUserFirstName(){
    const db = getDatabase();
    const starCountRef = ref(db, 'users/' + this.auth.currentUser?.uid + '/firstname');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
    });
  } */



      /*   emailSignIn(value:any){

          const auth = getAuth();
          createUserWithEmailAndPassword(auth, value.email, value.password)
            .then((userCredential) => {
              console.log("Signed in");
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
            });
        }
        
        emaillogIn(value:any){
          signInWithEmailAndPassword(this.auth, value.emailLogin, value.passwordLogin)
          .then((userCredential) => {
            this.snack.openSnackBar(`${value.emailLogin} LoggedIn`,'Horaay!'); 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            this.snack.openSnackBar(`Couldn't Log In`,'Oops!'); 
            const errorMessage = error.message;
          });
        } */



}
