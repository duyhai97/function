let a = []; n="";
a[1] = 'B' ;a[2]='ạ';a[3]='n';a[4]=' ';a[5]='C';a[6]='ó';a[7]=' ';a[8]='T';a[9]='h';a[10]='í';a[11]='c';a[12]='h';a[13]=' ';a[14]='T';a[15]='ô';a[16]='i';a[17]=' ';a[18]='K';a[19]='h';a[20]='ô';a[21]='n';a[22]='g';a[23]=',';a[24]='T';a[25]='h';a[26]='ậ';a[27]='t';a[28]=' ';a[29]='l';a[30]='ò';a[31]='n';a[32]='g';a[33]=' ';a[34]='N';a[35]='h';a[36]='a';a[37]='!';
a[38]="!";a[39]="!"
function typeTextarea(){
    t = document.nhapchu.txt.value;
    j = t.length;
    if(j>0){
        for (let i = 1; i <= j; i++) {
            n = n + a[i];
            if(i === 39){
                document.nhapchu.txt.value = "";
                n = "";
            }

        }

    }
    document.nhapchu.txt.value = n;
    n = ""
    setTimeout("typeTextarea()", 1);
}
