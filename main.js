function search() {
  var word = document.querySelector("#string").value
  var leng = document.querySelector("#lenght").value
  var tree = function (leafs) {
    var branches = []
    if (leafs.length == 1) return leafs
    for (var k in leafs) {
      var leaf = leafs[k]
      tree(leafs.join("").replace(leaf, "").split(""))
        .concat("")
        .map(function (subtree) {
          branches.push([leaf].concat(subtree))
        })
    }
    return branches
  }
  var hasil = tree(word.split("")).map(function (str) {
    return str.join("")
  })

  var y = leng !== "" ? leng : word.length
  var x = hasil.filter(function (str) {
    return str.length >= y ? str : ""
  })
  var final = x.filter(function (item, pos) {
    return x.indexOf(item) == pos
  })

  console.log(final)

  var html = ""
  for (const key in final) {
    html += `<div class="col-2"><label for="${final[key]}"><input class="form-check-inpu" type="checkbox" id="${final[key]}" name="test"><span class="checkmark"> ${final[key]}</span></label></div>`
  }
  document.querySelector("#result").innerHTML = html
  document.querySelector("#string").value = ""
}
