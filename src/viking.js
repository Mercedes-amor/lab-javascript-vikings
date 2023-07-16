// ITERATION 1

// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack = () => {
        return this.strength;
    }

    receiveDamage = (damage) => {
        this.health -= damage;
    }

  }
  
  // ITERATION 2

  // Viking
  class Viking extends Soldier{

    constructor (name, health, strength){
        super (health,strength)
        this.name = name
    }

    receiveDamage = (damage) => {
        this.health -= damage;
         if (this.health <= 0) {
            return `${this.name} has died in act of combat`
         }
         else {
            return `${this.name} has received ${damage} points of damage`
         }
    }

    battleCry = () => {

        return "Odin Owns You All!"
    }
  }
  
  //ITERATION 3

  // Saxon
  class Saxon extends Soldier{

    receiveDamage = (damage) => {
        this.health -= damage;
         if (this.health <= 0) {
            return "A Saxon has died in combat"
         }
         else {
            return `A Saxon has received ${damage} points of damage`
         }
    }
  }
  


//BONUS - ITERATION 4

  // War
  class War {

        vikingArmy = [];
        saxonArmy = [];
    
    addViking = (Viking) => {

        this.vikingArmy.push(Viking)
        
    }
    addSaxon = (Saxon) => {

        this.saxonArmy.push(Saxon)    
    }
    
    vikingAttack = () => {

        //Declaración número aleatorio
        let randomIndex = Math.floor((Math.random() * this.saxonArmy.length))
    
        //1 Saxon elegido al azar de saxonArmy
        let randomSaxon= this.saxonArmy[randomIndex]
        

        //1 Viking elegido al azar de vikingArmy
        let randomViking= this.vikingArmy[randomIndex]
        
        //Invocar metodo recibirDaño con viking.strength
        let result = randomSaxon.receiveDamage(randomViking.strength)
                
        // si Saxon muere retirar de SaxonArmy
        if (randomSaxon.health <=0) {
            this.saxonArmy.splice(randomIndex)
        }
        
        return result
    }

    saxonAttack = () => {

        //Declaración número aleatorio
        let randomIndex = Math.floor((Math.random() * this.vikingArmy.length))
    
        //1 Viking elegido al azar de vikingArmy
        let randomViking= this.vikingArmy[randomIndex]
        

        //1 Saxon elegido al azar de saxonArmy
        let randomSaxon= this.saxonArmy[randomIndex]   
        
    
        //Invocar metodo recibirDaño con saxon.strength
        let result = randomViking.receiveDamage(randomSaxon.strength);
        
        // si Viking muere retirar de VikingArmy
        if (randomViking.health <=0) {
            this.vikingArmy.splice(randomIndex)
        }     
        
        return result       
    } 
    //BONUS ITERATION 5
    showStatus = () => {
        if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
        return "Vikings and Saxons are still in the thick of battle."
        }

        if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survived another day..."
        }

        if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!"
        }
    }
  }






