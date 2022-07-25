var f = document.getElementById("form");
      var q = document.getElementById("query");
      var search = "https://duckduckgo.com/?t=ffab&q=";

      function submitted(event) {
        event.preventDefault();
        var url = search + q.value + "&ia=web";
        window.open(url, "_self");
      }

      f.addEventListener("submit", submitted);