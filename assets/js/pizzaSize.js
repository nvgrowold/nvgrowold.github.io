//link size options to different prices for card 1
function productPrice1() {
    var Size = document.getElementById("size1").value;
    var newPrice;
    if (Size == "Small")
     {
        newPrice = 12.66
        newName = "Pepperoni (s)"
        document.getElementById("product-price1").innerHTML = "$" + newPrice;
        $('#item1').attr('data-price', newPrice);
        $('#item1').attr('data-name', newName);

     }
     else if (Size == "Medium")  
     {
        newPrice = 15.66
        newName = "Pepperoni (M)"
        document.getElementById("product-price1").innerHTML = "$" + newPrice;
        $('#item1').attr('data-price', newPrice);
        $('#item1').attr('data-name', newName);

     } 
     else if (Size == "Large")  
     {
        newPrice = 18.66
        newName = "Pepperoni (L)"
        document.getElementById("product-price1").innerHTML = "$" + newPrice;
        $('#item1').attr('data-price', newPrice);
        $('#item1').attr('data-name', newName);

     } 
     else if (Size == "ExtraLarge")  
     {
        newPrice = 22.66
        newName = "Pepperoni (XL)"
        document.getElementById("product-price1").innerHTML = "$" + newPrice;
        $('#item1').attr('data-price', newPrice);
        $('#item1').attr('data-name', newName);

     } 
    
  }
  //link size options to different prices for card 2
function productPrice2() {
    var Size = document.getElementById("size2").value;
    var newPrice;
    if (Size == "Small")
     {
        newPrice = 15.66;
        newName = "Prosciutto (S)";
        document.getElementById("product-price2").innerHTML = "$" + newPrice;
        $('#item2').attr('data-price', newPrice);
        $('#item2').attr('data-name', newName);

     }
     else if (Size == "Medium")  
     {
        newPrice = 18.66;
        newName = "Prosciutto (M)";
        document.getElementById("product-price2").innerHTML = "$" + newPrice;
        $('#item2').attr('data-price', newPrice);
        $('#item2').attr('data-name', newName);

     } 
     else if (Size == "Large")  
     {
        newPrice = 22.66
        newName = "Prosciutto (L)";
        document.getElementById("product-price2").innerHTML = "$" + newPrice;
        $('#item2').attr('data-price', newPrice);
        $('#item2').attr('data-name', newName);

     } 
     else if (Size == "ExtraLarge")  
     {
        newPrice = 26.66
        newName = "Prosciutto (XL)";
        document.getElementById("product-price2").innerHTML = "$" + newPrice;
        $('#item2').attr('data-price', newPrice);
        $('#item2').attr('data-name', newName);
        

     } 
    
  }
    //link size options to different prices for card 3
function productPrice3() {
    var Size = document.getElementById("size3").value;
    var newPrice;
    if (Size == "Small")
     {
        newPrice = 18;
        newName = "Alla Capricciosa (S)";
        document.getElementById("product-price3").innerHTML = "$" + newPrice;
        $('#item3').attr('data-price', newPrice);
        $('#item3').attr('data-name', newName);

     }
     else if (Size == "Medium")  
     {
        newPrice = 22;
        newName = "Alla Capricciosa (M)";
        document.getElementById("product-price3").innerHTML = "$" + newPrice;
        $('#item3').attr('data-price', newPrice);
        $('#item3').attr('data-name', newName);

     } 
     else if (Size == "Large")  
     {
         newPrice = 26;
        newName = "Alla Capricciosa (L)";
        document.getElementById("product-price3").innerHTML = "$" + newPrice;
        $('#item3').attr('data-price', newPrice);
        $('#item3').attr('data-name', newName);

     } 
     else if (Size == "ExtraLarge")  
     {
        newPrice = 31;
        newName = "Alla Capricciosa (XL)";
        document.getElementById("product-price3").innerHTML = "$" + newPrice;
        $('#item3').attr('data-price', newPrice);
        $('#item3').attr('data-name', newName);

     } 

    
  }
      //link size options to different prices for card 4
function productPrice4() {
    var Size = document.getElementById("size4").value;
    var newPrice;
    if (Size == "Small")
     {
        newPrice = 14.66;
        newName = "Napoletana (S)";
        document.getElementById("product-price4").innerHTML = "$" + newPrice;
        $('#item4').attr('data-price', newPrice);
        $('#item4').attr('data-name', newName);

     }
     else if (Size == "Medium")  
     {
        newPrice = 17.66;
        newName = "Napoletana (M)";
        document.getElementById("product-price4").innerHTML = "$" + newPrice;
        $('#item4').attr('data-price', newPrice);
        $('#item4').attr('data-name', newName);

     } 
     else if (Size == "Large")  
     {
        newPrice = 20.66;
        newName = "Napoletana (L)";
        document.getElementById("product-price4").innerHTML = "$" + newPrice;
        $('#item4').attr('data-price', newPrice);
        $('#item4').attr('data-name', newName);

     } 
     else if (Size == "ExtraLarge")  
     {
        newPrice = 26.66;
        newName = "Napoletana (XL)";
        document.getElementById("product-price4").innerHTML = "$" + newPrice;
        $('#item4').attr('data-price', newPrice);
        $('#item4').attr('data-name', newName);

     } 
}
    

      //link size options to different prices for card 5
