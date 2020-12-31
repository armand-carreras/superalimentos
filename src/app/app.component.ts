import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(sessionStorage.getItem('menu')!=null){
      this.menuDiario = JSON.parse(sessionStorage.getItem('menu'))
      this.totalCalories();
    }
  }
  title = 'superalimentos';
  foods: Object[] = [
    {
      name: "Pizza",
      calories: 400,
      image: "https://i.imgur.com/eTmWoAN.png",
      quantity: 1
    },
    {
      name: "Salad",
      calories: 150,
      image: "https://i.imgur.com/DupGBz5.jpg",
      quantity: 1
    },
    {
      name: "Sweet Potato",
      calories: 120,
      image: "https://i.imgur.com/hGraGyR.jpg",
      quantity: 1
    },
    {
      name: "Gnocchi",
      calories: 500,
      image: "https://i.imgur.com/93ekwW0.jpg",
      quantity: 1
    },
    {
      name: "Pot Roast",
      calories: 350,
      image: "https://i.imgur.com/WCzJDWz.jpg",
      quantity: 1
    },
    {
      name: "Lasagna",
      calories: 750,
      image: "https://i.imgur.com/ClxOafl.jpg",
      quantity: 1
    },
    {
      name: "Hamburger",
      calories: 400,
      image: "https://i.imgur.com/LoG39wK.jpg",
      quantity: 1
    },
    {
      name: "Pad Thai",
      calories: 475,
      image: "https://i.imgur.com/5ktcSzF.jpg",
      quantity: 1
    },
    {
      name: "Almonds",
      calories: 75,
      image: "https://i.imgur.com/JRp4Ksx.jpg",
      quantity: 1
    },
    {
      name: "Bacon",
      calories: 175,
      image: "https://i.imgur.com/7GlqDsG.jpg",
      quantity: 1
    },
    {
      name: "Hot Dog",
      calories: 275,
      image: "https://i.imgur.com/QqVHdRu.jpg",
      quantity: 1
    },
    {
      name: "Chocolate Cake",
      calories: 490,
      image: "https://i.imgur.com/yrgzA9x.jpg",
      quantity: 1
    },
    {
      name: "Wheat Bread",
      calories: 175,
      image: "https://i.imgur.com/TsWzMfM.jpg",
      quantity: 1
    },
    {
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      quantity: 1
    },
    {
      name: "Banana",
      calories: 175,
      image: "https://i.imgur.com/BMdJhu5.jpg",
      quantity: 1
    },
    {
      name: "Yogurt",
      calories: 125,
      image: "https://i.imgur.com/URhdrAm.png",
      quantity: 1
    }
  ];
  totalCal:number = 0;
  menuDiario: Object[]=[
  ]
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
      console.log('exists')
      return true;
    }
    else {console.log('not exists');
      return false;}
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

  totalCalories(): number{
    this.menuDiario.forEach(param =>{
      console.log('menuDiarioParam',param)
      if(param['quantity']>1){
        this.totalCal += param['quantity']*param['calories']
      }
      else{
        this.totalCal += param['calories'];
      }
    })
    console.log('totalCalories',this.totalCal)
    return this.totalCal;
  }

  deleteItem(food:any){
    let erase;
    if(this.insideList(this.menuDiario,food.name)){
      for(let i =0; i<this.menuDiario.length; i++){
        if(this.menuDiario[i]['name'] == food.name){
          erase = i;
          this.totalCal -= food.calories;
        }
      }
      this.menuDiario.splice(erase,1);
      sessionStorage.setItem('menu', JSON.stringify(this.menuDiario))
    }
  }

  addtomenu(food: any){
    console.log('entramosAddMenu')
    if(this.insideList(this.menuDiario,food.name)){
      console.log('exists');
      this.menuDiario.forEach(param =>{
        if(param['name'] == food.name){
          param['quantity']++;
        }
      })
    }
    else{
      this.menuDiario.push(food);
      console.log(this.menuDiario);
    }
    this.totalCal += food.calories;
    sessionStorage.setItem('menu', JSON.stringify(this.menuDiario))
  }
}
