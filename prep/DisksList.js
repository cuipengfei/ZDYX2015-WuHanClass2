$(document).ready(function() {
  _.chain(disks).map(function(disk) {
    return diskDiv(disk);
  }).each(function(div) {
    $("#disksContainer").append(div);
  });
});

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
