function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6nKiNGfYEYL":
        Script1();
        break;
      case "6hiJ8KAmVIi":
        Script2();
        break;
      case "5XjHVjTCpPr":
        Script3();
        break;
      case "67XiLL7AfAb":
        Script4();
        break;
      case "5kweQx91gCL":
        Script5();
        break;
      case "6b3sHBvnjKl":
        Script6();
        break;
      case "6V6EyMO8puT":
        Script7();
        break;
      case "5kCjgBMwRrV":
        Script8();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');

script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';

head.appendChild(script);
}

function Script2()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: pagetitle});
}

function Script3()
{
  var player = GetPlayer();

WEB_APP_URL="https://script.google.com/macros/s/AKfycbyujucEQDIPxVAXixcLTJTPd157SYA0fguM0lMfroRdh8toersg8KCjFXLXFz89RGdrRQ/exec";  

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

function Script4()
{
  var player = GetPlayer();

WEB_APP_URL="https://script.google.com/macros/s/AKfycbwGmUgBuJcOuOd-zgr4FHfzyhf5lwOUROu_5N9I3WbwHqw0iKRt4Lca-vSzSUFiCQ8Nrg/exec";  

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

function Script5()
{
  ga('send', 'event', 'Button', 'click', 'Exit Button');’
}

function Script6()
{
  ga('send', 'event', 'Button', 'click', 'Document Button');’
}

function Script7()
{
  ga('send', 'event', 'Button', 'click', 'ManualDoc Button');’
}

function Script8()
{
  ga('send', 'event', 'Button', 'click', 'PamyatkaDoc Button');’
}

