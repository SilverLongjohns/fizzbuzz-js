class Fizzbuzz {
  constructor(){
    this.array = [...Array(100+1).keys()].slice(1);
  }

  fizzReplace(){
    this.array.forEach(x => { if ((this.array.indexOf(x) + 1) % 3 == 0) {
      this.array[this.array.indexOf(x)] = "Fizz";
        }
      });
    }
  
  buzzReplace(){
    this.array.forEach(x => { if ((this.array.indexOf(x) + 1) % 5 == 0) {
      this.array[this.array.indexOf(x)] = "Buzz";
        }
      });
    }

  fizzbuzzReplace(){
    this.array.forEach(x => { if ((this.array.indexOf(x) + 1) % 5 == 0 && (this.array.indexOf(x) + 1) % 3 == 0) {
      this.array[this.array.indexOf(x)] = "FizzBuzz";
        }
      });
    }
}
