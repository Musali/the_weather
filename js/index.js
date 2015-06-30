$(document).ready(function() {

    

	function convertTemp(){

        // retrieve values of id c and id f and store
        // into variables
		var C = $("#c").val();
		var F = $("#f").val();

        // C = "", F = "33.4"

        // if user entered farenheit value
        // -> if F is not empty ""
		if ( F !== ''){

            var temp = Math.round(((F) -32) * 5/9);
            // set the value of input with id C
			$('#c').val(temp);
			// $('#f').val = Math.round('F');
            $('#f').val('');

            weatherImage(temp);
		
        }else if( C !== ''){

            var ctemp = Math.round((C) * (9/5) + 32);
			
            $('#f').val(ctemp);

            $('#c').val('');

            weatherImage(ctemp);
        }
        else {
            ('do nothing');
        }
    }
    
    $("#submit").click(convertTemp);

function weatherImage(temp){
        //works for debugging
        $('body').removeClass("perf").removeClass('cold').removeClass('hot');
//if temp < desired temp then background image is sunny(alert put on something light)
    if (temp > 60){
        $('body').removeClass("perf");
        $('body').removeClass("cold").addClass("hot");
        alert("wear something light");
//if temp is< desired temp then background image is cold( alert put on a sweater)
    }else if (temp < 60){
        $('body').removeClass('perf');
        $('body').removeClass("hot").addClass("cold");
        alert("put on a sweater brrr");
//if temp is = desired temp then background image is perfect day( alert perfect day)
    }else{
        $('body').removeClass("hot", "cold").addClass("perf");
        alert("ahh perfect");
        

    }

}


/*function weatherImage(ctemp){
     
        $('body').removeClass("perf").removeClass('cold').removeClass('hot');
    //remove previous classes(note putting all 3 didnt work but separating 'perf' did.)
    //if temp < desired temp then background image is sunny
    //(alert put on something light)
    if (ctemp > 16){
       //$('body').removeClass('perf');
       $('body')/*.removeClass('cold')*///.addClass("hot");
       //alert("wear something light");
//if temp is< desired temp then background image is cold( alert put on a sweater)
    //}else if (ctemp < 16){
        //$('body').removeClass('perf');
       // $('body')/*.removeClass("hot")*/.addClass("cold");
        //alert("put on a sweater brrr");
//if temp is = desired temp then background image is perfect day( alert perfect day)
  //  }else{
       // $('body')/*.removeClass("hot", "cold")*/.addClass("perf");
      //  alert("ahh perfect");
   // }

//});*/


});