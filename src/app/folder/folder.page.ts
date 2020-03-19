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

  lineChart: any;
  users: any[];
  empre: any[] = [];
  value: any[] = [];
  quantidadeVenda: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private api: ApiService) {
  }

  ngOnInit() {
    this.folder = 'Dashboard';
    this.chart();
    this.buscarEmpresa();

  }

  buscarEmpresa(){
    this.api.Dashboard().subscribe((data) =>{
      debugger
      for (let index = 0; index < data.length; index++) {
        this.empre.push(data[index]['Cod_Loja']);
        this.value.push(data[index]['Val_VenBal']);
        this.quantidadeVenda.push(data[index]['Qtd_Ven']);

        console.log(this.value)
      }
    })

  }

  chart() {
    let ctx = document.getElementById('myChart');
    let chart = new Chart(ctx, {
      type: 'bar',

      // The data for our dataset
      data: {
        labels: this.empre,
        datasets: [{
          label: 'Valor de Vendas',
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          borderColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          data: this.value
        },
        {
          label: 'Quantidade de Vendas',
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)'            
          ],
          borderColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          data: this.quantidadeVenda
        }]
      },
     
      // Configuration options go here
      
    });
  }




}
