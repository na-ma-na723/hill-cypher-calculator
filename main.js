const inputText = document.getElementById("inputText");
const outputText1 = document.getElementById("outputText1");
const outputText2 = document.getElementById("outputText2");
const key = document.getElementById("key");

// console.log(vigenereCppCode);

const cppBtn = document.getElementById("cppButton");
const pyBtn = document.getElementById("pyButton");
const jsBtn = document.getElementById("jsButton");

const hillActiveCode = document.getElementById("activeCode");

function hillArrToString(cypher) {
    let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = "";
    for(let i of cypher ){
        res += s[i];
    }
    return res;
}

function hillKeyMatrix(key, n) {
    let res = [];
    let ch = 0;
    for(let i=0; i<n; i++) {
        let temp = [];
        for(let j=0; j<n; j++) {
            temp.push( key.charCodeAt(ch) - 65 );
            ch++;
        }
        // console.log(temp)
        res.push(temp);
    }
    
    return res;
}

function hillPlainArr(plain) {
    let res = [];
    for(let i=0; i<plain.length; i++) {
        res.push( plain.charCodeAt(i) - 65 );
    }
    return res;
}

function hillEncrypt1(key, plain, n) {
    let res = [];
    for(let i=0; i<n; i++) {
        let temp = 0;
        for(let j=0; j<n; j++) {
            temp += plain[j]*key[j][i];
        }
        res.push(temp);
    }
    for(let i=0; i<n; i++) {
        res[i] %= 26;
    }
    let ans = hillArrToString(res);
    return ans;
}

function hillEncrypt2(key, plain, n) {
    let res = [];
    for(let i=0; i<n; i++) {
        let temp = 0;
        for(let j=0; j<n; j++) {
            temp += key[i][j] * plain[j];
        }
        res.push(temp);
    }
    for(let i=0; i<n; i++) {
        res[i] %= 26;
    }
    let ans = hillArrToString(res);
    return ans;
}

function hillEncrypt1Call(msg ,keyIn) {
    // let msg = document.getElementById("inputText").value;
    // let keyIn = document.getElementById("key").value;

    msg = msg.toUpperCase();
    keyIn = keyIn.toUpperCase();

    let keyMat = hillKeyMatrix(keyIn, msg.length);
    let plainA = hillPlainArr(msg);

    let cyphertext = hillEncrypt1(keyMat, plainA, msg.length );

    return cyphertext;
}
function hillEncrypt2Call(msg, keyIn) {
    // let msg = document.getElementById("outWindow").value;
    // let keyIn = document.getElementById("key").value;

    msg = msg.toUpperCase();
    keyIn = keyIn.toUpperCase();

    let keyMat = hillKeyMatrix(keyIn, msg.length);
    let plainA = hillPlainArr(msg);

    let cyphertext = hillEncrypt2(keyMat, plainA, msg.length );

    return cyphertext;
}


function vigenereEncryptCall(msg, keyIn) {
    msg = msg.toLowerCase();
    keyIn = keyIn.toLowerCase();

    let cyphertext = vigenereEncrypt(msg, keyIn);

    return cyphertext;
}

function vigenereDecryptCall(cypherIn, keyIn) {
    cypherIn = cypherIn.toLowerCase();
    keyIn = keyIn.toLowerCase();

    let ori = vigenereDecrypt(cypherIn, keyIn);

    return ori;
}

function encryptButtonCall() {
    outputText1.value = hillEncrypt1Call(inputText.value, key.value);
}

function decryptButtonCall() {
    outputText2.value = hillEncrypt2Call(inputText.value, key.value);;
}


document.querySelector("#encryptButton").addEventListener("click",encryptButtonCall)
document.querySelector("#decryptButton").addEventListener("click",decryptButtonCall)

hillActiveCode.innerText = hillCppCode;
const copyText = document.getElementById("copyButton");
const copiedText = document.getElementById("activeCode");
// const tempTextArea = document.createElement('textarea');

copyText.addEventListener("click", ()=>{
    // tempTextArea.textContent = copiedText;
    // document.body.append(tempTextArea);
    // tempTextArea.select();
    // document.execCommand("copy");
    navigator.clipboard.writeText(copiedText.innerText);
    // tempTextArea.remove();
    copyText.classList.add('copied');

    setTimeout(()=>{
        copyText.classList.remove('copied');
    },700)
})


