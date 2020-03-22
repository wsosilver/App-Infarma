import { ApiService } from './../service/api.service';
import { Component, OnInit, ViewChild, DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],  
})


export class FolderPage implements OnInit {
  public folder: string;

  //Variaveis de Vendas
  lineChart: any;
  empre: any[] = [];
  value: any[] = [];
  dias: any[] = [];
  media: any[] = [];
  value_total: any = '';
  quantidadeVenda: any[] = [];

  //Variaveis Vendedores
  vendedores: any[] = []
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private api: ApiService) {
  }

  ngOnInit() {
    this.folder = 'Dashboard';
    this.chart();  
    this.buscarEmpresa();
    this.topVendedores();

  }

  topVendedores(){
    this.api.topVendedores().subscribe((data) =>{
      debugger
      for (let index = 0; index < data.length; index++) {
        
       let vendedor = {
          nomVend: data[index]['Nom_Vended'],
          valorVend: Number(data[index]['Venda_Liquida']),
          percVend: data[index]['Per_Acumulado'],
      }
      this.vendedores.push(vendedor);
      }
    })

  }


  buscarEmpresa(){
    
    this.api.Dashboard().subscribe((data) =>{
      debugger
      for (let index = 0; index < data.length; index++) {
        this.empre.push(data[index]['Cod_Loja']);
        this.value.push(Number(data[index]['Val_VenBal']));
        this.quantidadeVenda.push(data[index]['Qtd_Ven']);
        let dia = data[index]['Data_Venda'].substring(8,10);
        this.value_total = Number(this.value_total) + Number(this.value[index]); 
        this.dias.push(dia);
        this.media.push(this.value_total / this.dias.length)
      }
    })

  }

  chart() {
    new Chart(document.getElementById("myChart"), {
      type: 'line',
      data: {
        labels: this.dias,
        datasets: [{ 
            data: this.media,
            label: "Media",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: this.value,
            label: "Venda Diaria",
            borderColor: "#8e5ea2",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
        }
      }
    });
}
  

}
