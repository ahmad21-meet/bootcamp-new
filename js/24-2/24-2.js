function pokemon (pokemonName, pokemonType , pokemonAttackList){
    this.pokemonName = pokemonName;
    this.pokemonType = pokemonType;
    this.AttackList = pokemonAttackList;
}

const loc = {
    pName : 'leol',
    pType : 'ewq',
    pList : ['sle' , 'far' , 'gel']
}

pokemon.prototype.callpokemnn = function () {
    console.log(` i will chose ${this.name}`);
}

pokemon.prototype.attack = function (num){
    console.log(`${this.name}, use this following attck ${this.AttackList[num]}`);
}

Pokemon.prototype.callTypeOfPokemon = function(){
    console.log(`${this.name} type is ${this.type}.`);
 }

 let pokey = new Pokemon(po.pName,po.pType,po.Plist);

pokey.callPokemon()
pokey.attack(1)
pokey.callTypeOfPokemon()