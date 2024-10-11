//PK Project

function randomPK(){
  const numOfPK = document.getElementById("numOfPK").value;
  const pkResult = document.getElementById("pkResult");
  const pkImages = document.getElementById("pkImages");
  const values = [];
  const images = [];
  let exists;
  
  if(numOfPK > 6 || numOfPK < 1){

    location.reload();

  }else{
  for(let i = 0; i < numOfPK; i++){
    do{
      const value = Math.floor(Math.random() * 151) +1;
      exists = values.includes(value);
      if(!exists){
        values.push(value);
        images.push(`<img src="PK/${value}.png"alt ="Pokémon # ${value}">`);
      }
    }while(exists);
  }}
  
  pkResult.textContent = `:.Pokédex Number.: ${values.join(', ')}`;
  pkImages.innerHTML = images.join('');
}

