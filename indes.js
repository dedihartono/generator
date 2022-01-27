function search() {
    var word = document.querySelector("#string").value;
    var leng = document.querySelector("#lenght").value;
    var tree = function (leafs) {
        var branches = [];
        if (leafs.length == 1) return leafs;
        for (var k in leafs) {
            var leaf = leafs[k];
            tree(leafs.join("").replace(leaf, "").split(""))
                .concat("")
                .map(function (subtree) {
                    branches.push([leaf].concat(subtree));
                });
        }
        return branches;
    };
    var hasil = tree(word.split("")).map(function (str) {
        return str.join("");
    });

    var y = leng !== "" ? leng : word.length;
    var x = hasil.filter(function (str) {
        return str.length >= y ? str : "";
    });

    var html = "";
    for (const key in x) {
        html += `<input type="checkbox" name="test">${x[key]}</input><br/>`;
    }
    document.querySelector("#result").innerHTML = html;
}
