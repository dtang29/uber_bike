
/*/////////////////// Set up the Data ///////////////////////*/

var NameProvider = ['Financial District',
					'SoMa',
					'Mission Bay',
					'Embarcadero',
					'South Beach',
					'The East Cut',
					'Tenderloin',
					'North Los Altos',
					'Downtown',
					'Old Mountain View',
					'Chinatown',
					'Civic Center',
					'Union Square',
					'Mid-Market',
					'Whisman Station',
					'Downtown San Jose',
					'Telegraph Hill',
					'Downtown North',
					'North Beach',
					'Almaden',
					'Ryland',
					'Centennial',
					'The Crossings',
					'Horace Mann',
					'University South',
					'Japantown',
					'Castro City',
					'Hyde Park',
					'Evergreen Park',
					'Staumbaugh Heller',
					'Central San Jose',
					'West Atherton',
					'Cuesta Park',
					'Hillsdale'];
	

var matrix = [
	
		[2.790615199,1.305538008,2.301869646,2.286353914,2.442619499,1.590362514,0.6306036728,0,0,0,0.17399785,0.2959071716,0.3014485044,0.2693087741,0,0,0.3468874334,0,0.4599306225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //Financial District
		[1.357626536,1.118240959,2.633241347,0.836741253,0.8988041804,1.027363101,0.4887455531,0,0,0,0.2061375802,0.5829482107,0.1241258548,0.4543892897,0,0,0.2050293137,0,0.2416021101,0,0,0.00110826656,0,0,0,0,0,0,0,0,0,0,0,0],     //SoMa
		[1.993771542,2.188826457,2.552337888,1.778767829,1.787633962,2.007070741,0.9165364453,0,0,0,0.1041770567,0.5962474094,0.1230175882,0.4876372865,0,0,0.07203732642,0,0.1906218484,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //Mission Bay
		[2.465893097,0.7181567311,2.055834469,0.7092905986,2.46810963,0.5740820782,0.2460351764,0,0,0,0.07757865922,0.1407498532,0.1274506544,0.07203732642,0,0,0.1751061165,0,0.1751061165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //Embarcadero
		[2.586694152,1.052853232,2.257538983,2.352849907,1.757710765,1.374250535,0.2005962474,0,0,0,0.1185845219,0.1219093216,0.1640234509,0.1063935898,0,0,0.1263423879,0,0.1861887821,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //South Beach
		[1.521649987,1.241258548,2.658731478,0.642794605,1.915084616,0.6239540734,0.4189247598,0,0,0,0.1695647837,0.1363167869,0.0864447917,0.156265585,0,0,0.1252341213,0,0.2305194445,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //The East Cut
		[0.5618911461,0.5884895435,0.9741663065,0.2316277111,0.2083541133,0.3934346289,0.2161119793,0,0,0,0.07203732642,0.4178164932,0.05652159457,0.1651317175,0,0,0.03435626337,0,0.03768106305,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //Tenderloin
		[0,0,0,0,0,0,0,0.01884053152,0,0.02549013089,0,0,0,0,0,0,0,0.0110826656,0,0,0,0,0.284824506,0,0,0,0.02105706465,0,0.006649599362,0,0,0.006649599362,0.00110826656,0],     //North Los Altos
		[0,0,0,0,0,0,0,0,0.03435626337,0,0,0,0,0,0,0.2072458468,0,0,0,0.02327359777,0.007757865922,0,0,0.0166239984,0,0.02881493057,0,0.00110826656,0,0,0.04211412929,0,0,0],     //Downtown
		[0,0,0.00110826656,0,0,0,0,0.04765546209,0,0.8289833871,0,0,0,0,0.1895135818,0.00110826656,0,0.004433066241,0,0,0,0,0.03657279649,0,0.00110826656,0,0.0864447917,0,0.005541332801,0,0,0.004433066241,0.2682005076,0],     //Old Mountain View
		[0.239385577,0.09641919074,0.06760426018,0.09531092418,0.0864447917,0.0698207933,0.1052853232,0,0,0,0.05319679489,0.04654719553,0.02105706465,0.01773226496,0,0,0.03103146369,0,0.003324799681,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //Chinatown
		[0.3812436967,0.8522569848,0.9276191109,0.2050293137,0.1917301149,0.1318837207,0.3978676951,0,0,0,0.04654719553,0.1906218484,0.0753621261,0.1163679888,0,0,0.02881493057,0,0.04543892897,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //Civic Center
		[0.4543892897,0.2050293137,0.3269386353,0.1850805156,0.2526847757,0.1141514557,0.06538772706,0,0,0,0.04211412929,0.09641919074,0.0975274573,0.04433066241,0,0,0.04765546209,0,0.04322239585,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //Union Square
		[0.3335882346,0.3291551684,0.4399818244,0.1208010551,0.08201172546,0.0864447917,0.1606986512,0,0,0,0.02549013089,0.13853332,0.03546452993,0.0642794605,0,0,0.02216533121,0,0.01773226496,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //Mid-Market
		[0,0,0,0,0,0,0,0.00110826656,0,0.2404938436,0,0,0,0,0.03324799681,0,0,0,0,0,0,0,0.00110826656,0,0,0,0,0,0,0,0,0,0.006649599362,0],     //Whisman Station
		[0,0,0,0,0,0,0,0.00110826656,0.239385577,0.002216533121,0,0,0,0,0,1.556006251,0,0,0,0.4942868859,0.1329919872,0,0,0.229411178,0.00110826656,0.1906218484,0,0.04876372865,0,0,0.4809876872,0,0,0],     //Downtown San Jose
		[0.6749343352,0.2283029114,0.2626591748,0.2083541133,0.1972714477,0.3236138356,0.1219093216,0,0,0,0.03768106305,0.03546452993,0.05098026177,0.04100586273,0,0,0.06095466082,0,0.07979519234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //Telegraph Hill
		[0,0,0.00110826656,0,0,0,0,0.01329919872,0,0.004433066241,0,0,0,0,0.00110826656,0,0,0.2549013089,0,0,0,0.00110826656,0.0110826656,0,0.1473994525,0,0.00110826656,0,0.1152597223,0,0,0.05208852833,0.00110826656,0],     //Downtown North
		[0.3745940974,0.2493599761,0.2792831732,0.2305194445,0.2305194445,0.2205450455,0.04100586273,0,0,0,0.004433066241,0.03989759617,0.04322239585,0.02327359777,0,0,0.03213973025,0,0.03324799681,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],     //North Beach
		[0,0,0.00110826656,0,0,0,0,0,0.02770666401,0,0,0,0,0,0,0.4854207534,0,0,0,0.03878932961,0.006649599362,0,0,0.03989759617,0,0.004433066241,0,0.003324799681,0,0,0.02105706465,0,0,0],     //Almaden
		[0,0,0,0,0,0,0,0,0.01219093216,0,0,0,0,0,0,0.1507242522,0,0,0,0.007757865922,0.04211412929,0,0,0.01773226496,0,0.02216533121,0,0.09309439106,0,0,0.01551573184,0,0,0],     //Ryland
		[0,0,0.002216533121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.004433066241,0,0,0,0.257117842,0,0,0.00110826656,0,0,0,0,0.01773226496,0,0,0,0.01884053152],     //Centennial
		[0,0,0,0,0,0,0,0.2737418404,0,0.02216533121,0,0,0,0,0.00110826656,0.00110826656,0,0.008866132482,0,0,0,0,0.01994879808,0,0,0,0.06206292738,0,0.01329919872,0,0,0.006649599362,0.00110826656,0],     //The Crossings
		[0,0,0,0,0,0,0,0,0.04211412929,0,0,0,0,0,0,0.385676763,0,0,0,0.02992319713,0.0110826656,0,0,0.08201172546,0,0.01551573184,0,0.008866132482,0,0,0.06538772706,0,0,0],     //Horace Mann
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1917301149,0,0,0,0,0.00110826656,0,0.02992319713,0,0.00110826656,0,0.01994879808,0,0,0.01219093216,0,0],     //University South
		[0,0,0,0,0,0,0,0,0.0110826656,0,0,0,0,0,0,0.1318837207,0,0,0,0.005541332801,0.02881493057,0,0,0.02881493057,0.00110826656,0.04322239585,0,0.01440746528,0,0,0.02770666401,0,0,0],     //Japantown
		[0,0,0,0,0,0,0,0.01440746528,0,0.08533652514,0,0,0,0,0,0,0,0.005541332801,0,0,0,0,0.06649599362,0,0,0.002216533121,0.03878932961,0,0.003324799681,0,0,0.00110826656,0.004433066241,0],     //Castro City
		[0,0,0,0,0,0,0,0,0.00110826656,0,0,0,0,0,0,0.03324799681,0,0,0,0.00110826656,0.09641919074,0,0,0.002216533121,0,0.01773226496,0,0.02549013089,0,0,0.005541332801,0,0,0],     //Hyde Park
		[0.00110826656,0,0.00110826656,0,0,0,0,0.002216533121,0,0.002216533121,0,0,0,0,0,0,0,0.1075018563,0,0,0,0,0.0166239984,0,0.009974399042,0,0.003324799681,0,0.03878932961,0,0,0.01773226496,0,0],     //Evergreen Park
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.01773226496,0,0,0,0,0,0,0,0.003324799681,0,0,0,0],     //Staumbaugh Heller
		[0,0,0,0,0,0,0,0,0.04654719553,0,0,0,0,0,0,0.2914741054,0,0,0,0.01551573184,0.01551573184,0,0,0.06538772706,0,0.02105706465,0,0.009974399042,0,0,0.06871252674,0,0,0],     //Central San Jose
		[0,0,0,0,0,0,0,0.004433066241,0,0.003324799681,0,0,0,0,0.00110826656,0,0,0.04543892897,0,0,0,0,0.007757865922,0,0.01329919872,0,0.004433066241,0,0.02770666401,0,0,0.004433066241,0,0],     //West Atherton
		[0,0,0,0,0,0,0,0.003324799681,0,0.3169642362,0,0,0,0,0.01219093216,0.00110826656,0,0,0,0,0,0,0.005541332801,0,0,0,0.003324799681,0,0,0,0,0.00110826656,0.03768106305,0],     //Cuesta Park
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.00110826656,0,0,0,0.02438186433,0,0,0,0,0,0,0,0.003324799681,0,0,0,0.005541332801]    //Hillsdale
	
];

var colors = ["#C39BD3", "#FFDD89", "#33ccff", "#ff99ff", "#66cccc", 
				"#ff9900", "#6699cc", "#ff6699", "#666699", "#9999ff",
				"#cc66cc", "#cccc33", "#6699ff", "#cc66ff", "#99cc99",
				"#ff99cc", "#999999", "#99ccff", "#F1948A", "#33cccc",
				"#ff99ff", "#99ccff", "#999933", "#99ccff", "#A569BD",
				"#82E0AA", "#95A5A6", "#E74C3C", "#2ECC71", "#5499C7",
				"#008FC8", "#10218B", "#134B24", "#737373"];

/*Initiate the color scale*/
var fill = d3.scale.ordinal()
    .domain(d3.range(NameProvider.length))
    .range(colors);
	
/*//////////////////////////////////////////////////////////
/////////////// Initiate Chord Diagram /////////////////////
//////////////////////////////////////////////////////////*/
var margin = {top: 70, right: 100, bottom: 40, left: 100},
    width = 750 - margin.left - margin.right,
    height = 750 - margin.top - margin.bottom,
    innerRadius = Math.min(width, height) * .39,
    outerRadius = innerRadius * 1.04;

/*Initiate the SVG*/
var svg = d3.select("#chart").append("svg:svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("svg:g")
    .attr("transform", "translate(" + (margin.left + width/2) + "," + (margin.top + height/2) + ")");

	
var chord = d3.layout.chord()
    .padding(.04)
    .sortSubgroups(d3.descending) /*sort the chords inside an arc from high to low*/
    .sortChords(d3.descending) /*which chord should be shown on top when chords cross. Now the biggest chord is at the bottom*/
	.matrix(matrix);
	

/*//////////////////////////////////////////////////////////
////////////////// Draw outer Arcs /////////////////////////
//////////////////////////////////////////////////////////*/

var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
	
var g = svg.selectAll("g.group")
	.data(chord.groups)
	.enter().append("svg:g")
	.attr("class", function(d) {return "group " + NameProvider[d.index];});
	
g.append("svg:path")
	  .attr("class", "arc")
	  .style("stroke", function(d) { return fill(d.index); })
	  .style("fill", function(d) { return fill(d.index); })
	  .attr("d", arc)
	  .style("opacity", 0)
	  .transition().duration(1000)
	  .style("opacity", 0.4);

/*//////////////////////////////////////////////////////////
////////////////// Initiate Ticks //////////////////////////
//////////////////////////////////////////////////////////*/

var ticks = svg.selectAll("g.group").append("svg:g")
	.attr("class", function(d) {return "ticks " + NameProvider[d.index];})
	.selectAll("g.ticks")
	.attr("class", "ticks")
    .data(groupTicks)
	.enter().append("svg:g")
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + outerRadius+40 + ",0)";
    });

/*Append the tick around the arcs*/
ticks.append("svg:line")
	.attr("x1", 1)
	.attr("y1", 0)
	.attr("x2", 5)
	.attr("y2", 0)
	.attr("class", "ticks")
	.style("stroke", "#FFF");
	
/*Add the labels for the %'s*/
ticks.append("svg:text")
	.attr("x", 8)
	.attr("dy", ".35em")
	.attr("class", "tickLabels")
	.attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
	.style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
	.text(function(d) { return d.label; })
	.attr('opacity', 0);
	
/*//////////////////////////////////////////////////////////
////////////////// Initiate Names //////////////////////////
//////////////////////////////////////////////////////////*/

g.append("svg:text")
  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".35em")
  .attr("class", "titles")
  .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
  .attr("transform", function(d) {
		return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
		+ "translate(" + (innerRadius + 55) + ")"
		+ (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .attr('opacity', 0)
  .text(function(d,i) { return NameProvider[i]; });  

/*//////////////////////////////////////////////////////////
//////////////// Initiate inner chords /////////////////////
//////////////////////////////////////////////////////////*/

var chords = svg.selectAll("path.chord")
	.data(chord.chords)
	.enter().append("svg:path")
	.attr("class", "chord")
	.style("stroke", function(d) { return d3.rgb(fill(d.source.index)).darker(); })
	.style("fill", function(d) { return fill(d.source.index); })
	.attr("d", d3.svg.chord().radius(innerRadius))
	.attr('opacity', 0);

/*//////////////////////////////////////////////////////////	
///////////// Initiate Progress Bar ////////////////////////
//////////////////////////////////////////////////////////*/
/*Initiate variables for bar*/
var progressColor = ["#D1D1D1","#949494"],
	progressClass = ["prgsBehind","prgsFront"],
	prgsWidth = 0.4*650,
	prgsHeight = 3;
/*Create SVG to visualize bar in*/
var progressBar = d3.select("#progress").append("svg")
	.attr("width", prgsWidth)
	.attr("height", 3*prgsHeight);
/*Create two bars of which one has a width of zero*/
progressBar.selectAll("rect")
	.data([prgsWidth, 0])
	.enter()
	.append("rect")
	.attr("class", function(d,i) {return progressClass[i];})
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", function (d) {return d;})
	.attr("height", prgsHeight)
	.attr("fill", function(d,i) {return progressColor[i];});

/*//////////////////////////////////////////////////////////	
/////////// Initiate the Center Texts //////////////////////
//////////////////////////////////////////////////////////*/
/*Create wrapper for center text*/
var textCenter = svg.append("g")
					.attr("class", "explanationWrapper");

/*Starting text middle top*/
var middleTextTop = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", -24*10/2 + "px")
	.attr("dy", "1em")
	.attr("opacity", 1)
	.text("Ridership Data Provided By Uber")
	.call(wrap, 130);

/*Starting text middle bottom*/
var middleTextBottom = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", 24*3/2 + "px")
	.attr("dy", "1em")
	.attr('opacity', 1)
	.text("The data provided starting and ending positions for each bike trip, which was used to assess the distribution of bike traffic between neighborhoods.")
	.call(wrap, 300);


/*//////////////////////////////////////////////////////////
//////////////// Storyboarding Steps ///////////////////////
//////////////////////////////////////////////////////////*/

var counter = 1,
	buttonTexts = ["Ok","Go on","Continue","Okay","Go on","Continue","Okay","Continue",
				   "Continue","Continue","Continue","Continue","Finish"],
	opacityValueBase = 0.8,
	opacityValue = 0.4;

/*Reload page*/
d3.select("#reset")
	.on("click", function(e) {location.reload();});

/*Skip to final visual right away*/
d3.select("#skip")
	.on("click", finalChord);
	
/*Order of steps when clicking button*/
d3.select("#clicker")      
	.on("click", function(e){
	
		if(counter == 1) Draw1();
		else if(counter == 2) Draw2();
		else if(counter == 3) Draw3();
		else if(counter == 4) Draw4();
		else if(counter == 5) Draw5();
		else if(counter == 6) Draw6();
		else if(counter == 7) Draw7();
		else if(counter == 8) Draw8();
		else if(counter == 9) Draw9();
		else if(counter == 10) Draw10();
		else if(counter == 11) Draw11();
		else if(counter == 12) Draw12();
		// else if(counter == 13) Draw13();
		else if(counter == 13) Draw14();
		else if(counter == 14) finalChord();
		
		counter = counter + 1;
	});

/*//////////////////////////////////////////////////////////	
//Introduction
///////////////////////////////////////////////////////////*/
function Draw1(){

	/*First disable click event on clicker button*/
	stopClicker();
		
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);
		
	changeTopText(newText = "Data provided was between March 01, 2014 to August 31, 2014." + 
							"There was a total of 70 stations and 680 bikes.",
	loc = 4/2, delayDisappear = 0, delayAppear = 1);

	changeTopText(newText = "In the next few steps I would like to introduce you to the flows of bikes between the neighborhoods",
	loc = 8/2, delayDisappear = 9, delayAppear = 10, finalText = true); //changed
	
	changeBottomText(newText = "First, let's draw out the distribution of the 90,232 ridership data between 34 Neighborhoods in the data.",
	loc = 1/2, delayDisappear = 0, delayAppear = 10); //changed
	
	//Remove arcs again
	d3.selectAll(".arc")
		.transition().delay(9*70).duration(210)
		.style("opacity", 0)
		.each("end", function() {d3.selectAll(".arc").remove();});
		
};/*Draw1*/

/*//////////////////////////////////////////////////////////	
//Show Arc of Mission Bay
//////////////////////////////////////////////////////////*/
function Draw2(){ 

	/*First disable click event on clicker button*/
	stopClicker();
	
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);
				
	/*Initiate all arcs but only show the Apple arc (d.index = 0)*/
	g.append("svg:path")
	  .style("stroke", function(d) { return fill(d.index); })
	  .style("fill", function(d) { return fill(d.index); })
	  .transition().duration(700)
	  .attr("d", arc)
	  .attrTween("d", function(d) {
		if(d.index == 0) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
	  });
	  
	/*Show the tick around the Mission Bay arc*/
	d3.selectAll("g.group").selectAll("line")
		.transition().delay(700).duration(1000)
		.style("stroke", function(d, i, j) {return j ? 0 : "#000"; });

	/*Add the labels for the %'s at Mission Bay*/
	d3.selectAll("g.group").selectAll(".tickLabels")
		.transition().delay(700).duration(2000)
		.attr("opacity", function(d, i, j) {return j ? 0 : 1; });

	/*Show the Mission Bay name*/
	d3.selectAll(".titles")
	  .transition().duration(2000)
	  .attr("opacity", function(d, i) {return d.index ? 0 : 1; });
	  
	/*Switch  text*/
	changeTopText(newText = 
							"Financial District accounted for the largest amount of outgoing traffic, with 15.19% of users biking from there",
	loc = 1/2, delayDisappear = 0, delayAppear = 1, finalText = true);
	
	changeBottomText(newText = "",
	loc = 0/2, delayDisappear = 0, delayAppear = 1)	;
	
};/*Draw2*/

/*///////////////////////////////////////////////////////////  
//Draw the other arcs as well
//////////////////////////////////////////////////////////*/
function Draw3(){

	/*First disable click event on clicker button*/
	stopClicker();

	var arcDelay = [0,1,5,9,13,17,20,24,29,31,33,35,37,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46.5,47,47.5,48,48.5,49.5,50.5,54];
	/*Show and run the progressBar*/
	runProgressBar(time=700*(arcDelay[(arcDelay.length-1)]+1));	
		
   /*Fill in the other arcs*/
   svg.selectAll("g.group").select("path")
	.transition().delay(function(d, i) { return 700*arcDelay[i];}).duration(1000)
	.attrTween("d", function(d) {
		if(d.index != 0) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
    });
 
  /*Make the other strokes black as well*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("line").style("stroke", "#000");
  /*Same for the %'s*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("text").style("opacity", 1);
  /*And the Names of each Arc*/	
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("text").style("opacity", 1);

	/*Change the text of the top section inside the circle accordingly*/
	
	/*SOMA%*/
	changeTopText(newText = "10% of users started from SOMA",
	loc = 3/2, delayDisappear = 0, delayAppear = arcDelay[1]);

	/*Financial District*/
	changeTopText(newText = "14.8% of users started from Mission Bay",
	loc = 3/2, delayDisappear = (arcDelay[2]-1), delayAppear = arcDelay[2]);

	/*Embarcadero*/
	changeTopText(newText = "10% of users started from Embarcadero",
	loc = 3/2, delayDisappear = (arcDelay[3]-1), delayAppear = arcDelay[3]);

	/*South Beach*/
	changeTopText(newText = "12.4% of users started from South Beach",
	loc = 3/2, delayDisappear = (arcDelay[4]-1), delayAppear = arcDelay[4]);


	changeTopText(newText = "The top 5 neighborhoods made up 66% of the total outgoing bikes.",
			loc = 2/2, delayDisappear = (arcDelay[5]-1), delayAppear = arcDelay[5]);


	changeTopText(newText = "The other 29 neighborhoods accounted for less than 50% of total output",
		loc = 2/2, delayDisappear = (arcDelay[7]-1), delayAppear = (arcDelay[7]));

	for(var i=8; i < 13; i++){
		changeTopText(newText = NameProvider[i] + " " +  matrix[i].reduce((a,b)=>a+b,0).toFixed(4) + "%",
			loc = 2/2, delayDisappear = (arcDelay[i]-1), delayAppear = arcDelay[i]);
	}

	changeTopText(newText = "Many neighborhoods had 2% or less outgoing bike traffic. Of those neighborhoods, many were in the South Bay area such as San Jose",

		loc = 2/2, delayDisappear = (arcDelay[14]-1), delayAppear = (arcDelay[15]));
	

	// changeTopText(newText = "",

	// 	loc = 2/2, delayDisappear = (arcDelay[26]-1), delayAppear = (arcDelay[26]));
	
	/*100%*/
	changeTopText(newText = "Together that sums up to 100%",
		loc = 1/2, delayDisappear = (arcDelay[33]-1), delayAppear = arcDelay[33]);		
	/*Chord intro*/
	changeTopText(newText = "This circle shows the distribution of the output flow of bike users",
		loc = 8/2, delayDisappear = (arcDelay[34]-1), delayAppear = arcDelay[34], finalText = true);					
	
	/*Change the text of the bottom section inside the circle accordingly*/
	/*Other*/
	// changeBottomText(newText = "SOMA, Mission Bay, Mission District, and Embarcadero, combined accounted for more than half the total outgoing bikes",
	// 	loc = 1/2, delayDisappear = (arcDelay[24]-1), delayAppear = (arcDelay[24]), yloc=-20);
	// changeBottomText(newText = "Therefor, the other 26 neighborhoods make up less then half the total outgoing bike traffic",
	// 	loc = 2/2, delayDisappear = (arcDelay[15]-1), delayAppear = (arcDelay[15]));
	/*Chord intro*/
	changeBottomText(newText = "Now we're going to look at how these users biked from one neighborhood to another neighborhood",
		loc = 1/2, delayDisappear = (arcDelay[34]-1), delayAppear = arcDelay[34]);	

};/*Draw3*/

/*///////////////////////////////////////////////////////////
//Show the chord between SOMA and South Park
//////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////
//Show the chord between Samsung and Nokia
//////////////////////////////////////////////////////////*/
function Draw4(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*Samsung and Nokia intro text*/
	changeTopText(newText = "First, let's only look at the bike riders that started from Financial District with a specific destination",
		loc = 5, delayDisappear = 0, delayAppear = 1, finalText = true);
		
	/*Bottom text disappear*/
	changeBottomText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);	
	
    /*Make the non Samsung & Nokia arcs less visible*/
    svg.selectAll("g.group").select("path")
		.transition().duration(1000)
		.style("opacity", function(d) {
			if(d.index != 0 && d.index != 4) {return opacityValue;}
		});		
	
	/*Make the other strokes less visible*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke",function(d,i,j) {if (j == 4 || j == 0) {return "#000";} else {return "#DBDBDB";}});
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",function(d,i,j) {if (j == 4 || j == 0) {return 1;} else {return opacityValue;}});
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", function(d) { if(d.index == 0 || d.index == 4) {return 1;} else {return opacityValue;}});

	/*Show only the Samsung Nokia chord*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 4 && d.target.index == 0) 
				{return opacityValueBase;}
			else {return 0;}
		});
	
};/*Draw4*/

/*//////////////////////////////////////////////////////////////////////////*/
function Draw5(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*Samsung and Nokia text*/
	changeTopText(newText = "On the upper right, touching the arc of Financial District, the chord runs from ~3% to 5%. Which is a thickness spanning 2.44%",
		loc = 1/2, delayDisappear = 0, delayAppear = 1, finalText = true);
	
    /*Make the non Samsung & Nokia arcs less visible*/
    svg.selectAll("g.group").select("path")
		.transition().duration(1000)
		.style("opacity", opacityValue);		

	/*Show only the SOMA SPark part at SOMA*/
	var arcSOMA = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.startAngle(0.14333)
				.endAngle(0.25333);
				
	svg.append("path")
		.attr("class","FinancialDistrictToSouthBeach")
		.attr("d", arcSOMA)
		.attr("fill", colors[5])
		.style('stroke', colors[5]);
		
	repeat();
	
	/*Repeatedly let an arc change colour*/
	function repeat() {
		d3.selectAll(".FinancialDistrictToSouthBeach")
			.transition().duration(700)
			.attr("fill", "#ffff00")
			.style('stroke', "#ffff00")
			.transition().duration(700)
			.attr("fill", colors[5])
			.style('stroke', colors[5])
			.each("end", repeat)
			;
	};
	
};/*Draw5*/

/*//////////////////////////////////////////////////////////////////////////*/
function Draw6(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*Samsung and Nokia text*/
	changeTopText(newText = "These 2.44% of the bike riders originate from Financial District with their final destination being South Beach",
		loc = 1/2, delayDisappear = 0, delayAppear = 1, finalText = true);

	/*Show only the Samsung Nokia part at Nokia*/
	var arcSPark = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.startAngle(2.588671976860533)
				.endAngle(2.8574595910835127);

	svg.append("path")
		.attr("class","SouthBeachToFinancialDistrict")
		.attr("d", arcSPark)
		.attr("opacity", 0)
		.attr("fill", colors[25])
		.transition().duration(700)
		.attr("opacity", 1)
		.attr("stroke", colors[25]);				
		
};/*Draw6*/

/*//////////////////////////////////////////////////////////////////////////*/
function Draw7(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);	
	
	/*Samsung and Nokia text*/
	changeTopText(newText = "At the South Beach side, the arc size is almost the same, spanning 2.58%",
		loc = 1/2, delayDisappear = 0, delayAppear = 1);
	changeTopText(newText = "These 2.58% riders travel back to Financial District",
		loc = 1/2, delayDisappear = 8, delayAppear = 9, finalText = true);
		
	/*Stop the color changing on the Financial side*/
	d3.selectAll(".FinancialDistrictToSouthBeach")
		.transition().duration(700)
		.attr("fill", colors[5])
		.style("stroke", colors[5]);

	/*Repeatedly let an arc change colour*/		
	repeat();
	function repeat() {
		d3.selectAll(".SouthBeachToFinancialDistrict")
			.transition().duration(700)
			.attr("fill", "#77ec20")
			.style('stroke', "#77ec20")
			.transition().duration(700)
			.attr("fill", colors[25])
			.style("stroke", colors[25])
			.each("end", repeat)
			;
	};
				
};/*Draw7*/

/*//////////////////////////////////////////////////////////////////////////*/
function Draw8(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);	
	
	/*Samsung and Nokia text*/
	changeTopText(newText = "Since the size of the arcs from both ends are relatively the same size, this is saying that the influx of bike riders from either neighborhood is the same",
		loc = 0.5/2, delayDisappear = 0, delayAppear = 1);
	changeTopText(newText = "However, because the chord is the color of South Beach (teal), South Beach has the higher net average from the exchange of bikes between the two destinations",
		loc = 0.5/2, delayDisappear = 9, delayAppear = 10, finalText = true);
		
	/*Stop the colour changing on the South Beach side*/
	d3.selectAll(".SouthBeachToFinancialDistrict")
		.transition().duration(700)
		.attr("fill", colors[25])
		.style("stroke", colors[25]);
				
};/*Draw8*/

/*///////////////////////////////////////////////////////////	
//Show Loyalty hills
//////////////////////////////////////////////////////////*/
function Draw9(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*20);	
	
	/*Samsung Loyal text*/
	changeTopText(newText = "Now we look at bike riders who stay within their neighborhood",
		loc = 4/2, delayDisappear = 0, delayAppear = 1, finalText = false, xloc=10, w=200);
	changeTopText(newText = "These riders are represented by the hills at each neighborhood",
		loc = 3/2, delayDisappear = 9, delayAppear = 10, finalText = false, xloc=10, w=200);
	changeTopText(newText = "These are chords that begin and end on itself",
		loc = 2/2, delayDisappear = 18, delayAppear = 19, finalText = true, xloc=10, w=200);
		
	/*Remove the arcs*/
	d3.selectAll(".SouthBeachToFinancialDistrict")
		.transition().duration(2000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".SouthParktoSouthofMarket").remove();});

	d3.selectAll(".FinancialDistrictToSouthBeach")
		.transition().duration(2000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".MissionBayToFinancialDistrict").remove();});
		
	/*Show only the loyal chords*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 0 && d.target.index == 0) {return opacityValueBase;}
			else if(d.source.index == 1 && d.target.index == 1) {return opacityValueBase;}
			else if(d.source.index == 2 && d.target.index == 2) {return opacityValueBase;}
			else if(d.source.index == 3 && d.target.index == 3) {return opacityValueBase;}
			else if(d.source.index == 4 && d.target.index == 4) {return opacityValueBase;}
			else if(d.source.index == 5 && d.target.index == 5) {return opacityValueBase;}
			else if(d.source.index == 6 && d.target.index == 6) {return opacityValueBase;}
			else if(d.source.index == 7 && d.target.index == 7) {return opacityValueBase;}
			else if(d.source.index == 8 && d.target.index == 8) {return opacityValueBase;}
			else if(d.source.index == 9 && d.target.index == 9) {return opacityValueBase;}
			else if(d.source.index == 10 && d.target.index == 10) {return opacityValueBase;}
			else if(d.source.index == 11 && d.target.index == 11) {return opacityValueBase;}
			else if(d.source.index == 12 && d.target.index == 12) {return opacityValueBase;}
			else if(d.source.index == 13 && d.target.index == 13) {return opacityValueBase;}
			else if(d.source.index == 14 && d.target.index == 14) {return opacityValueBase;}
			else if(d.source.index == 15 && d.target.index == 15) {return opacityValueBase;}
			else if(d.source.index == 16 && d.target.index == 16) {return opacityValueBase;}
			else if(d.source.index == 17 && d.target.index == 17) {return opacityValueBase;}
			else if(d.source.index == 18 && d.target.index == 18) {return opacityValueBase;}
			else if(d.source.index == 19 && d.target.index == 19) {return opacityValueBase;}
			else if(d.source.index == 20 && d.target.index == 20) {return opacityValueBase;}
			else if(d.source.index == 21 && d.target.index == 21) {return opacityValueBase;}
			else if(d.source.index == 22 && d.target.index == 22) {return opacityValueBase;}
			else if(d.source.index == 23 && d.target.index == 23) {return opacityValueBase;}
			else if(d.source.index == 24 && d.target.index == 24) {return opacityValueBase;}
			else if(d.source.index == 25 && d.target.index == 25) {return opacityValueBase;}
			else if(d.source.index == 26 && d.target.index == 26) {return opacityValueBase;}
			else if(d.source.index == 27 && d.target.index == 27) {return opacityValueBase;}
			else if(d.source.index == 28 && d.target.index == 28) {return opacityValueBase;}
			else if(d.source.index == 29 && d.target.index == 29) {return opacityValueBase;}
			else if(d.source.index == 30 && d.target.index == 30) {return opacityValueBase;}
			else if(d.source.index == 31 && d.target.index == 31) {return opacityValueBase;}
			else if(d.source.index == 32 && d.target.index == 32) {return opacityValueBase;}
			else if(d.source.index == 33 && d.target.index == 33) {return opacityValueBase;}


			else {return 0;}
		});
	
		
	/*Show all ticks and texts again*/
	/*Ticks*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke", "#000");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity", 1);
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", 1);
				
};/*Draw9*/

/*//////////////////////////////////////////////////////////////////////////*/
function Draw10(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);
	
	changeTopText(newText = "2.79% of Financial District riders is the highest range of riders who stay within the neighborhood",
		loc = 7/2, delayDisappear = 0, delayAppear = 1);
		changeTopText(newText = "That is nearly 18% of GoBike users who start from Financial District and do not leave the neighborhood "+
								"",
		loc = 7/2, delayDisappear = 9, delayAppear = 10, finalText = true);
		
	/*Show only the inner Financial District arc*/
	var arcFinancialDistrict = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.startAngle(0)
				.endAngle(0.13424);

	svg.append("path")
		.attr("class","arcFinancialDistrict")
		.attr("d", arcFinancialDistrict)
		.attr("opacity", 1)
		.attr("stroke", colors[9])
		.attr("fill", colors[9]);	

	/*Repeatedly let an arc change colour*/		
	
	d3.selectAll(".arcFinancialDistrict")
		.transition().duration(700)
		.attr("fill", colors[9])
		.style("stroke", colors[9]);

	repeat();

	function repeat() {
		d3.selectAll(".arcFinancialDistrict")
			.transition().duration(700)
			.attr("fill", "#9900e5")
			.style('stroke', "#9900e5")
			.transition().duration(700)
			.attr("fill", colors[9])
			.style("stroke", colors[9])
			.each("end", repeat);
	};
	
	/*Show only the inner Embarcadero chord*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 0 && d.target.index == 0) {return opacityValueBase;}
			else {return 0;}
		});

	/*Make the other strokes less visible*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke",function(d,i,j) {if (j == 9) {return "#000";} else {return "#DBDBDB";}});
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",function(d,i,j) {if (j == 9) {return 1;} else {return opacityValue;}});
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", function(d) { if(d.index == 9) {return 1;} else {return opacityValue;}});

};/*Draw10*/

/*//////////////////////////////////////////////////////////
//Show all chords that are connected to Apple
//////////////////////////////////////////////////////////*/
function Draw11(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	changeTopText(newText = "Here are all the chords showing riders biking from South Beach",
		loc = 4/2, delayDisappear = 0, delayAppear = 1, finalText = true, xloc=20, w=200);
		
	/*Remove the Financial District Arc*/
	d3.selectAll(".arcFinancialDistrict")
		.transition().duration(1000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".arcFinancialDistrict").remove();});
			
	/*Only show the chords of South Beach*/
	chords.transition().duration(2000)
    .attr("opacity", function(d, i) { 
		if(d.source.index == 4 || d.target.index == 4) {return opacityValueBase;}
		else {return 0;}
	});

	/*Highlight arc of South Beach*/
	svg.selectAll("g.group").select("path")
		.transition().duration(2000)
		.style("opacity", function(d) {
			if(d.index != 4) {return opacityValue;}
		});	
		
	/*Show only the ticks and text at South Beach*/
	/*Make the other strokes less visible*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke",function(d,i,j) {if (j == 4) {return "#000";} else {return "#DBDBDB";}});
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",function(d,i,j) {if (j == 4) {return 1;} else {return opacityValue;}});
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", function(d) { if(d.index == 4) {return 1;} else {return opacityValue;}});

};/*Draw11*/

