$(document).ready(function() {
  dataToView(disks);
});

function dataToView(disks) {
  $("#container").empty();
  var diskDivs = _.map(disks, function(disk) {
    return diskDiv(disk);
  });
  _.each(diskDivs, function(div) {
    $("#container").append(div);
  });
}

function diskDiv(disk) {
  return $("<div>")
    .attr("class", "disk1")
    .append(diskTitle(disk.name))
    .append(diskImg(disk.img))
    .append(diskDesc(disk.desc));
}

function diskTitle(title) {
  return $("<h3>").html(title);
}

function diskImg(img) {
  return $("<img>").attr("src", img);
}

function diskDesc(desc) {
  return $("<p>").html(desc);
}

function add() {
  var newProduct = {
    name: $("#productName").val(),
    img: $("#productImg").val(),
    desc: $("#productDesc").val()
  };

  disks.push(newProduct);

  dataToView(disks);
}
