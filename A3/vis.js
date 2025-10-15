// Load data from datasets/videogames_wide.csv using d3.csv and then make visualizations
async function fetchData() {
  const gameData = await d3.csv("./dataset/videogames_wide.csv");
  return gameData;
}

fetchData().then(async (gameData) => {
  // first visualization -------------------------
  const vlSpec = vl
    .markBar()
    .data(gameData)
    .encode(
      vl.y().fieldN("Platform").sort("-x"),
      vl.x().fieldQ("Global_Sales").aggregate("sum")
    )
    .width("container")
    .height(400)
    .toSpec();
// second visualization -------------------------
  const vlSpec2 = vl
    .markBar()
    .data(gameData)
    .encode(
      vl.y().fieldN("Genre").sort("-x"),
      vl.x().fieldQ("Global_Sales").aggregate("sum"),
      vl.color().value("teal")
    )
    .width("container")
    .height(400)
    .toSpec();

  // Visualization 1 -------------------------

  const vlSpec3 = vl
  .markCircle({"tooltip": true})
  .data(gameData)
  .encode(
      vl.color().fieldQ("Global_Sales").aggregate("sum"),
      vl.size().fieldQ("Global_Sales").aggregate("sum"),
      vl.tooltip().fieldQ("Global_Sales").aggregate("sum"),
      vl.y().fieldO("Genre"),
      vl.x().fieldN("Platform").title("PLATFORMS"),
    )
    .width(1000)
    .height(400)
    .toSpec();

    // Visualization 2------------------------

  const vlSpec4 = vl
  .markLine({"tooltip": true})
  .data(gameData)
  .encode(
    vl.x().fieldQ("Year").scale({"domain" : [1979,2025]}).bin({"maxbins": 50}),
    vl.color().fieldN("Platform"),
    vl.size().fieldN("Platform"),
    vl.y().fieldQ("Global_Sales").aggregate("sum"),
  )
  .height(400)
  .width(1000) 
  .toSpec();

  const vlSpec5 = vl
  .markLine({"tooltip": true})
  .data(gameData)
  .encode(
    vl.x().fieldQ("Year").scale({"domain" : [1979,2025]}).bin({"maxbins": 50}),
    vl.color().fieldN("Genre"),
    vl.size().fieldN("Genre"),
    vl.y().fieldQ("Global_Sales").aggregate("sum"),

)
  .height(400)
  .width(1000) 
  .toSpec();

  // Visualization 3------------------------

  const vlSpec6 = vl
  .markBar({"tooltip": true})
  .data(gameData)
  .encode(
    // vl.y().fieldQ("Global_Sales").aggregate("sum"),
    vl.y().fieldQ("NA_Sales").aggregate("sum"),
    // vl.y2().fieldQ("EU_Sales").bin(true),
    // vl.y3().fieldQ("JP_Sales").bin(true),
    // vl.y4().fieldQ("Other_Sales").bin(true),
    vl.x().fieldN("Platform"),
  )
  .height(400)
  .toSpec();

  const vlSpec7 = vl
  .markBar({"tooltip": true})
  .data(gameData)
  .encode(
  // vl.y().fieldQ("Global_Sales").aggregate("sum"),
  // vl.y().fieldQ("NA_Sales").aggregate("sum"),
  vl.y().fieldQ("EU_Sales").aggregate("sum"),
  // vl.y().fieldQ("JP_Sales").aggregate("sum"),
  // vl.y().fieldQ("Other_Sales").aggregate("sum"),

  vl.x().fieldN("Platform"),

)
  .height(400)
  .toSpec();

  const vlSpec8 = vl
  .markBar({"tooltip": true})
  .data(gameData)
    .encode(
    // vl.y().fieldQ("Global_Sales").aggregate("sum"),
    // vl.y().fieldQ("NA_Sales").aggregate("sum"),
    // vl.y().fieldQ("EU_Sales").aggregate("sum"),
    vl.y().fieldQ("JP_Sales").aggregate("sum"),
    // vl.y().fieldQ("Other_Sales").aggregate("sum"),

    vl.x().fieldN("Platform"),
  
  )
  .height(400)
  .toSpec();

  const vlSpec9 = vl
  .markBar({"tooltip": true})
  .data(gameData)
  .encode(
    // vl.y().fieldQ("Global_Sales").aggregate("sum"),
    // vl.y().fieldQ("NA_Sales").aggregate("sum"),
    // vl.y().fieldQ("EU_Sales").aggregate("sum"),
    // vl.y().fieldQ("JP_Sales").aggregate("sum"),
    vl.y().fieldQ("Other_Sales").aggregate("sum"),

    vl.x().fieldN("Platform"),
  )
  .height(400)
  .toSpec();

    // Visualization 4------------------------

  const vlSpec10 =vl
  .markLine({"tooltip": true})
  .data(gameData)
  .encode(
    vl.x().fieldQ("Year").scale({"domain" : [1979,2025]}).bin({"maxbins": 50}),
    vl.color().fieldN("Genre"),
    vl.y().fieldQ("JP_Sales").aggregate("sum"),
    // vl.tooltip().fieldQ("Global_Sales", "Year"),

  )
  .height(400)
  .width(1000)
  .toSpec();


  // render the visualizations

  
  render("#view", vlSpec);
  render("#view2", vlSpec2);
  render("#view3", vlSpec3);
  render("#view4", vlSpec4);
  render("#view5", vlSpec5); 
  render("#view6", vlSpec6);
  render("#view7", vlSpec7);
  render("#view8", vlSpec8);
  render("#view9", vlSpec9);
  render("#view10", vlSpec10);
});

async function render(viewID, spec) {
  const result = await vegaEmbed(viewID, spec);
  result.view.run();
}