cppBtn.addEventListener("click", ()=>{

    if(cppBtn.value === "notselected"){

        cppBtn.value = "selected";
        pyBtn.value = "notselected";
        jsBtn.value = "notselected";

        // cppBtn.style.backgroundColor = "#272822";
        // pyBtn.style.backgroundColor = "#131417";
        // jsBtn.style.backgroundColor = "#131417";

        // cppBtn.style.border = "2px solid white"
        // pyBtn.style.border = "0";
        // jsBtn.style.border = "0";

        // cppBtn.style.borderBottom = "0";
        // pyBtn.style.borderBottom = "2px solid white";
        // jsBtn.style.borderBottom = "2px solid white";

        // cppBtn.style.color = "white";
        // pyBtn.style.color = "yellow";
        // jsBtn.style.color = "yellow";
        
        // cppCode.style.opacity = "1" ;
        // pyCode.style.opacity = "0" ;
        // jsCode.style.opacity = "0" ;

        cppBtn.classList.add('selected');
        pyBtn.classList.add('notSelected');
        jsBtn.classList.add('notSelected');

        cppBtn.classList.remove("notSelected");
        pyBtn.classList.remove("selected");
        jsBtn.classList.remove("selected");

        hillActiveCode.innerText = hillCppCode;

        // cppCode.style.height = "100%";
        // pyCode.style.height = "0";
        // jsCode.style.height = "0";
    }

})

pyBtn.addEventListener("click", ()=>{

    if(pyBtn.value === "notselected"){

        cppBtn.value = "notselected";
        pyBtn.value = "selected";
        jsBtn.value = "notselected";

        // cppBtn.style.backgroundColor = "#131417";
        // pyBtn.style.backgroundColor = "#272822";
        // jsBtn.style.backgroundColor = "#131417";

        // cppBtn.style.border = "0"
        // pyBtn.style.border = "2px solid white";
        // jsBtn.style.border = "0";

        // cppBtn.style.borderBottom = "2px solid white";
        // pyBtn.style.borderBottom = "0";
        // jsBtn.style.borderBottom = "2px solid white";

        // cppBtn.style.color = "yellow";
        // pyBtn.style.color = "white";
        // jsBtn.style.color = "yellow";

        cppBtn.classList.add("notSelected");
        pyBtn.classList.add("selected");
        jsBtn.classList.add("notSelected");

        cppBtn.classList.remove("selected");
        pyBtn.classList.remove("notSelected");
        jsBtn.classList.remove("selected");
        
        hillActiveCode.innerText = hillPyCode;

        // cppCode.style.opacity = "0" ;
        // pyCode.style.opacity = "1" ;
        // jsCode.style.opacity = "0" ;

        // cppCode.style.height = "0";
        // pyCode.style.height = "100%";
        // jsCode.style.height = "0";

    }

})

jsBtn.addEventListener("click", ()=>{

    if(jsBtn.value === "notselected"){

        cppBtn.value = "notselected";
        pyBtn.value = "notselected";
        jsBtn.value = "selected";

        // cppBtn.style.backgroundColor = "#131417";
        // pyBtn.style.backgroundColor = "#131417";
        // jsBtn.style.backgroundColor = "#272822";

        // cppBtn.style.border = "0"
        // pyBtn.style.border = "0";
        // jsBtn.style.border = "2px solid white";

        // cppBtn.style.borderBottom = "2px solid white";
        // pyBtn.style.borderBottom = "2px solid white";
        // jsBtn.style.borderBottom = "0";

        // cppBtn.style.color = "yellow";
        // pyBtn.style.color = "yellow";
        // jsBtn.style.color = "white";

        cppBtn.classList.add("notSelected");
        pyBtn.classList.add("notSelected");
        jsBtn.classList.add("selected");

        cppBtn.classList.remove("selected");
        pyBtn.classList.remove("selected");
        jsBtn.classList.remove("notSelected");

        hillActiveCode.innerText = hillJsCode;

        // cppCode.style.opacity = "0" ;
        // pyCode.style.opacity = "0" ;
        // jsCode.style.opacity = "1" ;

        // cppCode.style.height = "0";
        // pyCode.style.height = "0";
        // jsCode.style.height = "100%";
    }

})










