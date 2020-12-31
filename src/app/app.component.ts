import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superalimentos';
  
  foods: Object[] = [
    {
      name: "Pizza",
      calories: 400,
      image: "https://i.imgur.com/eTmWoAN.png",
      quantity: 0
    },
    {
      name: "Salad",
      calories: 150,
      image: "https://i.imgur.com/DupGBz5.jpg",
      quantity: 0
    },
    {
      name: "Sweet Potato",
      calories: 120,
      image: "https://i.imgur.com/hGraGyR.jpg",
      quantity: 0
    },
    {
      name: "Gnocchi",
      calories: 500,
      image: "https://i.imgur.com/93ekwW0.jpg",
      quantity: 0
    },
    {
      name: "Pot Roast",
      calories: 350,
      image: "https://i.imgur.com/WCzJDWz.jpg",
      quantity: 0
    },
    {
      name: "Lasagna",
      calories: 750,
      image: "https://i.imgur.com/ClxOafl.jpg",
      quantity: 0
    },
    {
      name: "Hamburger",
      calories: 400,
      image: "https://i.imgur.com/LoG39wK.jpg",
      quantity: 0
    },
    {
      name: "Pad Thai",
      calories: 475,
      image: "https://i.imgur.com/5ktcSzF.jpg",
      quantity: 0
    },
    {
      name: "Almonds",
      calories: 75,
      image: "https://i.imgur.com/JRp4Ksx.jpg",
      quantity: 0
    },
    {
      name: "Bacon",
      calories: 175,
      image: "https://i.imgur.com/7GlqDsG.jpg",
      quantity: 0
    },
    {
      name: "Hot Dog",
      calories: 275,
      image: "https://i.imgur.com/QqVHdRu.jpg",
      quantity: 0
    },
    {
      name: "Chocolate Cake",
      calories: 490,
      image: "https://i.imgur.com/yrgzA9x.jpg",
      quantity: 0
    },
    {
      name: "Wheat Bread",
      calories: 175,
      image: "https://i.imgur.com/TsWzMfM.jpg",
      quantity: 0
    },
    {
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      quantity: 0
    },
    {
      name: "Banana",
      calories: 175,
      image: "https://i.imgur.com/BMdJhu5.jpg",
      quantity: 0
    },
    {
      name: "Yogurt",
      calories: 125,
      image: "https://i.imgur.com/URhdrAm.png",
      quantity: 0
    }
  ];
  food: Object = {
    name:'',
    calories:0,
    image:'',
    quantity:0
  }
  searchFood = '';

  buttonAdd = "Add Food";

  hideAddFood = true;
  
  formVisible(){
    if(this.hideAddFood){
      this.hideAddFood = !this.hideAddFood;
      this.buttonAdd = 'Close';
    }
    else{
      this.hideAddFood = !this.hideAddFood;
      this.buttonAdd = 'Add Food';
    }
  }
  insideList(lista: any, food: string):boolean{
    let array =  lista.filter(element => {
      return element.name.toLowerCase()===(food.toLowerCase());
    });
    if(array.length>0){
      return true;
    }
    else return false;
  }
  dataHandle(nombre: string,calorias: number){
    let inside = this.insideList(this.foods, nombre);
    if(nombre!='' && !isNaN(calorias) && !inside){
      const item = {
        name: nombre,
        calories: calorias,
        image:"https://picsum.photos/id/30/100/100",
        quantity:0
      }
      this.foods.push(item);
    }
  
  }
}
