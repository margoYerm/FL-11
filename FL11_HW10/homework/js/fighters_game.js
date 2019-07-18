function Fighter(obj) {
    this.name = obj.name;
    this.damage = obj.damage;
    this.hp = obj.hp;
    this.agility = obj.agility;
    const that = this; 
    const zero = 0;
    Object.defineProperty(this, 'getName', {
        get: function() {
            return this.name;
        }
    });
    Object.defineProperty(this, 'getDamage', {
        get: function() {
            return this.damage;
        }
    });
    Object.defineProperty(this, 'getAgility', {
        get: function() {
            return this.agility;
        }
    });
    Object.defineProperty(this, 'getHealth', {
        get: function() {
            return this.hp;
        }
    });    
    this.attack = function(opponent) {
        let opAgal = opponent.getAgility;        
        const hundred = 100;
        const one = 1;        
        let rand = Math.floor(Math.random() * (hundred - zero + one)) + zero;        
        if (rand < hundred - opAgal) {
            console.log(`${that.getName} make ${that.getDamage} damage to ${opponent.getName}`);            
            opponent.dealDamage(that.getDamage);
        } else {
            console.log(`${opponent.getName} attack missed`);            
        }
    }
    let wins = 0;
    let losses = 0; 
    this.logCombatHistory = function() {        
        console.log(`Name: ${that.getName}, Wins: ${wins}, Losses: ${losses}`);
    }
    let currentHP = that.getHealth;
    this.heal = function(addHP) {        
        if (currentHP < that.getHealth) {
            if (currentHP + addHP > that.getHealth) {
                currentHP = that.getHealth;
                return currentHP;
            } else {
                currentHP = currentHP + addHP;
                return currentHP;
            }                            
        }         
    }
    this.dealDamage = function(deductHP) {        
        if (currentHP - deductHP < 0) {
            currentHP = zero;
            return currentHP;
        } else { 
            currentHP = currentHP - deductHP;
            return currentHP;
        }        
    }
    this.addWin = function() {
        wins++;        
        return wins;
    }
    this.addLoss = function() {
        losses++;        
        return losses;
    }
}

const myFighter1 = new Fighter({
    name: 'John',
    damage: 20,
    hp: 100,
    agility: 25
});

const myFighter2 = new Fighter({
    name: 'Jim',
    damage: 10,
    hp: 120,
    agility: 40
});

function buttle (arg1, arg2) {
    const iterationsLimit = Infinity;
    for (let i = 0; i < iterationsLimit; i++) {
        if (i === 0 && arg1.dealDamage(0) === 0) {
            console.log(`${arg1.getName} is dead and can't fight.`);
            break;
        } else if (i === 0 && arg2.dealDamage(0) === 0) {
            console.log(`${arg2.getName} is dead and can't fight.`);
            break;
        } else if (arg1.dealDamage(0) !== 0 && arg2.dealDamage(0) !== 0) {
            arg1.attack(arg2);        
            arg2.attack(arg1);            
        } else if (arg1.dealDamage(0) !== 0 && arg2.dealDamage(0) === 0) {
            arg1.addWin();
            arg2.addLoss();            
            console.log(arg1.dealDamage(0));
            console.log(arg2.dealDamage(0));
            arg1.logCombatHistory();
            arg2.logCombatHistory();
            break;
        } else if (arg1.dealDamage(0) === 0 && arg2.dealDamage(0) !== 0) {
            arg2.addWin();
            arg1.addLoss();         
            console.log(arg1.dealDamage(0));
            console.log(arg2.dealDamage(0));
            arg1.logCombatHistory();
            arg2.logCombatHistory();
            break;
        }
    }    
}

buttle(myFighter1, myFighter2);