import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit, OnDestroy {

  consultas: any;
  consultaInscricao: any
  erro: any;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.consultaInscricao = this.consultaService.getConsultas()
    .subscribe( dados => this.consultas = dados, erro => this.erro = true)
  }

  ngOnDestroy(): void {
    this.consultaInscricao.unsubscribe();
  }

}
