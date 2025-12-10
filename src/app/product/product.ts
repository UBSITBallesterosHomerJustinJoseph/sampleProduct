import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Product {


  productList = [
  {id: 1, name: "Raiden Costume", price: "₱3254"},
  {id: 2, name: "Hutao Costume", price: "₱1780"},
  {id: 3, name: "Yae Miko Costume", price: "₱2080"},
  {id: 4, name: "Skirk Costume", price: "₱3109"},
  {id: 5, name: "Mualani Costume", price: "₱2678"},
  {id: 6, name: "Zhongli Costume", price: "₱2890"}, 
  {id: 7, name: "Mavuika Costume", price: "₱2400"},
  {id: 8, name: "Xiao Costume", price: "₱2500"},
  {id: 9, name: "Albedo Costume", price: "₱2600"},
  {id: 10, name: "Diluc Costume", price: "₱2780"},
  {id: 11, name: "Kaeya Costume", price: "₱2450"},
  {id: 12, name: "Kazuha Costume", price: "₱2900"},
  {id: 13, name: "Ayaka Costume", price: "₱3150"},
  {id: 14, name: "Eula Costume", price: "₱2990"},
  {id: 15, name: "Shenhe Costume", price: "₱3400"},
  {id: 16, name: "Ganyu Costume", price: "₱2880"},
  {id: 17, name: "Keqing Costume", price: "₱2750"},
  {id: 18, name: "Mona Costume", price: "₱2680"},
  {id: 19, name: "Barbara Costume", price: "₱2200"},
  {id: 20, name: "Noelle Costume", price: "₱2300"},
  {id: 21, name: "Sucrose Costume", price: "₱2150"},
  {id: 22, name: "Yanfei Costume", price: "₱2250"},
  {id: 23, name: "Rosaria Costume", price: "₱2700"},
  {id: 24, name: "Beidou Costume", price: "₱2850"},
  {id: 25, name: "Ningguang Costume", price: "₱2950"},
  {id: 26, name: "Qiqi Costume", price: "₱2350"},
  {id: 27, name: "Fischl Costume", price: "₱2480"},
  {id: 28, name: "Kokomi Costume", price: "₱3100"},
  {id: 29, name: "Itto Costume", price: "₱2999"},
  {id: 30, name: "Tartaglia Costume", price: "₱3200"}
  
  ]


}