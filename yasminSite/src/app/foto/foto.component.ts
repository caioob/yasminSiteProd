import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    tipo: String;
  }

  ngOnInit(): void {
      this.router.queryParams.subscribe(params => {
        this.tipo = +params['type'];
      });
  }

}
