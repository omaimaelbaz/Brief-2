
// function aficher le menu de bar lorsque en clique sur le menu icone
function aficherNavbar()
{
    var menu=document.getElementById("nav");
    if(menu.className === "navhidden")
    {
        menu.classList.add('blockNav');
    }else  {
        menu.classList.remove('blockNav');
    } 
}
// aficher les category 
function aficherCategory()
{
    var list = document.getElementById("topMenu");
    if(list.style.display =='none')
    {
        list.style.display ='block';

    }
    else
    {
        list.style.display ='none';
        
    }
}
// aficher  le panier 
function aficherPanier()
{
listPanier = document.getElementById("panier");
if(listPanier.style.display==='none')
{
    listPanier.style.display='block';
}
else
{
    listPanier.style.display='none';

}
console.log(listPanier);
}
//l ajoute des produits dans le panier !!!

var total =0;
function ajouterPanier(src)
{
     var addPanier = document.getElementById("panier2");
     var  panierContent = addPanier.innerHTML;
     panierContent = panierContent + "<div class ='panier-product-card' > <div class='img-title-panier'><img src='./logo/"+src+"' alt> <p>Lorem ipsum dolor</p> </div><span> 1</span> <span>1200$</span> </div>"
    //  console.log(panierContent);
    addPanier.innerHTML=panierContent;
    var totalPrice = document.getElementById('total');
    total+= 1200;
   
    totalPrice.innerHTML = total;
}

// regex  "email validation"


function validEmail()
{
    var email =document.getElementById('mail');
    // "^[A-Za-z0-9]+@(gmail|outlook)/.[A-Za-z]{2,4}$"/
    var reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/
    if (email.value.match(reg))
    {
        email.style.border='3px solid green';
    }
    else {
        email.style.border='3px solid  red';
        emailMes.innerHTML='Invalide Email / * format exemle@gmail.com .../';
    }
}







