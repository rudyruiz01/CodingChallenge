// Fizzbuzz
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let word1 = document.getElementById("word1");
let word2 = document.getElementById("word2");
let fbNum = document.getElementById("fbNum");
let fbBtn = document.getElementById("fbSubmit");
let fbOutput = document.getElementById("fbOutput");

fbBtn.addEventListener("click", setfbValues);

function setfbValues() {
    let d1 = div1.value;
    let d2 = div2.value;
    let num = fbNum.value;
    let w1 = word1.value;
    let w2 = word2.value; 
    let output = fbOutput; 
    fizzbuzz(d1, d2, num, w1, w2, output);
    fbNum.value = "";
}

function fizzbuzz(d1, d2, num, w1, w2, output) { 
    output.innerHTML = "";
    if (num != '' && num >= 0) {        
        if (num % d1 == 0 && num % d2 == 0) {
            output.innerHTML = w1 + w2;
        } else if (num % d1 == 0) {
            output.innerHTML = w1;
        } else if (num % d2 == 0) {
            output.innerHTML = w2;
        } 
    }   
}

// Fibonacci Sequence
let yInput = document.getElementById("y");
let zInput = document.getElementById("z");
let fsNum = document.getElementById("fsNum");
let fsBtn = document.getElementById("fsSubmit");
let fsOutput = document.getElementById("fsOutput");

fsBtn.addEventListener("click", setfsValues);

function setfsValues() {
    let n = fsNum.value;    
    let y = yInput.value;
    let z = zInput.value;
    let string = "";
    let output = fsOutput;
    fib(n, y, z, string, output);
}

function fib(n, y, z, string, output) {
    for(let i=0; i<=n; i++) {
        if (i < n) {
            string += sum(i, y, z).toString() + ", ";
        } else {
            string += sum(i, y, z).toString();
        }        
    }
   output.innerHTML = string;
}

function sum(n, y, z) {   
    if (n==0) {
        return 0;
    } else if (n==1) {
        return 1;
    } else if (n-y < 0 || n-z < 0) {
        return 1;
    } else {        
        return sum(n-y, y, z) + sum(n-z, y, z);
    }
}

// Mix of both 
let mgDiv1 = document.getElementById("mgDiv1");
let mgDiv2 = document.getElementById("mgDiv2");
let mgWord1 = document.getElementById("mgWord1");
let mgWord2 = document.getElementById("mgWord2");
let mgNum = document.getElementById("mgNum");
let mgY = document.getElementById("mgY");
let mgZ = document.getElementById("mgZ");
let mgBtn = document.getElementById("mgSubmit");
let msOutput = document.getElementById("mgOutput");

mgBtn.addEventListener("click", setmgValues);

function setmgValues() {
    let d1 = mgDiv1.value;
    let d2 = mgDiv2.value;
    let w1 = mgWord1.value;
    let w2 = mgWord2.value; 
    let n = mgNum.value;    
    let y = mgY.value;
    let z = mgZ.value;
    let string = "";
    let output = msOutput;
    mixgame(d1, d2, w1, w2, n, y, z, string, output);
    mgNum.value = "";
}

function mixgame(d1, d2, w1, w2, n, y, z, string, output) {
    for(let i=0; i<=n; i++) {
        if (i < n) {
            let s = sum(i, y, z);
            if (s == d1) {
                string += w1 + ", ";
            } else if(s == d2) {
                string += w2 + ", ";
            } else {
                string += sum(i, y, z).toString() + ", ";
            }
        } else {
            let s = sum(i, y, z);
            if (s == d1) {
                string += w1 + ", ";
            } else if(s == d2) {
                string += w2 + ", ";
            } else {
                string += sum(i, y, z).toString();
            }
        }        
    }
   output.innerHTML = string;
}