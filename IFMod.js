var mortals = []; 
mortals.push(document.querySelector("#weaklings_button")); 
mortals.push(document.querySelector("#dwarves_button")); 
mortals.push(document.querySelector("#humans_button")); 
mortals.push(document.querySelector("#ogres_button")); 
 
var powers = { 
	weaklings:0, 
	dwarves:0, 
	humans:0, 
	ogres:0 ,
	wizards:0,
	warlocks:0,
	witches:0,
	wyverns:0
}; 
 
var prices = { 
	weaklings:0, 
	dwarves:0, 
	humans:0, 
	ogres:0 ,
	wizards:0,
	warlocks:0,
	witches:0,
	wyverns:0
};
var effectiveness = {
	weaklings:0, 
	dwarves:0, 
	humans:0, 
	ogres:0 ,
	wizards:0,
	warlocks:0,
	witches:0,
	wyverns:0
};


  var oldRUI = refreshUI

  var newRUI = Function(oldRUI.toString().slice(25,-3).replace(`//mana`,`

  //effenciency
  powers.weaklings = ( tower1.weaklings_power + (tower2.wizards * (tower2.wizards_power + tower2.warlocks * (tower2.warlocks_power + tower2.witches * tower2.witches_power) ) ) ) * winecellar.drunk[0];
  prices.weaklings = tower1.weaklings_price[0]; 
  effectiveness.weaklings = powers.weaklings / prices.weaklings; 
  powers.dwarves = (tower1.dwarves_power + (tower2.wyverns*tower2.wyverns_power))* winecellar.drunk[1] * dragons_tower.dragons_multiplier; 
  prices.dwarves = tower1.dwarves_price[0]; 
  effectiveness.dwarves = powers.dwarves / prices.dwarves; 
  powers.humans = (tower1.humans_power + tower3.catapults * (tower3.catapults_power + tower3.crossbows * tower3.crossbows_power))*winecellar.drunk[2] 
  prices.humans = tower1.humans_price[0]; 
  effectiveness.humans = powers.humans / prices.humans; 
  powers.ogres = (tower1.ogres_power + tower3.cheiroballistras*tower3.cheiroballistras_power)*winecellar.drunk[3] 
  prices.ogres = tower1.ogres_price[0]; 
  effectiveness.ogres = powers.ogres / prices.ogres; 
  
  powers.wizards = tower2.wizards_power + tower2.warlocks * (tower2.warlocks_power + tower2.witches * tower2.witches_power);
  prices.wizards = tower2.wizards_price[0];
  effectiveness.wizards = powers.wizards / prices.wizards;
  powers.warlocks = tower2.warlocks_power + tower2.witches * tower2.witches_power;
  prices.warlocks = tower2.warlocks_price[0];
  effectiveness.warlocks = powers.warlocks / prices.warlocks;
  powers.witches = tower2.witches_power;
  prices.witches = tower2.witches_price[0];
  effectiveness.witches = powers.witches / prices.witches;
  powers.wyverns = tower2.wyverns_power;
  prices.wyverns = tower2.wyverns_price[0];
  effectiveness.wyverns = powers.wyverns / prices.wyverns;
  
  effMod = Math.max(...Object.values(effectiveness));
  
  
  //mana`)
  .replace(`weaklings_button.html( 'Weaklings: ' + numT(tower1.weaklings) + '<br><span class="tiny">Power: +' + numT(( tower1.weaklings_power + (tower2.wizards * (tower2.wizards_power + tower2.warlocks * (tower2.warlocks_power + tower2.witches * tower2.witches_power) ) ) ) * winecellar.drunk[0]) + '/s<br>Price: ' + numT(tower1.weaklings_price[tower1.buy_amount_index]) + '</span>' );`,`weaklings_button.html( 'Weaklings: ' + numT(tower1.weaklings) + '<br><span class="tiny">Power: +' + numT(powers.weaklings) + '/s<br>Price: ' + numT(tower1.weaklings_price[tower1.buy_amount_index]) + '<br>Effectiveness:' + numT(effectiveness.weaklings/effMod) + '</span>' );`)
  .replace(`dwarves_button.html( 'Dwarves: ' + numT(tower1.dwarves) + '<br><span class="tiny">Power: +' + numT ((tower1.dwarves_power + (tower2.wyverns*tower2.wyverns_power))* winecellar.drunk[1] * dragons_tower.dragons_multiplier ) + '/s<br>Price: ' + numT(tower1.dwarves_price[tower1.buy_amount_index]) + '</span>' );`,`dwarves_button.html( 'Dwarves: ' + numT(tower1.dwarves) + '<br><span class="tiny">Power: +' + numT(powers.dwarves) + '/s<br>Price: ' + numT(tower1.dwarves_price[tower1.buy_amount_index]) + '<br>Effectiveness:' + numT(effectiveness.dwarves/effMod) + '</span>' );`)
  .replace(`humans_button.html( 'Humans: ' + numT(tower1.humans) + '<br><span class="tiny">Power: +' + numT((tower1.humans_power + tower3.catapults * (tower3.catapults_power + tower3.crossbows * tower3.crossbows_power))*winecellar.drunk[2]) + '/s<br>Price: ' + numT(tower1.humans_price[tower1.buy_amount_index]) + '</span>' );`,`humans_button.html( 'Humans: ' + numT(tower1.humans) + '<br><span class="tiny">Power: +' + numT(powers.humans) + '/s<br>Price: ' + numT(prices.humans) + '<br>Effectiveness:' + numT(effectiveness.humans/effMod) + '</span>' );`)
  .replace(`ogres_button.html( 'Ogres: ' + numT(tower1.ogres) + '<br><span class="tiny">Power: +' + numT((tower1.ogres_power + tower3.cheiroballistras*tower3.cheiroballistras_power)*winecellar.drunk[3]) + '/s<br>Price: ' + numT(tower1.ogres_price[tower1.buy_amount_index]) + '</span>' );`,`ogres_button.html( 'Ogres: ' + numT(tower1.ogres) + '<br><span class="tiny">Power: +' + numT(powers.ogres) + '/s<br>Price: ' + numT(tower1.ogres_price[tower1.buy_amount_index]) + '<br>Effectiveness:' + numT(effectiveness.ogres/effMod) + '</span>' );`)
  );
  
  refreshUI = newRUI;
     
  
  
  
  
  
  