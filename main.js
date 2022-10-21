const inputText = document.getElementById("inputText");
const outputText1 = document.getElementById("outputText1");
const outputText2 = document.getElementById("outputText2");
const key = document.getElementById("key");

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

    msg = msg.toUpperCase();
    keyIn = keyIn.toUpperCase();

    let keyMat = hillKeyMatrix(keyIn, msg.length);
    let plainA = hillPlainArr(msg);

    let cyphertext = hillEncrypt1(keyMat, plainA, msg.length );

    return cyphertext;
}
function hillEncrypt2Call(msg, keyIn) {

    msg = msg.toUpperCase();
    keyIn = keyIn.toUpperCase();

    let keyMat = hillKeyMatrix(keyIn, msg.length);
    let plainA = hillPlainArr(msg);

    let cyphertext = hillEncrypt2(keyMat, plainA, msg.length );

    return cyphertext;
}

function encryptButtonCall() {
    outputText1.value = hillEncrypt1Call(inputText.value, key.value);
}

function decryptButtonCall() {
    outputText2.value = hillEncrypt2Call(inputText.value, key.value);;
}


document.querySelector("#encryptButton1").addEventListener("click",encryptButtonCall)
document.querySelector("#encryptButton2").addEventListener("click",decryptButtonCall)

hillActiveCode.innerText = hillCppCode;
const copyText = document.getElementById("copyButton");
const copiedText = document.getElementById("activeCode");
// const tempTextArea = document.createElement('textarea');

copyText.addEventListener("click", ()=>{
    navigator.clipboard.writeText(copiedText.innerText);
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

        cppBtn.classList.add('selected');
        pyBtn.classList.add('notSelected');
        jsBtn.classList.add('notSelected');

        cppBtn.classList.remove("notSelected");
        pyBtn.classList.remove("selected");
        jsBtn.classList.remove("selected");

        hillActiveCode.innerText = hillCppCode;

    }

})

pyBtn.addEventListener("click", ()=>{

    if(pyBtn.value === "notselected"){

        cppBtn.value = "notselected";
        pyBtn.value = "selected";
        jsBtn.value = "notselected";

        cppBtn.classList.add("notSelected");
        pyBtn.classList.add("selected");
        jsBtn.classList.add("notSelected");

        cppBtn.classList.remove("selected");
        pyBtn.classList.remove("notSelected");
        jsBtn.classList.remove("selected");
        
        hillActiveCode.innerText = hillPyCode;

    }

})

jsBtn.addEventListener("click", ()=>{

    if(jsBtn.value === "notselected"){

        cppBtn.value = "notselected";
        pyBtn.value = "notselected";
        jsBtn.value = "selected";

        cppBtn.classList.add("notSelected");
        pyBtn.classList.add("notSelected");
        jsBtn.classList.add("selected");

        cppBtn.classList.remove("selected");
        pyBtn.classList.remove("selected");
        jsBtn.classList.remove("notSelected");

        hillActiveCode.innerText = hillJsCode;
    }
})