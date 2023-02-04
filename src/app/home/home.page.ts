import { Component, OnInit } from '@angular/core';
import  { ApiService} from 'src/app/api.service'
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products : any=[];
  is_product : boolean =false;

  constructor(
    private apiService : ApiService,
    private admobFree: AdMobFree
  ) {

    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-4995849753890585/6591517401',
      isTesting: true,
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);
   }

  ngOnInit() {
    this.getProducts();
   this. admobFree.banner.show()
  }

  getProducts(){
    this.apiService.getData('https://dummyjson.com/products').subscribe((response : any)=>{
        this.products = response.products;
        console.log("products:",this.products);
        this.is_product=true;
    },(err)=>{
      this.is_product=true;
      console.log("Erro:",err.error);
    });
  }  

}
