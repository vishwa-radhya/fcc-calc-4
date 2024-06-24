// let ret='2.34.4.5+5.66.2-44.5.5';
// let arjo=[];
// for(let i=0;i<ret.length;i++){
//     if(['+','-'].includes(ret[i])){
//         arjo.push(ret[i]);
//     }
// }
// console.log(arjo);
// let str='2.34.4.5$5.66.2$44.5.5';
// let ar = str.split('$')
// let a2 =ar.map(word=>{
//     let c=0;
//     let nw=[];
//     for(let i=0;i<word.length;i++){
//         if(['.'].includes(word[i])){
//             c+=1;
//             nw.push(i);
//         }
//     }
//     if(c>1){
//         for(let i=c-1;i>0;i--){
//             word=word.slice(0,nw[i])+word.slice(nw[i]+1,word.length);
//         }
//     }
//     return word;
// })
// let a3=a2.join('$');
// let c=-1;
// for(let i=0;i<a3.length;i++){
//     if(['$'].includes(a3[i])){
//         a3=a3.slice(0,i)+arjo[++c]+a3.slice(i+1,a3.length);
//     }
// }
// console.log(a3);
// let tt ='2.33..4';
// let c=0;
// for(let i=0;i<tt.length;i++){
//     if(['.'].includes(tt[i])){
//         c+=1;
//     }
// }
// if(c>1){
//     console.log('tru');
// }else{
//     console.log('fal');
// }

console.log(/[+\-\\÷\\%]/.test('12.3.3%'));
