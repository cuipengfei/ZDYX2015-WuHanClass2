$(document).ready(function() {
  dataToView(disks);
});

function dataToView(disks) {
  $("#disksContainer").empty();
  _.chain(disks).map(function(disk) {
    return diskDiv(disk);
  }).each(function(div) {
    $("#disksContainer").append(div);
  });
}

function diskDiv(disk) {
  return $("<div>")
    .attr("class", "disk1")
    .append(diskTitle(disk.name))
    .append(diskImg(disk.img))
    .append(diskDesc(disk.desc));
}

function diskTitle(name) {
  return $("<h3>").html(name);
}

function diskImg(url) {
  return $("<img>").attr("src", url);
}

function diskDesc(desc) {
  return $("<p>").html(desc);
}

function add() {
  var newProduct = {
    name: $("#productName").val(),
    img: $("#productImgUrl").val(),
    desc: $("#productDesc").val()
  };

  disks.push(newProduct);

  dataToView(disks);
}

function search() {
  console.log("search input" + new Date());
}
