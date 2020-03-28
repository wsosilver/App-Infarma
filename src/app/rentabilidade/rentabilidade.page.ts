import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-rentabilidade',
  templateUrl: './rentabilidade.page.html',
  styleUrls: ['./rentabilidade.page.scss'],
})
export class RentabilidadePage implements OnInit {

  constructor(private api: ApiService,private loadingController: LoadingController) { }


  Arent : any[] = []; 
  isLoading = false;
  Aselect: any[] = ["Grupo de Preço", "Classificação"]
  valueSelect = '';

  ngOnInit() {

    this.getRentabilidade();
  }

  teste(){
    console.log(this.valueSelect)
  }

  getRentabilidade(){
    this.present()
        this.api.rentabilidade().subscribe((data) =>{
      for (let index = 0; index < data.length; index++) {
        
       let rent = {
          desGrp: data[index]['Des_GrpPrc'],
          Valor: Number(data[index]['Valor']),
      }
      this.Arent.push(rent);
      }
      this.dismiss()

    })
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
