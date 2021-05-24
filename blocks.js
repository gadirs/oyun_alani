/*Blockly.Blocks['move'] = {
    init: function() {
      this.appendValueInput("move")
          .setCheck("Number")
          .appendField("move");
      this.appendDummyInput()
          .appendField("steps to");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"], ["up","up"], ["down","down"]]), "direction");
      this.setInputsInline(true);
      //this.setPreviousStatement(true, null);
      this.setOutput(true, null);
      this.setNextStatement(true, null);
      this.setColour(178);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };*/



  Blockly.Blocks['ileri'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("ileri git");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('Returns number of letters in the provided text.');
  }
};

Blockly.Blocks['geri'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("geri git");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('Returns number of letters in the provided text.');
  }
};

Blockly.Blocks['saga_ilerle'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("sağa git");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('Returns number of letters in the provided text.');

  }
};

Blockly.Blocks['sola_ilerle'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("sola git");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('Returns number of letters in the provided text.');
  }
};



Blockly.JavaScript['ileri'] = function(block) {

  if (((player.body.position.y<=130 && player.body.position.y>=18 && player.body.position.x<=60) || (player.body.position.y<=85 && player.body.position.y>=-10 && player.body.position.x>=460) || (player.body.position.y<=220 && player.body.position.y>=120 && player.body.position.x>=190 && player.body.position.x<=300) || (player.body.position.y>=220 && player.body.position.y<=480 && player.body.position.x>=300 && player.body.position.x<=350))){

  }

  else if (player.body.position.x<=505)
    return [player.body.velocity.x = 3333, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['geri'] = function(block) {

  if (((player.body.position.y<=480 && player.body.position.y>=18 && player.body.position.x>=370 && player.body.position.x<=400) || (player.body.position.y>=475 && player.body.position.y<=550 && player.body.position.x<=150) || (player.body.position.y>=415 && player.body.position.y<=475 && player.body.position.x<=50) )){
    
  }

  else if (player.body.position.x>=1)
    return [player.body.velocity.x = -3333, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['saga_ilerle'] = function(block) {

  if (((player.body.position.x>=475 && player.body.position.y<=100) || (player.body.position.y>=475 && player.body.position.x<=375 && player.body.position.x>=315) || (player.body.position.y>=220 && player.body.position.y<=250 && player.body.position.x<=315 && player.body.position.x>=210) || (player.body.position.y>=130 && player.body.position.y<=150 && player.body.position.x<=210 && player.body.position.x>=40) )){

  }

  else if(player.body.position.y>=-9)
    return [player.body.velocity.y = -3333, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sola_ilerle'] = function(block) {

  if (((player.body.position.y<=20 && player.body.position.x>=15 && player.body.position.x<=375) || (player.body.position.y>=400 && player.body.position.x>=0 && player.body.position.x<=20) || (player.body.position.y>=460 && player.body.position.x>=20 && player.body.position.x<=130))){

  }

  else if (player.body.position.y<=505)
    return [player.body.velocity.y = 3333, Blockly.JavaScript.ORDER_ATOMIC];
};





  