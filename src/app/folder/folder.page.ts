import { ApiService } from './../service/api.service';
import { Component, OnInit, ViewChild, DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { LoadingController } from '@ionic/angular';



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
  isLoading = false;


  //Variaveis Vendedores
  vendedores: any[] = []
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private loadingController: LoadingController) {
  }

  ngOnInit() {
    this.folder = 'Dashboard';
    this.chart();  
    this.buscarEmpresa();
    this.topVendedores();

  }

  topVendedores(){
    this.vendedores = [];
    this.api.topVendedores().subscribe((data) =>{
      
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
    this.present()
    this.api.Dashboard().subscribe((data) =>{
      for (let index = 0; index < data.length; index++) {
        this.empre.push(data[index]['Cod_Loja']);
        this.value.push(Number(data[index]['Val_VenBal']));
        this.quantidadeVenda.push(data[index]['Qtd_Ven']);
        let dia = data[index]['Data_Venda'].substring(8,10);
        this.value_total = Number(this.value_total) + Number(this.value[index]); 
        this.dias.push(dia);
        this.media.push(this.value_total / this.dias.length)
        
      }
      this.dismiss()
    })
    //this.chart();
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
       animation: {
         duration: 5000,
         easing: 'linear'
       }
      }
    });
}

async present() {
  this.isLoading = true;
  return await this.loadingController.create({
    // duration: 5000,
  }).then(a => {
    a.present().then(() => {
      console.log('presented');
      if (!this.isLoading) {
        a.dismiss().then(() => console.log('abort presenting'));
      }
    });
  });
}

async dismiss() {
  this.isLoading = false;
  return await this.loadingController.dismiss().then(() => console.log('dismissed'));
}

}
