import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private myapi:ApiService) { }

bookname=""

  readValues=()=>{
    let data={
      "bookname":this.bookname
    }
    console.log(data)
    this.myapi.searchBook(data).subscribe(
      (response)=>{
this.data=response
      }
    )
  }

  updatebook=()=>{
    
    this.myapi.editbook(this.data[0]).subscribe(
      (response)=>{
        alert("successfully updated")
      }
    )
  }
  data:any=[]
    

  ngOnInit(): void {
  }

}
