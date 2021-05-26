let myTextile = [
  {
    id: pinkNapkin,
    price: 32,
    name: "חבק גדיל ומפית ורודה",
    img: "",
    orders: 0,
  },
  {
    id: goldPearlNapkinRing,
    price: 23,
    name: "חבק זהב פנינה",
    img: "",
    orders: 0,
  },
  { id: goldNapkinRing, price: 43, name: "חבק טבעת זהב", img: "", orders: 0 },
  { id: diamondNapkinRing, price: 26, name: "חבק יהלומים", img: "", orders: 0 },
  { id: coinNapkinRing, price: 26, name: "חבק מטבע", img: "", orders: 0 },
  { id: LipufNapkinRing, price: 26, name: "חבק מלופף", img: "", orders: 0 },
  {
    id: goldLeafNapkinRing,
    price: 26,
    name: "חבק עלים זהב",
    img: "",
    orders: 0,
  },
];

function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

function getProdsByCategory(catid) {
  return myTextile.filter((c) => c.cat == catid);
}
function getSingleItemById(id) {
  return myTextile.filter((c) => c.id == id);
}

function getOrderByProdId(id) {
  if (localStorage.getItem("cart") == null) return 0;
  var orders = JSON.parse(localStorage.getItem("cart"));
  if (JSON.stringify(orders).length > 4)
    if (orders.filter((c) => c.id == id).length > 0)
      return orders.filter((c) => c.id == id)[0].orders;
    else return 0;
}

function wagon(msg) {
  Toastify({
    text: msg,
    gravity: "top",
    position: "center",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();
}
