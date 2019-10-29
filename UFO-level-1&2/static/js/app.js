// from data.js
var ufos = data;
// console.log(ufos)
// use d3 select tbody
var tbody = d3.select("tbody");

// loop through each object & a nest loop to get each column

ufos.forEach(ufo => {
    var tr = tbody.append("tr");
    for (var col in ufo) {
        var val = ufo[col];
        tr.append("td").text(val);
    }
});
// when click the button excute filterTable
d3.select("#filter-btn").on("click", filterTable);

//filter the table by datetime
function filterTable(e){
    var input = d3.select('#datetime').node().value;
    tbody.selectAll('tr').remove();
    var filteredUfos = ufos.filter(ufo=>{
        return input === ufo.datetime
    });
// re-use the same loop change the var name
    filteredUfos.forEach(ufo => {
        var tr = tbody.append("tr");
        for (var col in ufo) {
            var val = ufo[col];
            tr.append("td").text(val);
        }
    });
}
