import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaturamentoService } from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit, OnDestroy {

  faturamento: any;
  faturamentoInscricao: any;

  constructor(private faturamentoService: FaturamentoService) { }

  ngOnInit(): void {
    this.faturamentoInscricao = this.faturamentoService.getFaturamento()
    .subscribe(dados => this.faturamento = dados)
  }

  ngOnDestroy(): void {
    this.faturamentoInscricao.unsubscribe();
    
  }


}
