import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {
  amigos = [
    {
      Nome: "Rafael",
      Idade: 30,
      Nivel_de_amizade: 2
    },{
      Nome: "Pedro",
      Idade: 21,
      Nivel_de_amizade: 2
    },{
      Nome: "Otavio",
      Idade: "Pedro",
      Nivel_de_amizade: 2
    },{
      Nome: "Matheus",
      Idade: "Pedro",
      Nivel_de_amizade: 2
    }
  ];

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet(nome) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.deleteAmigo(nome);
        }
      }, {
        text: 'Editar',
        icon: 'cog',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  deleteAmigo(name){
    var cont=0;
    this.amigos.forEach(amigo => {
      cont++;
      if(amigo.Nome==name){
        this.amigos[cont-1]=null;
        document.getElementById(name).style.display="none";
      }
    });
  }
  ngOnInit() {
  }

}
