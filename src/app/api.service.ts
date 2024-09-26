import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  getAllProducts() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  getCategories() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }

  getFoodByCategory(foodID:any) {
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${foodID}`)
  }

  addtoCartServ(obieqti: any) {
    return this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", obieqti)
  }

  getCartList() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }

  deletefromCart(id: any) {
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }

  filterProducts(veg: any, nuts: any, spic:any) {
    return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${veg}&nuts=${nuts}&spiciness=${spic}`)
  }

  uptadeCart(body: any) {
     return this.http.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", body)
  }

}

