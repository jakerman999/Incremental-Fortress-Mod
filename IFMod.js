var buttons = {
	weaklings:document.querySelector("#weaklings_button"), 
	dwarves:document.querySelector("#dwarves_button"), 
	humans:document.querySelector("#dwarves_button"), 
	ogres:document.querySelector("#ogres_button") ,
	wizards:document.querySelector("#wizards_button"),
	warlocks:document.querySelector("#warlocks_button"),
	witches:document.querySelector("#witches_button"),
	wyverns:document.querySelector("#wyverns_button")
}; 
 
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

  // save a copy of stock UI
  var oldRUI = refreshUI

  // insert our changes 
  // slice magic numbers trim padding from toString()
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
  effectiveness.wizards = tower1.weaklings * powers.wizards / prices.wizards;
  powers.warlocks = tower2.warlocks_power + tower2.witches * tower2.witches_power;
  prices.warlocks = tower2.warlocks_price[0];
  effectiveness.warlocks = tower1.weaklings * tower2.wizards * powers.warlocks / prices.warlocks;
  powers.witches = tower2.witches_power;
  prices.witches = tower2.witches_price[0];
  effectiveness.witches = tower1.weaklings * tower2.wizards * tower2.warlocks * powers.witches / prices.witches;
  powers.wyverns = tower2.wyverns_power;
  prices.wyverns = tower2.wyverns_price[0];
  effectiveness.wyverns = tower1.dwarves * powers.wyverns / prices.wyverns;
  
  effMod = Math.max(...Object.values(effectiveness));
  
  
  //mana`)
  .replace(/(?<=weaklings_button\.html\(.*) '<\/span>'/ ,`'<br>Effectiveness:' + numT(effectiveness.weaklings/effMod) + '</span>'`)
  .replace(/(?<=dwarves_button\.html\(.*) '<\/span>'/ ,`'<br>Effectiveness:' + numT(effectiveness.dwarves/effMod) + '</span>'`)
  .replace(/(?<=humans_button\.html\(.*) '<\/span>'/ ,`'<br>Effectiveness:' + numT(effectiveness.humans/effMod) + '</span>'`)
  .replace(/(?<=ogres_button\.html\(.*) '<\/span>'/ ,`'<br>Effectiveness:' + numT(effectiveness.ogres/effMod) + '</span>'`)
  .replace(/(?<=wizards_button\.html\(.*) '<\/span>'/ ,`'<br>Effectiveness:' + numT(effectiveness.wizards/effMod) + '</span>'`)
  .replace(/(?<=warlocks_button\.html\(.*) '<\/span>'/ ,`'<br>Effectiveness:' + numT(effectiveness.warlocks/effMod) + '</span>'`)
  .replace(/(?<=witches_button\.html\(.*) '<\/span>'/ ,`'<br>Effectiveness:' + numT(effectiveness.witches/effMod) + '</span>'`)
  .replace(/(?<=wyverns_button\.html\(.*) '<\/span>'/ ,`'<br>Effectiveness:' + numT(effectiveness.wyverns/effMod) + '</span>'`)
  );
  // /regularExpression/
  // (?<=___.*) require but ignore what is in this part of the pattern
  // match the span tag, and add our effectiveness display
  
  
  // Replace the UI draw method with our updates
  refreshUI = newRUI;
  


// click a button to trigger a UI update, make it most effencient because why not
buttons[Object.keys(effectiveness).find(k => effectiveness[k]/Math.max(...Object.values(effectiveness)); == 1)].click()






  
