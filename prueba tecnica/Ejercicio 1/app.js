var getData = function(){
    var distance = document.getElementById("distance").value;
    var days = document.getElementById("days").value;
    var price = (distance*35)
    if (distance >1000 && days > 7){
        
        var priceDiscount = price-(price*0.3)  
        swal("El precio del tiquete es " + priceDiscount +" " +"pesos");  
    } else{
        swal("El precio del tiquete es " + price + " "+"pesos");  
    }
   
    
}