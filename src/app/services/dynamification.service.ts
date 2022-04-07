import { Injectable } from '@angular/core';
import { getDatabase, onValue, ref, set } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class DynamificationService {

  constructor() { }
  listFAQ:any = [];
  listWISG:any = [];
  listABOUT:any = [];
  listTESTIMONIALS:any = [];
  listHISTORY:any = [];
  listTEAM:any = [];
  listCLIENTS:any = [];

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  addFAQList(q:string, a:string){
    const db = getDatabase();
    set(ref(db, 'dynamification/components/FAQ/' + Math.random() * 9999999999), {
      question: q,
      answer: a
    });
  }

  readFAQList(){
    const db = getDatabase();
    const Ref = ref(db, 'dynamification/components/FAQ/');
    onValue(Ref, (snapshot) => {
    const data = snapshot.val();
    this.listFAQ = Object.entries(data);
  });
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  addWISGList(title:string, text:string, icon:string, iconcolor:string){
    const db = getDatabase();
    set(ref(db, 'dynamification/components/WISG/' + Math.random() * 9999999999), {
      title: title,
      text: text,
      icon: icon,
      iconcolor: iconcolor
    });
  }

  readWISGList(){
    const db = getDatabase();
    const Ref = ref(db, 'dynamification/components/WISG/');
    onValue(Ref, (snapshot) => {
    const data = snapshot.val();
    this.listWISG = Object.entries(data);
    console.log(this.listWISG);
  });
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  addAboutList(title:string, text:string){
    const db = getDatabase();
    set(ref(db, 'dynamification/components/ABOUT/' + Math.random() * 9999999999), {
      title: title,
      text: text
    });
  }

  readAboutList(){
    const db = getDatabase();
    const Ref = ref(db, 'dynamification/components/ABOUT/');
    onValue(Ref, (snapshot) => {
    const data = snapshot.val();
    this.listABOUT = Object.entries(data);
  });
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  addTestimonialsList(name: string, job: string, text: string, img: string, stars:number){
    const db = getDatabase();
    set(ref(db, 'dynamification/components/TESTIMONIALS/' + Math.random() * 9999999999), {
      name: name,
      job: job,
      text: text,
      picture: img,
      stars: stars
    });
  }

  readTestimonialsList(){
    const db = getDatabase();
    const Ref = ref(db, 'dynamification/components/TESTIMONIALS/');
    onValue(Ref, (snapshot) => {
    const data = snapshot.val();
    this.listTESTIMONIALS = Object.entries(data);
  });
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  addHistoryList(title:string, text: string, date:string, picture:string){
    const db = getDatabase();
    set(ref(db, 'dynamification/components/HISTORY/' + Math.random() * 9999999999), {
      title: title,
      text: text,
      date: date,
      picture: picture
    });
  }

  readHistoryList(){
    const db = getDatabase();
    const Ref = ref(db, 'dynamification/components/HISTORY/');
    onValue(Ref, (snapshot) => {
    const data = snapshot.val();
    this.listHISTORY = Object.entries(data);
  });
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  addTeamList(name:string, job:string, picture: string, facebook:string, twitter:string){
    const db = getDatabase();
    set(ref(db, 'dynamification/components/TEAM/' + Math.random() * 9999999999), {
      name: name,
      job: job,
      picture: picture,
      facebook: facebook,
      twitter: twitter
    });
  }

  readTeamList(){
    const db = getDatabase();
    const Ref = ref(db, 'dynamification/components/TEAM/');
    onValue(Ref, (snapshot) => {
    const data = snapshot.val();
    this.listTEAM = Object.entries(data);
  });
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  addClientList(logo: string, alt: string){
    const db = getDatabase();
    set(ref(db, 'dynamification/components/CLIENTS/' + Math.random() * 9999999999), {
      logo: logo,
      alt: alt
    });
  }

  readClientList(){
    const db = getDatabase();
    const Ref = ref(db, 'dynamification/components/CLIENTS/');
    onValue(Ref, (snapshot) => {
    const data = snapshot.val();
    this.listCLIENTS = Object.entries(data);
  });
  }
}
