export class Hyppopatamus {
    constructor(
        public name: string,
        public weight: number,
        public tusksSize: number,
    ) { }

    init(name: string, weight: number, tusksSize: number): void {
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }

    swim(): number {
        this.weight -= 0.3;
        return this.weight;
    }

    eat(): number {
        this.weight += 1;
        return this.weight;
    }

    fight(opponent: Hyppopatamus): Hyppopatamus {
        if (this.tusksSize > opponent.tusksSize) {
            return this;
        } else {
            return opponent;
        }
    }

    cycleDeVie() {
        for (let jour = 1; jour <= 21; jour++) {
            console.log(`Jour : ${jour}`);
            for (let heure = 1; heure <= 15; heure++) {
                this.eat();
                this.eat();
                this.swim();
                this.swim();
                this.swim();
            }
        }
        return this.toString();
    }

    toString(): string {
        return `Hippopotame ${this.name} : poids = ${this.weight} kg, taille des défenses = ${this.tusksSize} cm`;
    }
}