function Draw12(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);
	
	var ToSouthBeach = 0;
	for(var i=0; i<34; i++){
		ToSouthBeach = ToSouthBeach + matrix[i][4]
	}

	changeTopText(newText = "South Beach is an interesting case "+
						"where number of the riders who travel from there tend to be greater than riders riding into South Beach",
		loc = 7/2, delayDisappear = 5, delayAppear = 1, finalText = true, xloc=120, w=200);
	// changeTopText(newText = "",
	// 	loc = 7/2, delayDisappear = 9, delayAppear = 10, finalText = true, xloc=120, w=200);

};/*Draw12*/
  
  
function Draw13(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);	

	changeTopText(newText = "One reason, commuters from places like closeby South of Market whose travel is generally one way",
		loc = 1/2, delayDisappear = 0, delayAppear = 1, finalText = false, xloc=-60, w=300);
	changeTopText(newText = "Trend holds for commuters from Mission district neighborhoods",
		loc = 7/2, delayDisappear = 9, delayAppear = 10, finalText = true, xloc=100, w=200);		
	
	/*Repeatedly let specific chords change opacity*/

	chords.transition().duration(700)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 5 && d.target.index == 25) {return opacityValueBase;}
			else if(d.source.index !== 5 && d.target.index == 25) {return 0.2;}
			else {return 0;}
		})
		.transition().delay(700*9).duration(700)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 0 && d.target.index == 4) {return opacityValueBase;}
			else if(d.source.index == 23 && d.target.index == 25) {return opacityValueBase;}
			else if(d.source.index !== 0 && d.target.index == 4 ||
					d.source.index !== 23 && d.target.index == 25) {return 0.2;}
			else {return 0;}
		});
};/*Draw13*/


