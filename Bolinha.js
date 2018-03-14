"use strict";

(function()
{
	//automatically called as soon as the javascript is loaded
	window.addEventListener("load", main);
}());


class chao{
  constructor(ctx,y,altura,cor,largura){
    this.ctx=ctx;
    this.y=y;
    this.altura=altura;
    this.cor=cor;
    this.largura=largura;
  }

  desenha(ctx){
    ctx.fillStyle=this.cor;
    ctx.fillRect(0,this.y,this.largura,this.altura);
  }

}


class bloco{
  constructor(ctx,x,y,largura,altura,cor,gravidade,velocidade){
    this.ctx=ctx;
    this.x=x;
    this.y=y;
    this.largura=largura;
    this.altura=altura;
    this.cor=cor;
    this.gravidade=gravidade;
    this.velocidade=velocidade;
  }

  desenha(ctx){
    ctx.fillStyle=this.cor;
    ctx.fillRect(this.x,this.y,this.largura,this.altura);
  }

  atualiza(){
    this.velocidade+=this.gravidade;
    this.y+=this.velocidade;
  }
}


function clique(event){

}

function main(){
  var canvas,ctx,ALTURA,LARGURA,frames=0;
  ALTURA = window.innerHeight;
  LARGURA = window.innerWidth;


  if(LARGURA>=500){
    LARGURA=600;
    ALTURA=600;
  }
  canvas=document.createElement("canvas");
  canvas.width=LARGURA;
  canvas.height=ALTURA;
  canvas.style.border="1px solid #000";

  ctx=canvas.getContext("2d");
  document.body.appendChild(canvas);

  document.addEventListener("mousedown",clique);


  var floor = new chao(ctx,550,50,"#ffdf70",LARGURA);
  var block = new bloco(ctx,50,0,50,50,"#ff4e4e",2,0);

  roda(ctx,LARGURA,ALTURA,floor,block);
}

function roda(ctx,LARGURA,ALTURA,floor,block){
  desenha(ctx,LARGURA,ALTURA,floor,block);
  atualiza(block);

  window.requestAnimationFrame(roda);

}

function atualiza(block){
  frames++;
  block.atualiza();
}

function desenha(ctx,LARGURA,ALTURA,floor,block){
  ctx.fillStyle ="#50beff";
  ctx.fillRect(0,0,LARGURA,ALTURA);

  floor.desenha(ctx);
  block.desenha(ctx);
}

//inicializa o jogo
main();
