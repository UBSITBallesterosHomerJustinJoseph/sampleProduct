
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  productDetail = [
  {id:1, name: "Raiden Shogun Costume", brand: "Uwowo", detail: "The Raiden Shogun costume by Uwowo is a high-quality cosplay outfit inspired by the popular character from Genshin Impact. Designed with accuracy and elegance, it features detailed embroidery, layered fabrics, and vibrant colors that capture the essence of the Electro Archon’s iconic look. Uwowo is known for its craftsmanship, making this costume comfortable to wear while staying true to the game design, making it a favorite choice for cosplayers who want an authentic Raiden Shogun experience."},
  {id:2, name: "Hutao Costume", brand: "Uwowo", detail: "The Hu Tao costume by Uwowo faithfully recreates the playful yet elegant design of the 77th Director of the Wangsheng Funeral Parlor. With its dark patterned coat, detailed accessories, and traditional Chinese influences, the costume highlights Hu Tao’s mysterious yet lively personality. Uwowo’s attention to detail ensures both accuracy and comfort, making it an excellent choice for fans of this mischievous Pyro character."},
  {id:3, name: "Yae Miko Costume", brand: "Uwowo", detail: "The Yae Miko costume by Uwowo captures the graceful and refined aura of the Guuji of the Grand Narukami Shrine. Crafted with flowing fabrics, pink hues, and ornate shrine maiden details, the outfit reflects her elegance and authority. Uwowo brings out the beauty of Yae Miko’s design while ensuring quality materials and wearability, perfect for cosplayers seeking a blend of sophistication and authenticity."},
  {id:4, name: "Skirk Costume", brand: "Uwowo", detail: "The Skirk costume by Uwowo embodies the mysterious mentor of Tartaglia, combining elegance with a darker aesthetic. With intricate patterns, layered pieces, and a striking color palette, the design reflects Skirk’s enigmatic personality and connection to the Abyss. Uwowo’s craftsmanship enhances the costume’s dramatic style, making it a standout choice for cosplayers drawn to rare and lesser-seen Genshin characters."},
  {id:5, name: "Mualani Costume", brand: "Uwowo", detail: "The Mualani costume by Uwowo showcases the fresh and lively design of Fontaine’s Hydro character. Inspired by aquatic motifs and Fontaine fashion, the costume features vibrant colors, detailed accessories, and a graceful silhouette that reflects her connection to water. Uwowo ensures accuracy to her in-game appearance while providing comfortable wear for conventions or photoshoots."},
  {id:6, name: "Zhongli Costume", brand: "Uwowo", detail: "The Zhongli costume by Uwowo brings to life the elegance and dignity of the Geo Archon. With detailed layers, golden embroidery, and high-quality fabrics, the design reflects Zhongli’s refined and commanding presence."},
  {id:7, name:"Mavuika Costume", brand: "Uwowo", detail: "The Mavuika costume by Uwowo is a striking cosplay outfit inspired by the Pyro Archon of Natlan. Designed with bold red and gold fabrics, flame-like patterns, and regal accessories, the costume embodies Mavuika’s fiery authority and divine presence. Uwowo’s craftsmanship highlights both elegance and power, making this a must-have for cosplayers who want to capture the essence of the Pyro Archon in all her glory."},
  {id:8, name: "Xiao Costume", brand: "Uwowo", detail: "The Xiao costume by Uwowo highlights the vigilant Yaksha’s design with striking teal colors, elegant accessories, and ornate details. It emphasizes Xiao’s stoic yet powerful aesthetic."},
  {id:9, name: "Albedo Costume", brand: "Uwowo", detail: "The Albedo costume by Uwowo recreates the refined and alchemical look of Mondstadt’s Chief Alchemist. With artistic detailing and sophisticated fabrics, it mirrors his calm and intellectual style."},
  {id:10, name: "Diluc Costume", brand: "Uwowo", detail: "The Diluc costume by Uwowo reflects the noble and fiery aesthetic of Mondstadt’s Darknight Hero. With a flowing red coat, intricate designs, and sharp tailoring, it captures Diluc’s strong personality."},
  {id:11, name: "Kaeya Costume", brand: "Uwowo", detail: "The Kaeya costume by Uwowo showcases the Cavalry Captain’s cool and stylish look, featuring a long coat, fur collar, and striking accessories that capture his charm and mystery."},
  {id:12, name: "Kazuha Costume", brand: "Uwowo", detail: "The Kazuha costume by Uwowo mirrors the wandering samurai’s poetic style, with flowing fabrics, Japanese-inspired details, and elegant accessories reflecting his calm and free-spirited personality."},
  {id:13, name: "Ayaka Costume", brand: "Uwowo", detail: "The Ayaka costume by Uwowo features traditional Inazuman attire with noble elegance. With pastel tones, intricate patterns, and kimono-style layers, it brings her refined grace to life."},
  {id:14, name: "Eula Costume", brand: "Uwowo", detail: "The Eula costume by Uwowo reflects the bold and elegant design of Mondstadt’s Spindrift Knight. With icy tones, sleek lines, and detailed craftsmanship, it mirrors her commanding presence."},
  {id:15, name: "Shenhe Costume", brand: "Uwowo", detail: "The Shenhe costume by Uwowo features a mystical and graceful design with flowing robes, icy blue tones, and ethereal accessories that represent her Cryo powers and calm demeanor."},
  {id:16, name: "Ganyu Costume", brand: "Uwowo", detail: "The Ganyu costume by Uwowo blends elegance and fantasy, featuring soft blue colors, detailed accessories, and flowing fabrics that reflect her half-Qilin heritage and gentle nature."},
  {id:17, name: "Keqing Costume", brand: "Uwowo", detail: "The Keqing costume by Uwowo showcases her sleek and elegant design, with purple tones, sharp tailoring, and refined details that highlight her determined personality."},
  {id:18, name: "Mona Costume", brand: "Uwowo", detail: "The Mona costume by Uwowo embodies her starry aesthetic, with celestial details, deep blue tones, and mystical accessories that reflect her Hydro astrology style."},
  {id:19, name: "Barbara Costume", brand: "Uwowo", detail: "The Barbara costume by Uwowo highlights her idol aesthetic, with bright tones, detailed accessories, and cheerful styling that matches her optimistic personality."},
  {id:20, name: "Noelle Costume", brand: "Uwowo", detail: "The Noelle costume by Uwowo emphasizes her knightly design with silver armor details, elegant fabrics, and warm tones that represent her loyal and hardworking character."},
  {id:21, name: "Sucrose Costume", brand: "Uwowo", detail: "The Sucrose costume by Uwowo reflects her alchemical aesthetic with soft tones, whimsical accessories, and a charming design that represents her curious and shy personality."},
  {id:22, name: "Yanfei Costume", brand: "Uwowo", detail: "The Yanfei costume by Uwowo features bright red tones, flowing fabrics, and elegant accessories that represent her role as a legal adviser with a lively personality."},
  {id:23, name: "Rosaria Costume", brand: "Uwowo", detail: "The Rosaria costume by Uwowo captures her dark and mysterious aesthetic with deep tones, gothic accessories, and elegant details that reflect her bold personality."},
  {id:24, name: "Beidou Costume", brand: "Uwowo", detail: "The Beidou costume by Uwowo highlights her bold and commanding design with pirate-inspired details, vibrant fabrics, and striking accessories that represent her strong character."},
  {id:25, name: "Ningguang Costume", brand: "Uwowo", detail: "The Ningguang costume by Uwowo showcases her luxurious design, with ornate fabrics, elegant accessories, and golden tones that reflect her wealth and intelligence."},
  {id:26, name: "Qiqi Costume", brand: "Uwowo", detail: "The Qiqi costume by Uwowo features soft tones, detailed accessories, and elegant designs that reflect her adorable yet mystical zombie aesthetic."},
  {id:27, name: "Fischl Costume", brand: "Uwowo", detail: "The Fischl costume by Uwowo highlights her gothic and fantasy design, with purple tones, detailed accessories, and stylish elements that reflect her eccentric personality."},
  {id:28, name: "Kokomi Costume", brand: "Uwowo", detail: "The Kokomi costume by Uwowo captures the elegance of Watatsumi Island’s Divine Priestess, featuring oceanic motifs, soft tones, and regal accessories that reflect her leadership role."},
  {id:29, name: "Itto Costume", brand: "Uwowo", detail: "The Itto costume by Uwowo emphasizes his bold and playful design, with vibrant colors, striking accessories, and stylish layers that reflect his lively Oni personality."},
  {id:30, name: "Tartaglia Costume", brand: "Uwowo", detail: "The Tartaglia costume by Uwowo reflects the stylish design of the Fatui Harbinger, with elegant layers, detailed accessories, and refined fabrics that match his dual nature as warrior and family man."}
  ];

  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productDetail.find(p => p.id === id);
  }
}
