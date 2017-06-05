$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var items = ["item1", "item2", "item3", "item4", "item5", "item6"]
    var sortedArray = [];
    items.forEach(function(item){
      var actualItem = $("input#" + item).val();
      sortedArray.push(actualItem);
    });
    sortedArray.sort();
    sortedArray.forEach(function(item) {
      $("ul").append("<li>" + item.toUpperCase()+ "</li>");
    });
  });
});
