const canvas = document.querySelector('canvas');
const w = canvas.width;
const h = canvas.height;
var ctx = canvas.getContext('2d');
ctx.font = "50px serif";


let map = [];
let counter = 1;
for (let i=0 ; i < 4; i++) {
    map[i] = [];
    for (j = 0; j < 4; j++) {
        map[i][j] = counter++;
    }
}
map[3][3] = null;
  
function tas(arr) {
    for(let i = 0; i < 50; i++) {
        let one = rand(0,3);
        let two = rand(0,3);
        let temp = arr[one][two];

        let three = rand(0,3);
        let four = rand(0,3);
        arr[one][two] = arr[three][four];
        arr[three][four] = temp;
    }
    return arr;
}

map = tas(map)

function draw() {
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = "rgb(0,0,0)"
    ctx.fillRect (0, 0, w, h);

    for (let i=0 ; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (map[i][j] != null) {
                ctx.fillStyle = "rgb(0,100,0)"
                ctx.fillRect (1+j*h/4, 1+i*w/4, h/4-2, w/4-2);
                ctx.fillStyle = "orange";
                ctx.fillText(map[i][j], j*h/4+(h/4/2)-20, (i*w/4)+(w/4/2)+15);
            }

        }
    }
    
    if (checkWin()) {
        alert ('You WIN!!!')
        document.querySelector('body').style.backgroundColor = 'white';
        return;
    }
    requestAnimationFrame(draw)
}

document.querySelector('body').onload = draw();


function checkWin () {
    let counter = 1;
    for (let i=0 ; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if(i == 3 && j == 3 && map[3][3] == null) return true;
            if(map[i][j] != counter++) return false
        }
    }
    
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }


  canvas.addEventListener('click', function (e) {
      let X = e.pageX - this.offsetLeft; 
      let Y = e.pageY - this.offsetTop;
    
      let x = Math.floor(Y/h*4);
      let y = Math.floor(X/w*4);
      
      if(x > 0 && map[x-1][y] == null) {
        map[x-1][y] = map[x][y];
        map[x][y] = null;
      }
      if(x < 3 && map[x+1][y] == null) {
        map[x+1][y] = map[x][y];
        map[x][y] = null;
      }
      if(y > 0 && map[x][y-1] == null) {
        map[x][y-1] = map[x][y];
        map[x][y] = null;
      }
      if(y < 3 && map[x][y+1] == null) {
        map[x][y+1] = map[x][y];
        map[x][y] = null;
      }
      

      
    });