function Draw14(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	/*runProgressBar(time=700*2);*/

	changeTopText(newText = "Thank you for staying with me so far! " +
							"The observations made utilizing chord diagram was "+
							"a fun way to see the distribution of the bike ridership data."+
							"I hope this was insightful.",
		loc = 8/2, delayDisappear = 0, delayAppear = 1, finalText = true);		
	
	chords.transition().duration(1000)
		.style("opacity", 0.1);

	/*Hide all the text*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke","#DBDBDB");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",0.4);
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity",0.4);	
		
};/*Draw14*/

/*///////////////////////////////////////////////////////////
//Draw the original Chord diagram
///////////////////////////////////////////////////////////*/
/*Go to the final bit*/
function finalChord() {
	
	/*Remove button*/
	d3.select("#clicker")
		.style("visibility", "hidden");
	d3.select("#skip")
		.style("visibility", "hidden");
	d3.select("#progress")
		.style("visibility", "hidden");
	
	/*Remove texts*/
	changeTopText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);
	changeBottomText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);			

	/*Create arcs or show them, depending on the point in the visual*/
	if (counter <= 4 ) {
		g.append("svg:path")
		  .style("stroke", function(d) { return fill(d.index); })
		  .style("fill", function(d) { return fill(d.index); })
		  .attr("d", arc)
		  .style("opacity", 0)
		  .transition().duration(1000)
		  .style("opacity", 1);
		  
	} else {
		 /*Make all arc visible*/
		svg.selectAll("g.group").select("path")
			.transition().duration(1000)
			.style("opacity", 1);
	};
	
	/*Make mouse over and out possible*/
	d3.selectAll(".group")
		.on("mouseover", fade(.02))
		.on("mouseout", fade(.80));
		
	/*Show all chords*/
	chords.transition().duration(1000)
		.style("opacity", opacityValueBase);

	/*Show all the text*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(100)
		.style("stroke","#000");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(100)
		.selectAll(".tickLabels").style("opacity",1);
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(100)
		.selectAll(".titles").style("opacity",1);		

};/*finalChord*/

