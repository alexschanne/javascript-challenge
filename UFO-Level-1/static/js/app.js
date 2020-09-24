// from data.js
var tableData = data;

// YOUR CODE HERE!
// reference table body
var body = d3.select("tbody");

//UFO Sighting into each column
tableData.forEach(function(UFOsighting) {
    console.log(UFOsighting);
    var rowdata = body.append("tr");

    Object.entries(UFOsighting).forEach(function([key,value]){
        console.log(key,value);

        var celldata = rowdata.append("td");
        celldata.text(value);
    });
});

//Giving the button function
var button = d3.select("#filter-btn");
button.on("click", function() {
    body.html("");

    //get input date for raw html nodes
    var inputElement = d3.select("#datetime");
    //get value property
    var inputVal = inputElement.property("value");
    //console.log that ish
    console.log(inputVal);
    //Filter that jawn
    var filtData = tableData.filter(sighting => sighting.datetime === inputVal);
    //console.log filtered
    console.log(filtData);

    filtData.forEach(function(selections){
        console.log(selections);
        //append one row 'tr' for each sighting
        var rowdata = body.append("tr");
        //using object.entries for each value
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key,value);
            //append cell to row for each value
            var celldata = rowdata.append("td");
            celldata.text(value)
        });
    });
});