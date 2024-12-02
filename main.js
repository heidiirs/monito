canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.



background_image = "YiLi.gif";

monito_image = "monito.jpg";

monito_x = 10;
monito_y = 10;



function add(){
    background_imgTag= new Image();
    background_imgTag.onload =uploadBackground;
    background_imgTag.src= background_image;

    monito_imgTag= new Image ();
    monito_imgTag.onload =uploadmonito;
    monito_imgTag.src= monito_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadmonito(){
    ctx.drawImage(monito_imgTag, monito_x, monito_y, 100,98)
}




	
    

    function my_keydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);
            if(keyPressed == '38')
            {
                up();
            }
            if(keyPressed == '40')
            {
                down();
            }

            if(keyPressed == '37')
            {
                left();
            }
            if(keyPressed == '39')
            {
                right();
            }
        
    }
	window.addEventListener("keydown", my_keydown);
    
    function up()
    {
        if(monito_y >=0)
        {
            monito_y = monito_y - 10;
                uploadBackground();
                uploadmonito();
        }
    }
    function down()
    {
	    if(monito_y <=500)
        {
        
            monito_y =monito_y+ 10;
                uploadBackground();
                uploadmonito();
        }
    }
    function left()
    {
        if(monito_x >=0)
            {
                monito_x = monito_x - 10;
                    uploadBackground();
                    uploadmonito();
            }
    }
    function right()
    {
        if(monito_x <=500)
            {
            
                monito_x =monito_x+ 10;
                    uploadBackground();
                    uploadmonito();
            }
    }