/*//////////////////////////////////////////////////////////
////////////////// Extra Functions /////////////////////////
//////////////////////////////////////////////////////////*/

/*Returns an event handler for fading a given chord group*/
function fade(opacity) {
  return function(d, i) {
    svg.selectAll("path.chord")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
		.transition()
        .style("stroke-opacity", opacity)
        .style("fill-opacity", opacity);
  };
};/*fade*/

/*Returns an array of tick angles and labels, given a group*/
function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 1).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v + "%"
    };
  });
};/*groupTicks*/

/*Taken from https://groups.google.com/forum/#!msg/d3-js/WC_7Xi6VV50/j1HK0vIWI-EJ
//Calls a function only after the total transition ends*/
function endall(transition, callback) { 
    var n = 0; 
    transition 
        .each(function() { ++n; }) 
        .each("end", function() { if (!--n) callback.apply(this, arguments); }); 
};/*endall*/ 

/*Taken from http://bl.ocks.org/mbostock/7555321
//Wraps SVG text*/
function wrap(text, width) {
    var text = d3.select(this)[0][0],
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.4, 
        y = text.attr("y"),
		x = text.attr("x"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
		
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      };
    };  
};

/*Transition the top circle text*/
function changeTopText (newText, loc, delayDisappear, delayAppear, finalText, xloc, w) {

	/*If finalText is not provided, it is not the last text of the Draw step*/
	if(typeof(finalText)==='undefined') finalText = false;
	
	if(typeof(xloc)==='undefined') xloc = 0;
	if(typeof(w)==='undefined') w = 350;
	
	middleTextTop	
		/*Current text disappear*/
		.transition().delay(700 * delayDisappear).duration(700)
		.attr('opacity', 0)	
		/*New text appear*/
		.call(endall,  function() {
			middleTextTop.text(newText)
			.attr("y", -24*loc + "px")
			.attr("x", xloc + "px")
			.call(wrap, w);	
		})
		.transition().delay(700 * delayAppear).duration(700)
		.attr('opacity', 1)
		.call(endall,  function() {
			if (finalText == true) {
				d3.select("#clicker")
					.text(buttonTexts[counter-2])
					.style("pointer-events", "auto")
					.transition().duration(400)
					.style("border-color", "#363636")
					.style("color", "#363636");
				};
		});
};/*changeTopText */

