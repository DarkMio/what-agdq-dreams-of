"use strict";

(function() {
    var request = new XMLHttpRequest();
    var data;
    request.open('GET', './data/agdq.json', true);
    request.addEventListener("load", function() {
      if (request.status >= 200 && request.status < 400) {
        data = JSON.parse(request.responseText);
      }
    });
    request.send();

    document.addEventListener("DOMContentLoaded", function() {
        var button = document.querySelector("#roll");
        var content = document.querySelector("#content");
        var newText = function() {
            var random = Math.random() * data.length;
            content.innerHTML = data[Math.round(random)];
        };
        button.addEventListener("click", newText);
        request.addEventListener("load", newText)
    })
})()