import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/Product';
import { SmartphoneService } from 'src/app/shared/services/smartphone.service';

@Component({
  selector: 'app-preview-product',
  templateUrl: './preview-product.component.html',
  styleUrls: ['./preview-product.component.css']
})
export class PreviewProductComponent implements OnInit {

  productId!: string | null;
  smartphone!: Product;

  ngOnInit(): void {
    this.route.paramMap.subscribe(c => {
      this.productId = c.get('id');

      if (this.productId) {
        this.smService.getSmartphone(this.productId).subscribe(() => {

        })
      }
    })
  }

  constructor(private route: ActivatedRoute, private smService: SmartphoneService) {

   }
}