/*Transition the bottom circle text*/
function changeBottomText (newText, loc, delayDisappear, delayAppear) {
	middleTextBottom
		/*Current text disappear*/
		.transition().delay(700 * delayDisappear).duration(700)
		.attr('opacity', 0)
		/*New text appear*/
		.call(endall,  function() {
			middleTextBottom.text(newText)
			.attr("y", 24*loc + "px")
			.call(wrap, 350);	
		})
		.transition().delay(700 * delayAppear).duration(700)
		.attr('opacity', 1);
;}/*changeTopText*/

/*Stop clicker from working*/
function stopClicker() {
	d3.select("#clicker")
		.style("pointer-events", "none")
		.transition().duration(400)
		.style("border-color", "#D3D3D3")
		.style("color", "#D3D3D3");
};/*stopClicker*/

/*Run the progress bar during an animation*/
function runProgressBar(time) {	
	
	/*Make the progress div visible*/
	d3.selectAll("#progress")
		.style("visibility", "visible");
	
	/*Linearly increase the width of the bar
	//After it is done, hide div again*/
	d3.selectAll(".prgsFront")
		.transition().duration(time).ease("linear")
		.attr("width", prgsWidth)
		.call(endall,  function() {
			d3.selectAll("#progress")
				.style("visibility", "hidden");
		});
	
	/*Reset to zero width*/
	d3.selectAll(".prgsFront")
		.attr("width", 0);
		
};/*runProgressBar*/