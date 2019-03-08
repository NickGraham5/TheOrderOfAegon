//Google Sign In
function onSignIn(googleUser) 
{
var profile = googleUser.getBasicProfile();
   $(".g-signin2").css("display","none");
   $(".data").css("display","block");
   $("#pic").attr("src",profile.getImageUrl());
   $("#email").text(profile.getEmail());

   console.log('Name: ' + profile.getName());
   console.log('Image URL: ' + profile.getImageUrl());
   console.log('Email: ' + profile.getEmail());
}

// Google Sign out
function signOut() 
{
  var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function ()
    {
      console.log('User signed out.');
      $(".g-signin2").css("display","block");
      $(".data").css("display","none");
    });
}







