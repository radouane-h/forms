function connecter()
{
var A1=document.getElementById('A1');
var A2=document.getElementById('A2');
var p1=document.getElementById('p1');p1.innerHTML=" ";
var p2=document.getElementById('p2');p2.innerHTML=" ";
var p3=document.getElementById('p3');p3.innerHTML=" ";
var p4=document.getElementById('p4');p4.innerHTML=" ";
var f1=document.getElementById('f1');
var f2=document.getElementById('f2');
var s1=document.getElementById('s1');
    if( A1.value=="")
    {
        p1.innerHTML='le nom est obligatoir !!';
        p1.style.color='red';
    }
    if(A2.value=="")
    {
        p2.innerHTML='le password est obligatoir !!';
        p2.style.color='red';
        return;
    }
    var reg=/^[a-z A-Z]{1,}$/
    if(reg.test(A1.value)==false)
    {
        p1.innerHTML='Eror enter just caractere !!';
        p1.style.color='red';
        p1.style.border='1px solide red';
        return;
    }
    var reg2=/^[0-9a-z A-Z]{8,16}$/
    if(reg2.test(A2.value)==false)
    {
        p2.innerHTML='Eror password  !!';
        p2.style.color='red';
        return;
    }
    if(f1.checked==true)
    {
        let i=s1.selectedIndex;
        if(i==0){
        p3.innerHTML='veuyer taper une ville valide';
        p3.style.color='red';
        
        return;
        }
    }
    let x=" Nom ="+A1.value+" ";
    x+="</br> Password ="+A2.value+" ";
    if(f1.checked==true)
    {
        let i=s1.selectedIndex;
        x+="</br>Ville ="+s1.options[i].text;
    }
    p4.innerHTML=x;
    p4.style.color='green';
}
function changer()
{
    var f1=document.getElementById('f1');
    var f2=document.getElementById('f2');
    var div1=document.getElementById('div1');
    if(f1.checked==true)
    {
        div1.style.display='block';
    }
    if(f2.checked==true)
    {
        div1.style.display='none';
    }
}