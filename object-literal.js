function getCar(make, model, value) {
    return {
     make, 
     model, 
     model: model,
     value, 
     ['make' + make]: true,
     depreciate() {
       this.value -= 2500;
     }
    };
   }
   let car = getCar('Kia', 'Sorento', 40000);
   console.log(car);
   console.log(car.make);
   console.log(car.makeKia);
   console.log(car.depreciate);