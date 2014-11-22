$(document).ready(function() {
  var container = $("#container");

  console.log(diskDiv(disks[0]));
});

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
