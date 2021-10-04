var url = "https://fakestoreapi.com/products";
var product_data_arr_main = [];

var fetching = fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((product_data) => {
    product_data_arr_main = product_data;
    show_data_with_filter();
  });
let varri = "";
function show_data_with_filter() {
  var product_data_arr = product_data_arr_main;

  var filter_arr_cat = [];
  var catvalue = document.getElementById("category").value.toLowerCase();

  if (catvalue && catvalue != "") {
    filter_arr_cat = product_data_arr;
    product_data_arr = [];
    filter_arr_cat.forEach(function (e, i) {
      var product_category = e.category.toLowerCase();
      if (catvalue == product_category) {
        product_data_arr.push(e);
      }
    });
  }
  filter_arr_cat;

  var search = document.getElementById("Search").value.toLowerCase();
  var filter_arr_search = [];
  if (search && search != "") {
    filter_arr_search = product_data_arr;
    product_data_arr = [];
    filter_arr_search.forEach(function (e, i) {
      var product_title = e.title.toLowerCase();
      if (product_title.includes(search.toLowerCase())) {
        product_data_arr.push(e);
      } else {
        document.getElementById(
          "display"
        ).innerHTML = `Sorry &#128567 :Search result not found`;
      }
    });
  }
  var price = document.getElementById("pricerange").value;
  product_data_arr;
  if (price && price != "") {
    var range = "";
    if (price == "Low") {
      var loww = product_data_arr.sort((a, b) => a.price - b.price);
      range += `<div class="box"  >
                <a href="./item.html?index=${loww}" target="_blank">
                <img src="${loww.image}" height="150" width="200"/>
                <p>Name:${loww.title}</p><p>Pricew: $ ${loww.price}</p>
                <p>Category: <em>${loww.category}</em></p></a></div>`;
    } else if (price == "High") {
      var highh = product_data_arr.sort((a, b) => b.price - a.price);
      range += `<div class="box"  >
                <a href="./item.html?id=${highh}" target="_blank">
               <img src="${highh.image}" height="150" width="200"/>
               <p>Name:${highh.title}</p><p>Pricew: $ ${highh.price}</p>
               <p>Category: <em>${highh.category}</em></p></a></div>`;
    }
  }
  var product_html = "";
  product_data_arr.forEach(function (e, i) {
    product_html += `<div  class='box'><a href="./item.html?id=${e.id}" target="_blank">
            <img src="${e.image}" height="150" width="200"/>
            <p>NAME: ${e.title}</p><p> PRICE: $ ${e.price}</p>
            <p>category: <em> ${e.category}</em> </p></a><a href="./cart.html" target="_blank"><button type="button" onclick="proAdd(${e.id})">Add To Cart!</button></a></div>`;
  });
  document.getElementById("display").innerHTML = product_html;
} //show_data_with_filter() curly brs

const proAdd = (id) => {
  localStorage.setItem(id, id);
};
