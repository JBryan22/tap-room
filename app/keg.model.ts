export class Keg {
  public numberOfPints: number = 124;
  public imageUrl: string = `./../resources/img/keg${Math.floor(this.numberOfPints / 12.4)}.png`
  constructor(public name: string, public brand: string, public price: number, public abv: number) {}

  changeImage() {
    if (this.numberOfPints < 1) {
      this.imageUrl = './../resources/img/kegkicked.png';
    } else {
      this.imageUrl = `./../resources/img/keg${Math.floor(this.numberOfPints / 12.4)}.png`
    }
  }
}
