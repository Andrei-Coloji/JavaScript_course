const ATTACK_VALUE = 10;

let chosenMaxLife = 50;
let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler(){
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage
    if (currentMonsterHealth <= 0){
        alert('You won!');
    }
}

attackBtn.addEventListener('click', attackHandler);