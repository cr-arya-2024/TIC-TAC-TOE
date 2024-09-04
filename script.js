let arr=Array(25).fill(null)
let trun="X"
handlefunction=(ele)=>{
    id=ele.id;
    if(arr[id]!==null)return;
    arr[id]=trun;
    ele.innerText=trun;
    checkWinner()
    trun=trun==="X" ? "O" : "X";
}
checkWinner=()=>{
    if((arr[0]!==null && arr[1]===arr[2] && arr[2]===arr[3] && arr[3]===arr[0])||
    (arr[0]!==null && arr[5]===arr[0] && arr[10]===arr[0] && arr[15]===arr[0])||
    (arr[0]!==null && arr[6]===arr[0] && arr[6]===arr[12] && arr[12]===arr[18])||
    (arr[1]!==null && arr[1]===arr[6] && arr[6]===arr[11] && arr[11]===arr[16])||
    (arr[2]!==null && arr[2]===arr[7] && arr[7]===arr[12] && arr[12]===arr[17])||
    (arr[3]!==null && arr[3]===arr[8] && arr[8]===arr[13] && arr[13]===arr[18])||
    (arr[4]!==null && arr[4]===arr[9] && arr[9]===arr[14] && arr[14]===arr[19])||
    (arr[3]!==null && arr[3]===arr[7] && arr[7]===arr[11] && arr[11]===arr[15])||
    (arr[1]!==null && arr[1]===arr[7] && arr[7]===arr[13] && arr[13]===arr[19])||
    (arr[4]!==null && arr[4]===arr[8] && arr[8]===arr[12] && arr[12]===arr[16])||
    (arr[1]!==null && arr[1]===arr[2] && arr[2]===arr[3] && arr[3]===arr[4])||
    (arr[5]!==null && arr[5]===arr[11] && arr[11]===arr[17] && arr[17]===arr[23])||
    (arr[7]!==null && arr[7]===arr[12] && arr[12]===arr[17] && arr[17]===arr[22])||
    (arr[5]!==null && arr[5]===arr[6] && arr[6]===arr[7] && arr[7]===arr[8])||
    (arr[5]!==null && arr[5]===arr[10] && arr[10]===arr[15] && arr[15]===arr[20])||
    (arr[20]!==null && arr[20]===arr[16] && arr[16]===arr[12] && arr[12]===arr[8])||
    (arr[6]!==null && arr[6]===arr[12] && arr[12]===arr[18] && arr[18]===arr[24])||
    (arr[6]!==null && arr[6]===arr[7] && arr[7]===arr[8] && arr[8]===arr[9])||
    (arr[8]!==null && arr[8]===arr[13] && arr[13]===arr[18] && arr[18]===arr[23])||
    (arr[8]!==null && arr[8]===arr[12] && arr[12]===arr[16] && arr[16]===arr[20])||
    (arr[6]!==null && arr[6]===arr[11] && arr[16]===arr[16] && arr[16]===arr[21])||
    (arr[9]!==null && arr[9]===arr[13] && arr[13]===arr[17] && arr[17]===arr[21])||
    (arr[9]!==null && arr[9]===arr[14] && arr[14]===arr[19] && arr[19]===arr[24])||
    (arr[10]!==null && arr[10]===arr[11] && arr[11]===arr[12] && arr[12]===arr[13])||
    (arr[11]!==null && arr[11]===arr[12] && arr[12]===arr[13] && arr[13]===arr[14])||
    (arr[15]!==null && arr[15]===arr[16] && arr[16]===arr[17] && arr[17]===arr[18])||
    (arr[19]!==null && arr[19]===arr[18] && arr[18]===arr[17] && arr[17]===arr[16])||
    (arr[20]!==null && arr[20]===arr[21] && arr[21]===arr[22] && arr[22]===arr[23])||
    (arr[24]!==null && arr[24]===arr[23] && arr[23]===arr[22] && arr[21]===arr[22])
){
document.write(`Winner is ${trun}`)
}
if(!arr.some(ele=>ele===null)){
    document.write(`OOPS its a draw`)
}
}