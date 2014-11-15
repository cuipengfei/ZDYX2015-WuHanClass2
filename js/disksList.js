$(document).ready(function(){
  dataToView();
});

function dataToView(){
  $("#disks").empty();

  _.chain(disks).map(function(disk){
    return diskDiv(disk);
  }).each(function(div){
    $("#disks").append(div);
  });
}

function diskDiv(disk) {
  return $("<div>")
  .attr("class","disk1")
  .append(diskTitle(disk.name))
  .append(diskImg(disk.img))
  .append(diskDesc(disk.desc))
  .append(removeButton(disk.name));
}

function diskTitle(name){
  return $("<h3>").html(name);
}

function diskImg(url){
  return $("<img>").attr("src",url);
}

function diskDesc(desc){
  return $("<p>").html(desc);
}

function removeButton(name){
  return $("<button>").html("remove")
  .click(function(){
    remove(name);
  });
}

function remove(name){
  disks = _.chain(disks).filter(function(disk){
    return disk.name!==name;
  });

  dataToView();
}

function add(){
  var newProduct =
  {name:$("#productName").val(),
  img:$("#productImgUrl").val(),
  desc:$("#productDesc").val()};
  disks.push(newProduct);

  dataToView();
}
