

//video de explicação

//https://youtu.be/nspSOjmP_T4


//menu do jogo

var tela = 0
var largura = 200
var altura = 50
var xMenu = 200
var yMenu1 = 85
var yMenu2 = 145
var yMenu3 = 205 
var img,img2,img3, img4, enemy
var cont = 1
var contS = 1
var xe = 550
var contT= 0


//variaveis de jogo

 var pontos = 0
    var vidas  = 3
    var n1 = 5
    var n2 = 3
    var n3 = 0
    var n4 = 0
    var n5 =  [2,4,8,6,8,]
    var n6  = [12,14,18,24]
    var n5v = 0
    var n6v = 0
    var dig = ""
    var result = 0, result2=0, result3=0
    var som
    

function preload(){
  soundFormats('mp3')
  img = loadImage('Untitled-6_06.png')
  img2 = loadImage('25617.jpg')
  img3 = loadImage('2371.jpg')
  img4 = loadImage('fotolop.jpeg')
  enemy = loadImage('dd.png')
  tiro = loadImage('m_16.png')
  som = loadSound('Gun+Shot2.mp3')
}

function setup() {
  createCanvas(600, 500);
  frameRate(30)
  
  }

function draw() {
  textStyle(NORMAL);

  
  
  
  //tela menu
  if( tela == 0){
  background(20)
  image (img2, 0,0, 600,600)
  //menu de duas opções (Jogar)
  textAlign(CENTER)
  textSize(26)
    
    
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){  
       
     stroke(200)
     fill(20)
     rect(xMenu, yMenu1, largura, altura, 15)
      
      if(mouseIsPressed){
        tela = 2
      }
  }  

  fill(240)
  noStroke()
  text("Jogar", 300, 120);
  
  //infos
    
     
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){ 
    
  stroke(200)
  fill(20)
  rect(xMenu, yMenu2, largura, altura, 15)
      if(mouseIsPressed){
        tela = 3
      }
    }
  fill(240)
  noStroke()
  text("Informações", 300, 180)
    
    
    } 
 //botão creditos
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){ 
    
  stroke(200)
  fill(20)
  rect(xMenu, yMenu3, largura, altura, 15)
      if(mouseIsPressed){
        tela = 4
      }
    }
  
   fill(240)
  noStroke()
  text("Créditos", 300, 240)
  
  
//infos do jogo
  
  
 if(tela == 3){
  textStyle(NORMAL);
  textAlign(CENTER)
  textSize(20)
  background(10)
  fill(240)
  noStroke()
  text(" Responda corretamente as equações para\n acertar os imimigos. Toda vez que você acertar\n você aumentara sua pontuação, ao fazer uma\n detrminada quantidade de pontos você aumentará\n o seu nível e consequentemente a dificuldade.\n jogo baseado na habilidade: EF05MA08\n Disciplina: matemática  ", 300, 100)
    
 }
  
  
  //Créditos
  
  if(tela == 4){
  background(10)
  image(img4,380,0, 100, 100)
  fill(240)
  noStroke()
  text("programador: Eugênio Gomes", 180, 70);
  text("Educador: Prof. de Matemática\n Eliseu Gomes\n (teve vergonha de colocar a foto)",200,150)
 text ("Crédtidos das imagens:",140, 260)
 text("http://www.freepik.com>Designedbybrgfx/\nFreepik",240,320)
  text("http://www.freepik.com>Designedbypklyak/\n Freepik",245,400)
  }
  
  //jogo em si
  if(tela==2 && tela!=1){
    //variaveis de jogo
    background(10)
    image(img3, 0,0, 600,500)
    fill(100)
    noStroke()
    text("vidas: "+vidas, 50,45)
    
    fill(100)
    noStroke()
    text("pontos: "+pontos, 480,45)
    image(img, 10,350)
    image(enemy, 520, 350)
    //contagem de tempo
    cont = cont+1
    contS = parseInt(cont/30)
    text(contS+1, 100,100)
  
    
    //pontos
    n1= parseInt(random(1,20))
    n2= parseInt(random(1,20))
    n4= parseInt(random(1,20))
    n3= parseInt(random(1,20))
    nv5 = random(n5)
    nv6 = random(n6)
   if(contS%10===0 && contS!==0  && tela != 1){
    result2 = parseInt(prompt(n3+" x "+n4+" = " ))
    result3 = parseFloat(prompt(nv6+" / "+nv5+" = "))
     contS=0
     cont=0
     
        if(result2==n3*n4  && result3 == nv6/nv5){
          image(enemy, 518,530)
          cont = 0
          contS=0
          
        }
    
     if(result2==n3*n4  && result3 == nv6/nv5){
       pontos=pontos+100
       som.play();
       
       
     }
     //vida
     if( result2 !== n3*n4 || result3 != nv6/nv5){
       vidas=vidas-1
       contS=0
       som.play();
     }
   }
     if(vidas==0){
       tela=5
       vidas = 3
       contS=0
       cont =0
     }
        if(pontos==500){
          tela = 6
        }
  
  }
  //game over
  if(tela == 5){
    background(10)
    text("Fim  de jogo", 300, 300)
       
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){  
       
     stroke(200)
     fill(20)
     rect(xMenu, yMenu1, largura, altura, 15)
      
      if(mouseIsPressed){
        tela = 0
      }
  }  

  fill(240)
  noStroke()
  text("Tentar Novamente", 300, 120);
  }
    
  if(tela==6){
    background(10)
    textSize(26)
    text("parabés, você conseguiu !",300,300)
  }
  
 } 

