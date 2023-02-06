import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  myData;
  total = 0;
  counter = 1235135;

  constructor(
    private http: HttpClient
  ) {
    this.getData()
  }

  // getData() {
  //   const url = 'https://jsonplaceholder.typicode.com/users'
  //   return this.http.get(url)
  //     .subscribe(
  //       (data: {user, id, title, body}[]) => {
  //         this.myData = data.slice(0,5);
  //       }
  //     );
  // }

  getData() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    return this.http.get(url).subscribe({
      next:(data:any)=>{
        this.myData= data.slice(0,5)
        console.log("next block", this.myData)
      }, 
      error: (error: any)=>{
        console.log("error block", error.message)
      },
      complete:()=>{
        console.log("complete block", this.myData)
      }
    })
    
  }


  postData() {
    this.counter++;
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const myPost = {
      user: 'me',
      id: this.counter,
      title: 'post number' + this.counter,
      body: ''
    }
    return this.http.post(url, myPost)
      .subscribe(
        (resp) => {
          console.log(resp);
          this.getData();
        }
      );
  }


}

