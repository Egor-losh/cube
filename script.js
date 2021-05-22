let countcubes = 2 * 2;
let arraycubes = [];
for(let i = 0; i < countcubes / 2; i++){
    let cube = {
        red: Math.round(Math.random() * 255),
        green: Math.round(Math.random() * 255),
        blue: Math.round(Math.random() * 255),
        view: false
    }
    arraycubes.push(cube);   
}
arraycubes = [...arraycubes, ...arraycubes];
console.log(arraycubes);
function renderCubes(arraycubes){
    arraycubes.map((cube, index) => {
        if(document.getElementById('cube_' + index)){
        let div = document.createElement('div');
        div.id = 'cube_' + index;
        div.className = 'cube';
        div.onclick = event => {cubeClick(event);}
        document.getElementById('cubes').append(div);
        }
        rebderCube(cube);
    });
}
function renderCube(cube, index){
    if(cube.view){
        document.getElementById('cube_' + index).style.backgroundColor = 
        'rgb(' + cube.red + ',' +cube.green + ',' + cube.blue + ')';
    }
}
renderCubes(arraycubes);
function cubeClick(event){
    let cubeId = Number(event.target.id.slice(6));
    arraycubes.map((cube, index) =>{
        if (index = cubeId){
            cube.view = true;
        }
    });
    renderCubes(arrayCubes);
}