function productPrice5() {
    var Size = document.getElementById("size5").value;
    var price
    if (Size == "Small")
     {
        newPrice = 15.99;
        newName = "Gluttony (S)";
        document.getElementById("product-price5").innerHTML = "$" + newPrice;
        $('#item5').attr('data-price', newPrice);
        $('#item5').attr('data-name', newName);

     }
     else if (Size == "Medium")  
     {
        newPrice = 18.99;
        newName = "Gluttony (M)";
        document.getElementById("product-price5").innerHTML = "$" + newPrice;
        $('#item5').attr('data-price', newPrice);
        $('#item5').attr('data-name', newName);

     } 
     else if (Size == "Large")  
     {
        newPrice = 22.99;
        newName = "Gluttony (L)";
        document.getElementById("product-price5").innerHTML = "$" + newPrice;
        $('#item5').attr('data-price', newPrice);
        $('#item5').attr('data-name', newName);

     } 
     else if (Size == "ExtraLarge")  
     {
        newPrice = 28.99;
        newName = "Gluttony (XL)";
        document.getElementById("product-price5").innerHTML = "$" + newPrice;
        $('#item5').attr('data-price', newPrice);
        $('#item5').attr('data-name', newName);

     } 
    
  }
      //link size options to different prices for card 6
function productPrice6() {
    var Size = document.getElementById("size6").value;
    var price;
    if (Size == "Small")
     {
        newPrice = 15;
        newName = "Pride (S)";
        document.getElementById("product-price6").innerHTML = "$" + newPrice;
        $('#item6').attr('data-price', newPrice);
        $('#item6').attr('data-name', newName);
     }
     else if (Size == "Medium")  
     {
        newPrice = 18;
        newName = "Pride (M)";
        document.getElementById("product-price6").innerHTML = "$" + newPrice;
        $('#item6').attr('data-price', newPrice);
        $('#item6').attr('data-name', newName);

     } 
     else if (Size == "Large")  
     {
        newPrice = 22;
        newName = "Pride (L)";
        document.getElementById("product-price6").innerHTML = "$" + newPrice;
        $('#item6').attr('data-price', newPrice);
        $('#item6').attr('data-name', newName);

     } 
     else if (Size == "ExtraLarge")  
     {
        newPrice = 28;
        newName = "Pride (XL)";
        document.getElementById("product-price6").innerHTML = "$" + newPrice;
        $('#item6').attr('data-price', newPrice);
        $('#item6').attr('data-name', newName);

     } 
    
  }
  //Pizza page items
   //link size options to different prices for card 7
  function productPrice7() {
   var Size = document.getElementById("size6").value;
   var price
   if (Size == "Small")
    {
       price = 12
       document.getElementById("product-price6").innerHTML = "$" + price

    }
    else if (Size == "Medium")  
    {
       price = 15
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Large")  
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "ExtraLarge")  
    {
       price = 22
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Standard")
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price
    }
   
 }
 //link size options to different prices for card 8
 function productPrice8() {
   var Size = document.getElementById("size6").value;
   var price
   if (Size == "Small")
    {
       price = 12
       document.getElementById("product-price6").innerHTML = "$" + price

    }
    else if (Size == "Medium")  
    {
       price = 15
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Large")  
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "ExtraLarge")  
    {
       price = 22
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Standard")
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price
    }
   
 }
 //link size options to different prices for card 9
 function productPrice9() {
   var Size = document.getElementById("size6").value;
   var price
   if (Size == "Small")
    {
       price = 12
       document.getElementById("product-price6").innerHTML = "$" + price

    }
    else if (Size == "Medium")  
    {
       price = 15
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Large")  
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "ExtraLarge")  
    {
       price = 22
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Standard")
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price
    }
   
 }
 //link size options to different prices for card 10
 function productPrice10() {
   var Size = document.getElementById("size6").value;
   var price
   if (Size == "Small")
    {
       price = 12
       document.getElementById("product-price6").innerHTML = "$" + price

    }
    else if (Size == "Medium")  
    {
       price = 15
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Large")  
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "ExtraLarge")  
    {
       price = 22
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Standard")
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price
    }
   
 }
 //link size options to different prices for card 11
 function productPrice11() {
   var Size = document.getElementById("size6").value;
   var price
   if (Size == "Small")
    {
       price = 12
       document.getElementById("product-price6").innerHTML = "$" + price

    }
    else if (Size == "Medium")  
    {
       price = 15
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Large")  
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "ExtraLarge")  
    {
       price = 22
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Standard")
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price
    }
   
 }
 //link size options to different prices for card 12
 function productPrice12() {
   var Size = document.getElementById("size6").value;
   var price
   if (Size == "Small")
    {
       price = 12
       document.getElementById("product-price6").innerHTML = "$" + price

    }
    else if (Size == "Medium")  
    {
       price = 15
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Large")  
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "ExtraLarge")  
    {
       price = 22
       document.getElementById("product-price6").innerHTML = "$" + price

    } 
    else if (Size == "Standard")
    {
       price = 18
       document.getElementById("product-price6").innerHTML = "$" + price
    }
   
 }