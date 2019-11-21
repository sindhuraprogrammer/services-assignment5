export class CounterService{
counter:number = 0 ;
  countActions(){
    this.counter=this.counter+1;
    console.log(this.counter);
  }
}