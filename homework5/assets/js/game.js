var rightAnswer = 0;
var wrongAnswer = 0;
var unAnswered = 0;
var intervalid;
var timercountdown = 60;
$(".start").on("click", function(){
  $(".ques1").css("display","block"); 
  console.log("startbuttonclicked");
  run();
  
});
console.log("jsloaded");
    if (timercountdown > 0){
        console.log("timer is above 0");
        
        $(".qa").on("click", function(){
            var value = $(this).attr("value");
            if (value ==="correct"){
                console.log("answerisright");
                rightAnswer++
                console.log("current right answer total"+rightAnswer);
                
            } 
            else {
                console.log("answeriswrong");
                wrongAnswer++
                console.log("current wrong answer total"+wrongAnswer);
                }
                $(this).parent().children().attr("disabled","true");
        })  
    } else {
        console.log("timer is less than 0");
        
        stop();
    }

function run(){
    clearInterval(intervalid);
    intervalid = setInterval(function(){
        if(timercountdown === 0){
            stop()
        }
        else{
        timercountdown--;
        $(".timer").text(timercountdown);}
    },1000) 
}
function stop(){
    clearInterval(intervalid)
}