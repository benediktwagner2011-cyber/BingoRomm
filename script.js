// Funktion: Zahl -> römische Zahl
function intToRoman(num) {
    const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let roman = "";
    for (let i=0;i<val.length;i++){
        while(num>=val[i]){
            roman+=syms[i];
            num-=val[i];
        }
    }
    return roman;
}

// Alle Zahlen vorbereiten
let numbers = [];
for (let i=1; i<=50; i++){
    numbers.push(i);
}

// Liste mischen
function shuffle(array){
    for (let i=array.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(numbers);

// Zahl ziehen
function drawNumber(){
    if(numbers.length === 0){
        alert("Alle Zahlen wurden gezogen!");
        return;
    }
    const n = numbers.pop(); // letzte Zahl aus Liste
    document.getElementById("drawn-number").innerText = intToRoman(n);
}

// Reset
function resetNumbers(){
    numbers = [];
    for (let i=1; i<=50; i++) numbers.push(i);
    shuffle(numbers);
    document.getElementById("drawn-number").innerText = "–";
}

// Event-Listener
document.getElementById("draw-button").addEventListener("click", drawNumber);
document.getElementById("reset-button").addEventListener("click", resetNumbers);
