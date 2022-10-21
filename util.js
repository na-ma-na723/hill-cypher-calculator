const hillCppCode = `// HILL CYPHER
#include <iostream>
#include <vector>
#include<string>
using namespace std;

string arrToString(vector<int> ori) {
    string s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    string res = "";
    for(int i=0; i<ori.size(); i++) {
        res += s[ ori[i] ];
    }
    return res;
}

vector<vector<int>> keymatrix(string key,int n) {
    
    int ch=0;
    vector<vector<int>> res;
    for(int i=0; i<n; i++) {
        vector<int> temp;
        for(int j=0; j<n; j++) {
            int t = key[ch];
            temp.push_back(t - 65);
            ch++;
        }
        res.push_back(temp);
    }
    return res;
}

string encrypt1(vector<vector<int>> res, vector<int> msg , int n ) {
    vector<int> ori;
    for(int i=0; i<n; i++) {
        int temp = 0;
        for(int j=0; j<n; j++) {
            temp += msg[j]*res[j][i];
        }
        ori.push_back(temp); 
    }
    for(int i=0; i<n; i++) {
        ori[i] %= 26;
    }
    string r = arrToString(ori);
    return r;
}

string encrypt2(vector<vector<int>> res, vector<int> msg , int n ) {
    vector<int> ori;
    for(int i=0; i<n; i++) {
        int temp = 0;
        for(int j=0; j<n; j++) {
            temp += msg[j]*res[i][j];
        }
        ori.push_back(temp); 
    }
    for(int i=0; i<n; i++) {
        ori[i] %= 26;
    }
    string r = arrToString(ori);
    return r;
}

int main() {
    string key = "GYBNQKURP", plain = "ACT";
    
    vector<int> msg, ori;
    
    int l = plain.length();
    
    for(int i=0; i<l; i++) {
        int temp = plain[i];
        msg.push_back(temp - 65);
    }
    
    vector<vector<int>> res = keymatrix("GYBNQKURP", 3 );

    string cypher1 = encrypt1(res, msg, l), cypher2 = encrypt2(res, msg, l);
    
    cout<<"Cypher Text 1 -> "<<cypher1<< "\n" <<"Cypher Text 2 -> "<<cypher2;
    
    return 0;
}`

const hillPyCode = `# HILL CYPHER
def arrToString(cypher):
    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    res= ""
    for i in cypher:
        res += s[i]
    
    return res
    
def keyMatrix(key, n):
    res = [[0]*n for i in range(n)]
    ch = 0
    for i in range(n):
        for j in range(n):
            res[i][j] = (ord(key[ch]) - 65)
            ch += 1
    return res
 
def plainArr(plain):
    res = []
    for i in plain:
        res.append(ord(i)-65)
    return res

def encrypt(key, plain, n):
    res = []
    for i in range(0,n):
        temp = 0
        for j in range(0,n):
            temp += plain[j]*key[j][i]
        res.append(temp)  
    for i in range(n):
        res[i] %= 26
        
    res = arrToString(res)
    return res
    
def encrypt2(key, plain, n):
    res = []
    
    for i in range(n):
        temp = 0
        for j in range(n):
            temp += key[i][j] * plain[j]
        res.append(temp)
    
    for i in range(n):
        res[i] %= 26
        
    res = arrToString(res)
    return res





key = "GYBNQKURP"
plain = "ACT"

keyMat = keyMatrix(key, 3)
plainA = plainArr(plain)

cypher1 = encrypt(keyMat, plainA, len(plain))
cypher2 = encrypt2(keyMat, plainA, len(plain))
print("CYPHER TEXT 1 -> ",cypher1)
print("CYPHER TEXT 2 -> ",cypher2)`

const hillJsCode = `// HILL CYPHER
function arrToString(cypher) {
    let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = "";
    for(let i of cypher ){
        res += s[i];
    }
    return res;
}

function keyMatrix(key, n) {
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

function plainArr(plain) {
    let res = [];
    for(let i=0; i<plain.length; i++) {
        res.push( plain.charCodeAt(i) - 65 );
    }
    return res;
}

function encrypt(key, plain, n) {
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
    let ans = arrToString(res);
    return ans;
}

function encrypt2(key, plain, n) {
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
    let ans = arrToString(res);
    return ans;
}

let key = "GYBNQKURP", plain = "ACT";

let keyMat = keyMatrix(key, 3);
let plainA = plainArr(plain);

let cypher1 = encrypt(keyMat, plainA, plain.length );
let cypher2 = encrypt2(keyMat, plainA, plain.length)
console.log("CYPHER TEXT 1 -> ",cypher1);
console.log("CYPHER TEXT 2 -> ",cypher2)
`