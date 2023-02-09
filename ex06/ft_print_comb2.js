
function combinaison2 () {
    let i;
    let j;
    let k;
    let l;
    for (i=0;i<=9;i++){
        for(j=0;j<=9;j++){
            for(k=0;k<=9;k++){
                for(l=0;l<=9;l++){
                    console.log('%d%d %d%d',i,j,k,l)
                }
            }        
        }
    }
}

combinaison2();
