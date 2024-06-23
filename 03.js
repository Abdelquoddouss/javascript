// Vous obtenez un tableau de nombres, retournez la somme de tous les positifs.

function sumPositif(arr){
    let initvalue = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            initvalue += arr[i];
        }
    }
        return initvalue;
}

console.log(sumPositif([1,3,1,5,-2]));