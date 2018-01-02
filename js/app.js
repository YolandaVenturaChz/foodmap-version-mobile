var addFilters = (function (element) {
  var filtersArr = [];
  for (var i = 0; i < restaurants.length; i++) {
    for (var n = 0; n < restaurants[i].filters.length; n++) {
      filtersArr.push(restaurants[i].filters[n]);
    }
  }
  var uniqueFilters = [...new Set(filtersArr)];
  var filtersFinal = uniqueFilters.sort();
  for (var a = 0; a < filtersFinal.length; a++) {
    element.append("<option value='" + filtersFinal[a] + "'>" + filtersFinal[a] + "");
  };
  return filtersFinal;
});






$(document).ready(function () {

  addFilters($("#filter"));

  setTimeout(function () {
    $("#splash").fadeOut();
    $("#main-container").fadeIn();
  }, 1000);
  setTimeout(function () {
    initMap();
  }, 1000);


  $("#filter").change(function () {
    $("#restaurants-container").children().remove();
    var selection = $("select").val();
    for (var i = 0; i < restaurants.length; i++) {
      for (var n = 0; n < restaurants[i].filters.length; n++) {
        if (restaurants[i].filters[n] == selection) {
          var image = restaurants[i].photo;
          $("#restaurants-container").append("<div class='col s12 l6 xl6'><div class='container-img-p'><p class='overlay-text'>" + restaurants[i].name + "</p>" + image + "</div></div>");
        }
      }
    };

    /* Mouseover efectot*/
    $(".container-img-p").mouseover(function () {
      $(":nth-child(1)", this).css({
        "opacity": "1"
      });
    });

    $(".container-img-p").mouseout(function () {
      $(":nth-child(1)", this).css({
        "opacity": "0"
      });
    });

   

  });
});