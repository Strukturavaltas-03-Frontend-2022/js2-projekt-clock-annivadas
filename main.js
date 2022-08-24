/*- Mutassa az órát, percet, másodpercet
- Az óra a user által használt időzóna szerint jelenítse meg az időt
- Az óra 24 órás formátumot használjon minden esetben
- A színeket szabadon választhatod meg
- Az óra a képernyő közepén jelenjen meg, azaz mind vertikálisan, mind horizontálisan legyen középre igazítva minden nézetben
- A háttérszín pontosan 1 képernyő széles és magas legyen minden nézetben
- Használd a Cyberverse betűtípust
- A betűméretet te választhatod meg*/

/*   const exactTime =() => {
    const timeNow = nowDate().toLocalTimeString((hu) /1000);
        document.querySelector('.clock') = timeNow;
    
} */  
  const exactTime = () => {
    const timeNow = new Date().toLocaleTimeString('hu');
    document.querySelector(".clock").innerHTML = timeNow;
    setTimeout(exactTime, 1000);
} 
