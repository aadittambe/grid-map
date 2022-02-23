var data = {}, options;

d3.csv("data/voting.csv", function (d) {
	data[d.state_abb] = d;
	delete data[d.state_abb].state_abb;
	return d;
},
	function (csv) {
		var map = new Squaire(data, {
			labelStyle: "ap",
			index: "value",
			indexType: "string",
			colors: d3.scale.ordinal().domain(["Restrictive", "Expansive", "Both"]).range(["#de5826", "#8fd694", "#1979b9"]),
			tooltip: {
				enabled: false,
			},
		});
	}
);
