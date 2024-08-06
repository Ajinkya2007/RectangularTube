document.querySelector(".button").addEventListener('click',()=>{
    let len = parseFloat(document.querySelector(".length").value)
    let brd = parseFloat(document.querySelector(".breadth").value)
    let thickness = parseFloat(document.querySelector(".thickness").value)
    let outArea = (len * brd);
    let inLen = len - (2 * thickness)
    let inBrd = brd - (2 * thickness)
    let inArea = (inLen * inBrd);
    let formulaAreaMM = ((outArea)-(inArea));
    let formulaArea = (formulaAreaMM * 0.000001)
    let formulaWt = ((formulaArea) * 7850).toFixed(3);
    document.querySelector(".result").innerHTML=`The weight of tube is ${formulaWt} kg`
  })