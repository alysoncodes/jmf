
<div id="quizContainer">
<div id="open">

        
</div>
    
<div id="buttonContainer">
  <button type="button" id="startBtn" >TAKE THE QUIZ</button> 
</div>  
       
      <div id="divResults">

        

      </div>
<div id="buttonContainer2">
      <button type="button" id="prev"> < Previous </button> 
      <button type="button" id="next">Next > </button> 
</div>
<script>    
        const quiz = {
        0: {
            "number": "Question 1 of 5",
            "question": "Have you had a Shift in Business Focus, Services, or Products?",
            "image": "https://static1.squarespace.com/static/62e021d04cf4d35fa647ef3b/t/62ffdcfa91b5994297def1b4/1660935418368/AtoZ-Clinical-1.jpg",
            "answers": [
                { "ans": "YES",
                "val": 1 },
                { "ans": "NO",
                "val": 2 }
                ]
            },
        1: {
           "number": "Question 2 of 5",
            "question": "Has there been Changes in your Target Demographics or ideal client?",
            "image": "https://images.squarespace-cdn.com/content/v1/60e8722fc6bcfa0427869b69/1660318880794-EBE23TE6VGFP9DL6M5YU/Sage3.png?format=300w",
            "answers": [
                { "ans": "The Home Edit by Clea Shearer and Joanna Teplin.",
                "val": 1 },
                { "ans": "YES",
                "val": 2 },
                { "ans": "NO"}
                ]
            },
        2: {
            "number": "Question 3 of 5",
            "question": "Has your industry seen some Evolution or is your market changing?",
            "image": "https://images.squarespace-cdn.com/content/v1/60e8722fc6bcfa0427869b69/1660318951639-E441CWZ01HVBRLQTKEFN/Lover3.png?format=500w",
            "answers": [
                { "ans": "YES",
                "val": 1 },
                { "ans": "NO",
                "val": 2 },
                ]
        },
        3: {
            "number": "Question 4 of 5",
            "question": "Is your Visual Identity and Design outdated and tired?",
            "image": "https://images.squarespace-cdn.com/content/v1/60e8722fc6bcfa0427869b69/1660271688231-NDOWY9NNWOMN2FMO2COQ/Magician.gif?format=500w",
            "answers": [
                { "ans": "YES",
                "val": 1 },
                { "ans": "NO",
                "val": 2 },
                ]
        },
        4: {
           "number": "Question 5 of 5",
            "question": "Have you changed to your pricing?",
            "image": "https://images.squarespace-cdn.com/content/v1/60e8722fc6bcfa0427869b69/1660319068296-4PNSYRU2GCPQJ6GM3Z0W/Jester2.png?format=500w",
            "answers": [
                { "ans": "YES",
                "val": 1 },
                { "ans": "NO",
                "val": 2 },
                ]
        },
       };

    //redirect object
    const redirects = {
        1: "bit.ly/HSSQuizKimK",
        2: "bit.ly/HSSGwynethPaltrow",
        3: "bit.ly/HSSQuizBLAKE",
        4: "bit.ly/HSSQuizZendaya"
    };


    //answers array
    answers = [];

    //counter var
    counter = 0;



    //"opening" slide

    $("#divResults").hide();
    $("#next").hide();
    $("#prev").hide();

    $("#open").append("<h3 id='openingSlide'>Ready for your <em>best brand</em> yet?</h3>\
                      <p id='openingP'>In 9 easy-to-answer questions that will take you about 5 minutes, I'll reveal your Celebrity Brand Persona. Then, you'll be armed with easy how-tos and free resources to activate your best brand yet.</p>");

    //img append
    //$("#open").append("<img src='https://images.squarespace-cdn.com/content/v1/60e8722fc6bcfa0427869b69/1660318951639-E441CWZ01HVBRLQTKEFN/Lover3.png?format=500w'>");


    $("#startBtn").click(function() {

        $("#open").remove();
        $("#startBtn").remove();

        $("#divResults").show();
        $("#next").show();


        //Testing Info
        //$("#divResults").append("<p>Counter: " + counter + "</p><p>Answers Array: " + answers + "</p></br>");

        //progress number append
        $("#divResults").append("<h4>" + quiz[0].number + "</h4>");

         //q append
        $("#divResults").append("<h2>" + quiz[0].question + "</h2>");

        //img append
        //$("#divResults").append("<img src='" + quiz[0].image + "'>");
        //console.log(quiz[0].image);

      

        

        //a append
        $("#divResults").append(
            //console.log(quiz[0].answers);
            $.each(quiz[0].answers, function(name, value) {
                //console.log(this.ans);

            $("#divResults").append("<input type='radio' id='" + this.val + "' name='question' value='" + this.val + "'>");

            $("#divResults").append("<label for='" + this.val + "'>" + this.ans + "</label></br>");

            })

        );


           //button disable 
           $('button').prop("disabled", true);
            
           $('input[type="radio"]').on("click", function() {
               //console.log(('input[type="radio"]:checked').length)
             if($('input[type="radio"]:checked').length){
               $('button').prop("disabled", false);
             }
           }); 




    }); //end startBtn


           
    $("#next").click(function() {


        if (counter < 7) {
            console.log('main qs');

            $("#divResults").show();
            $("#prev").show();
    
    
            //new adding to array!
            value = parseInt($("input[name='question']:checked").val());
            console.log(value);
            console.log(answers);
            answers[counter] = value;
            counter += 1;

    
            //empty
            $("#divResults").empty();
    
    
            //Testing Info
            //$("#divResults").append("<p>Counter: " + counter + "</p><p>Answers Array: " + answers + "</p></br>");
    
             //progress number append
            $("#divResults").append("<h4>" + quiz[counter].number + "</h4>");
          
             //q append
            $("#divResults").append("<h2>" + quiz[counter].question + "</h2>");

            //img append
            //$("#divResults").append("<img src='" + quiz[counter].image + "'>");
            //console.log(quiz[counter].image);
    
            //a append
            $("#divResults").append(
                //console.log(quiz[0].answers);
                $.each(quiz[counter].answers, function(name, value) {
                    //console.log(this.ans);
    
                $("#divResults").append("<input type='radio' id='" + this.val + "' name='question' value='" + this.val + "'>");
    
                $("#divResults").append("<label for='" + this.val + "'>" + this.ans + "</label></br>");
    
                }) //for each end
    
                
    
            ); //a append end

            restorePreviousAnswer();
            

        } else if (counter == 7) {
            //console.log('next to last question');

            

            $("#divResults").show();
            $("#prev").show();
            $("#next").html("Submit Answers");
    
    
            //new adding to array!
            value = parseInt($("input[name='question']:checked").val());
            console.log(value);
            console.log(answers);
            answers[counter] = value;
            console.log(answers);
            counter += 1;

    
            //empty
            $("#divResults").empty();
    
    
            //Testing Info
            //$("#divResults").append("<p>Counter: " + counter + "</p><p>Answers Array: " + answers + "</p></br>");


          //progress number append
            $("#divResults").append("<h4>" + quiz[counter].number + "</h4>");
    
             //q append
            $("#divResults").append("<h2>" + quiz[counter].question + "</h2>");

            //img append
            //$("#divResults").append("<img src='" + quiz[counter].image + "'>");
            //console.log(quiz[counter].image);
    
            //a append
            $("#divResults").append(
                //console.log(quiz[0].answers);
                $.each(quiz[counter].answers, function(name, value) {
                    //console.log(this.ans);
    
                $("#divResults").append("<input type='radio' id='" + this.val + "' name='question' value='" + this.val + "'>");
    
                $("#divResults").append("<label for='" + this.val + "'>" + this.ans + "</label></br>");
    
                }) //for each end
    
                
    
            ); //a append end

            


        } else {
            //console.log('quiz finished!');
            //console.log(answers.length);

            //new adding to array!
            value = parseInt($("input[name='question']:checked").val());
            //value = $("input[name='question']:checked").val();
            console.log(value);
            console.log(answers);
            answers[counter] = value;
            counter += 1;



            //Testing Info
            //$("#divResults").append("<p>Counter: " + counter + "</p><p>Answers Array: " + answers + "</p></br>");

           
            //redirects function
            maxKey = redirect();

            //window redirect
            window.location.href = '//' + redirects[maxKey];

            //redirect testing
            //console.log(redirects[maxKey]);
           

        
        }; //end elseif

       
        //button disabled without radio click
        $('#next').prop("disabled", true);

        $('input[type="radio"]').on("click", function() {
            //console.log(('input[type="radio"]:checked').length)
          if($('input[type="radio"]:checked').length){
            $('#next').prop("disabled", false);
          }
        }); 

        //enable next button
        if (restorePreviousAnswer()) {
            console.log('working! yay!');
            $('#next').prop("disabled", false);  
        }; 


    }); //next






    $("#prev").click(function() {
        //console.log("prev clicked");


        //empty
        $("#divResults").empty();



        //next btn text
        $("#next").html("Next Question");


        //decrement counter
        counter -= 1;
        //console.log(counter);
        //console.log(answers);


        //Testing Info
        //$("#divResults").append("<p>Counter: " + counter + "</p><p>Answers Array: " + answers + "</p></br>");

        //progress number append
            $("#divResults").append("<h4>" + quiz[counter].number + "</h4>");
      
        //q append
        $("#divResults").append("<h2>" + quiz[counter].question + "</h2>");

        //img append
        //$("#divResults").append("<img src='" + quiz[counter].image + "'>");
        //console.log(quiz[counter].image);

        //a append
        $("#divResults").append(
            //console.log(quiz[0].answers);
            $.each(quiz[counter].answers, function(name, value) {
                //console.log(this.ans);

            $("#divResults").append("<input type='radio' id='" + this.ans + "' name='question' value='" + this.val + "'>");

            $("#divResults").append("<label for='" + this.ans + "'>" + this.ans + "</label></br>");

            })

        );


        restorePreviousAnswer();

        //enable next button
        if (restorePreviousAnswer()) {
            console.log('working! yay!');
            $('#next').prop("disabled", false);  
        }; 


    }); //prev
        

        




//FUNCTIONS
/*----------------------------------------------------------
Name:	restorePreviousAnswer
Desc:	onclick previous button, check matching radio button
Para:	
Retn:	"checked" radio, true
------------------------------------------------------------*/
var restorePreviousAnswer = function () {

if (answers[counter] != null) {

    $("input[name=question][value=" + answers[counter] + "]").prop("checked", true);
    console.log('restored!');

    return true;

};

};

/*----------------------------------------------------------
Name:	redirect
Desc:	process answers array until redirect value is found
Para:	
Retn:	maxKey
------------------------------------------------------------*/

var redirect = function() {


    //count the dupes, return as object
    const count = answers.reduce((accumulator, value) => {

        return {...accumulator, [value]: (accumulator[value] || 0) + 1};

    }, {});

    console.log(count);
          
    //find values from object and return as array
    const values = Object.values(count);
    console.log(values);

    //find the highest number in the previous array
    const max = Math.max(...values);
    console.log(max);

          
    console.log(Object.keys(count)); 

    //get object key using max value
    function getObjKey(count, value) {

        return Object.keys(count).find(key => count[key] === value);

    };

    console.log(getObjKey(count, max));


    var maxKey = getObjKey(count, max);


        return maxKey;
}; 
</script>

