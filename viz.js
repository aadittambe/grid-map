var data = { 
    "NY" : { "value": "$4" },
    "AL" : { "value": "$1" }
};
var map = new Squaire(data, {
    colors: d3.scale.quantize().domain([1,5]).range(['#c9e2f5','#0098db'])
});
