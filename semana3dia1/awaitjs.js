function obtenerCereal(){
    return new Promise((resolve, reject) =>
        setTimeout(()=>{
            resolve('Hubo un error onsole finished')
        },
        3000)
    )
}

async function shopping() {
    console.log('1')
    console.log(await obtenerCereal())

    obtenerCereal().then( x => {
            console.log(x)
        }, error => {
            console.log(error)
        }
    )
    console.log('3')
}

shopping()



// // getCardSets(set_code){
// //     return new Promise(resolve => {
// //       this.qcs.getCardSets(set_code)
// //       .subscribe(task => {
// //         this.items2 = task.results;
// //         if(Object.keys(this.items2).length== 0)
// //         {
// //           this.card_set_list = false;
// //           this.no_items = true;
// //         }
// //         else{
// //           this.card_set_list = true;
// //           this.no_items = false;
// //         }
// //         setTimeout(() => {
// //           resolve(this.spinner.hide());
// //         }, 750);
// //       });  
// //     });  


// var p1 = new Promise((resolve, reject) => {
//     resolve('Success!');
//     // or
//     reject(new Error("Error!"));
//   });
  
//   p1.then(value => {
//     console.log(value); // Success!
//   }, reason => {
//     console.error(reason); // Error!
//   });