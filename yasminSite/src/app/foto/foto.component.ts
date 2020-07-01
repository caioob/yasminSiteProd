import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router } from '@angular/router';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  id: Number;
  foto: Number;
  fotoAntes: Number;
  fotoDepois: Number;
  horizontal: Number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
      this.router.queryParams.subscribe(params => {
        this.id = +params['id'];
        this.foto = +params['foto'];
        this.horizontal = +params['hor'];

        this.fotoAntes = Number(this.foto) - 1 ;
        this.fotoDepois = Number(this.foto) + 1 ;
        if(this.fotoAntes == 0) {
          this.fotoAntes = 1;
        }
        else if (this.fotoDepois > 6) {
          this.fotoDepois = 6;
        }
      });
      console.log(this.id);
  }


}
