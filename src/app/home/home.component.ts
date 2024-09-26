import { Component } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public service: ApiService){
    this.showAllFoods()
    this.showCategories()
  }

  public foodList:any
  public categories:any
  public spiciness: string = "-1"
  public nuts: string = ""
  public vegeterian: string = ""
  public activeNum: number = 0

  filter(){
    if(this.spiciness == "-1") {
      this.spiciness = ""
    }
    console.log(this.spiciness, this.nuts, this.vegeterian);
    this.service.filterProducts(this.vegeterian,this.nuts,this.spiciness).subscribe(data => {
      console.log(data);
      this.foodList = data
      
    })
    
  }

  showAllFoods() {
    this.service.getAllProducts().subscribe(data => {
      console.log(data);
      this.foodList = data
      this.activeNum = 0
    })
  }

  showCategories() {
    this.service.getCategories().subscribe(data => {
      console.log(data);
      this.categories = data
      
    })
  }

  showByCategory(id:any) {
    console.log(id);
    this.service.getFoodByCategory(id).subscribe((data:any) => {
      console.log(data.products);
      this.foodList = data.products
      this.activeNum = id
    })
    
  }

  daamatekalatashi(card: any) {
    console.log(card);
    
    this.service.addtoCartServ({
      "quantity": 1,
      "price": card.price,
      "productId": card.id
    }).subscribe()
  }


}