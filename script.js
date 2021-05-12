$(document).ready(function() {

  var quotes = [
    {
        "id": "1",
        "quote": "The truly free man is the one who can turn down an invitation to dinner without giving an excuse.",
        "author": "Jules Renard"
    },
    {
        "id": "2",
        "quote": "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.",
        "author": "Albert Einstein"
    },
    {
        "id": "3",
        "quote": "She was free in her wildness. She was a wanderess, a drop of free water. She belonged to no man and to no city",
        "author": " Roman Payne"
    },
    {
        "id": "4",
        "quote": "Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.",
        "author": "Carrie Bradshaw"
    },
    {
        "id": "5",
        "quote": "Education is what remains after one has forgotten what one has learned in school.",
        "author": "Albert Einstein "
    },
    {
        "id": "6",
        "quote": "Many books require no thought from those who read them, and for a very simple reason; they made no such demand upon those who wrote them",
        "author": "Charles Caleb Colson"
    },
    {
        "id": "7",
        "quote": "Old age is fifteen years older than I am.",
        "author": "Oliver Wendell Holmes"
    },
    {
        "id": "8",
        "quote": "Find the seed at the bottom of your heart and bring forth a flower.",
        "author": "Shigenori Kameoka "
    },
    {
        "id": "9",
        "quote": "It may be true that the government that governs best governs least. Unfortunately, the same is also true of the government that governs worst.",
        "author": "Jane Elizabeth Auer"
    },
    {
        "id": "10",
        "quote": "Literature is an occupation in which you have to keep proving your talent to people who have none.",
        "author": "Jules Renard"
    },
]
  $.ajax({
    dataType: 'json'
  })
  var qty = quotes.length;
  $('#main #quote').html('"'+quotes[0].quote+'"');
  $('#main #author').html(quotes[0].author);
  $("#main #quoteNum").html(quotes.indexOf(quotes[0])+1+' of '+qty);
  var tweetUrl = "'https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fcodepen.io%2Fkenshinman&text=Random%20Quotes%20Generator%20by%20@kay_kenshin%20@CodePen%20@FreeCodeCamp'";
    $('#tweetUrl').html("<a style='font-size:22px;' target='_blank' href="+tweetUrl+"'><i class='fa fa-twitter'></i></a>");
  var fbUrl="'https://www.facebook.com/sharer/sharer.php?u=http%3A//codepen.io/kenshinman/full/qbWyYY";
  $('#fbUrl').html("<a style='font-size:22px;' target='_blank' href="+fbUrl+"'><i class='fa fa-facebook'></i></a>");
  //console.log(quotes[randomNum]);
  $('#generate').on('click', function(){
    var randomNum = Math.floor(Math.random() * (qty - 0 + 1) + 0);
      $('#main #quote').html('"'+quotes[randomNum].quote+'"');
      $('#main #author').html(quotes[randomNum].author);
    $("#main #quoteNum").html(quotes.indexOf(quotes[randomNum])+1+' of '+qty);
    var tweetUrl = "'https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fcodepen.io%2Fkenshinman&text=Random%20Quotes%20Generator%20by%20@kay_kenshin%20@CodePen%20@FreeCodeCamp'";
    $('#tweetUrl').html("<a style='font-size:22px;' target='_blank' href="+tweetUrl+"'><i class='fa fa-twitter'></i></a>");
  });
  
  
  
});