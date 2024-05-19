import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/Product';
import { SmartphoneService } from 'src/app/shared/services/smartphone.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-preview-product',
  templateUrl: './preview-product.component.html',
  styleUrls: ['./preview-product.component.css']
})
export class PreviewProductComponent implements OnInit {

  productId!: string | null;
  smartphone!: Product;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  isInFavorites = false;

  toggleFavorites() {
    this.isInFavorites = !this.isInFavorites;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(c => {
      this.productId = c.get('id');

      if (this.productId) {
        this.smService.getSmartphone(this.productId).subscribe((data) => {
          this.smartphone = data;
          console.log(data);
        })
      }
    })

    this.items = [{ label: 'Smartphones' }, {label: 'Product'}];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor(private route: ActivatedRoute, private smService: SmartphoneService) {

   }
}
