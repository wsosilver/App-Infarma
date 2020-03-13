import { HttpModule } from '@angular/http';
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
   empre: any[];
 // @ViewChild('lineCanvas') lineCanvas;

 
  
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient ) { 
   this.teste();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    chart();
   
  }

  
 teste(){
      this.http.get('http://192.168.16.187:3000/dashboard')
                .subscribe(
                  result=>{
                    console.log(result)

                  },
                  err => {
                    console.log("teste" + err.message);
                  }
                )}
    }  

function chart(){
  let ctx = document.getElementById('myChart');
    let chart = new Chart(ctx, {
       // The type of chart we want to create
       type: 'pie',

       // The data for our dataset
       data: {
           labels: ['Loja 01', 'Loja 02', 'Loja 03', 'Loja 04', 'Loja 05', 'Loja 06', 'Loja 07  '],
           datasets: [{
               label: 'My First dataset',
               backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
               borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
               data: [0, 10, 5, 2, 20, 30, 45]
           }]
       },

     // Configuration options go here
     options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }
 });
}
