function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oHc70O4pcE":
        Script1();
        break;
      case "6pmlFjHXNJr":
        Script2();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');

script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';

head.appendChild(script);
}

function Script2()
{
  var player = GetPlayer();

WEB_APP_URL="https://script.google.com/macros/s/AKfycbzebGfcL9m1-Q_dZ6OFnBIwAPOWgpv0XqLl6_UG7s195sU1Fx_Cm1WhQpPn0BZbR-Fflg/exec";  

storyline =

{

 "UserName" : player.GetVar("UserName"),

  "Misto" : player.GetVar("Misto"),

  "PNFP" : player.GetVar("PNFP"),
   
  "Course_pass" : player.GetVar("Course_pass"),
 }

//Не вносить изменений

$.ajax(

 {

  url: WEB_APP_URL,

  type: "POST",

  data: storyline,

  success: function(data)

  {

   console.log(data);

  },

  error: function(err)

  {

   console.log('Error:', err);

  }

 });

 return false;
}

