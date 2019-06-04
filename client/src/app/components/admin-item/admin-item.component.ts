// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admin-item',
//   templateUrl: './admin-item.component.html',
//   styleUrls: ['./admin-item.component.css']
// })
// export class AdminItemComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AdminitemService } from "../../services/adminItem.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ItemModel } from "../../models/item.model";

@Component({
     selector: 'app-admin-item',
     templateUrl: './admin-item.component.html',
     styleUrls: ['./admin-item.component.css']
   })
export class AdminItemComponent implements OnInit {
  // enteredTitle = "";
  // enteredContent = "";

  isLoading = false;
  item: ItemModel;
  private mode = 'create';
  private itemId: string;


  constructor(public adminitemService: AdminitemService, public route: ActivatedRoute) {}

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('itemId')){
        this.mode = 'edit';
        this.itemId = paramMap.get('itemId');
        this.isLoading = true;
        this.adminitemService.getItem(this.itemId)
        .subscribe(itemData =>{
          this.isLoading = false;
          this.item = { _id:itemData._id, name: itemData.name , price: itemData.price,date:itemData.date };
        });
      }else{
        this.mode = 'create';
        this.itemId = null;
      }
    });
  }

  onSaveItem(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading=true;
    if(this.mode === 'create'){
      this.adminitemService.addItem(form.value.name,form.value.price,form.value.date);
    }else{
      this.adminitemService.updateItem(this.itemId,form.value.name,form.value.price,form.value.date);
    }
    form.resetForm();
  }
}
