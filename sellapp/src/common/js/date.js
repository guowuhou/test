export function formatDate(date,fmt){
    var seperator1="-";
    var seperator2=":";
    var month = date.getMonth()+1;
    var strDate=date.getDate();
    if(month>=1&&month<=9){
        month="0"+month;
    };
    if(strDate>=1&&strDate<=9){
        strDate="0"+strDate;
    };
    var currentDate=date.getFullYear()+seperator1+month+seperator1+strDate
              +" "+date.getHours()+seperator2+date.getMinutes()+seperator2+date.getSeconds();
     return currentDate
    // if(/(y+)/.test(fmt)){
    //   let fmts =fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));
    //     let o={
    //         'M+':date.getMonth()+1,
    //         'd+':date.getDate(),
    //         'h+':date.getHours(),
    //         'm+':date.getMinutes(),
    //         's+':date.getSeconds()
    //     };
    //     for(let k in o){
    //         if(new RegExp(`(${k})`).test(fmt)){
    //              let str =o[k]+'',
    //              fmts =fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeftZero(str));
    //         }
    //     }
    //    return fmts;
    // }
};
//  function padLeftZero(str){
//             return ('00'+str).substr(str.length);
//         }