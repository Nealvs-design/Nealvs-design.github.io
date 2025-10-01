const SVG_NS = "http://www.w3.org/2000/svg";

// create svg root
const svg = document.createElementNS(SVG_NS, "svg");
svg.setAttribute("width", "fit-content");
svg.setAttribute("height", "700");
svg.setAttribute("viewBox", "0 0 1800 700");


let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for(let i=0; i<7; i++){
  const rect = document.createElementNS(SVG_NS, "rect");
  const day = document.createElementNS(SVG_NS, "text");
  const sleepValue = document.createElementNS(SVG_NS, "text");
  const title = document.createElementNS(SVG_NS, "text");
  const instructions = document.createElementNS(SVG_NS, "text");


    rect.setAttribute("x", `${i*250 - 10}`);
    
    day.setAttribute("x", `${i*250}`);
    day.setAttribute("y", "690");
    day.setAttribute("font-family", "Arial");
    day.setAttribute("font-size", "24");
    day.setAttribute("fill", "#000");
    day.textContent = dayNames[i];

    sleepValue.setAttribute("x", `${i*250 +30}`);
    sleepValue.setAttribute("font-family", "Arial");
    sleepValue.setAttribute("font-size", "16");
    sleepValue.setAttribute("fill", "#000");

    title.setAttribute("x", `600`);
    title.setAttribute("y", "50");
    title.setAttribute("font-family", "Arial");
    title.setAttribute("font-size", "32");
    title.setAttribute("fill", "#000");
    title.textContent = "AMOUNT OF SLEEP I GOT LAST WEEK"

    instructions.setAttribute("x", `680`);
    instructions.setAttribute("y", "100");
    instructions.setAttribute("font-family", "Arial");
    instructions.setAttribute("font-size", "24");
    instructions.setAttribute("fill", "#888888");
    instructions.textContent = "hover over the bars to highlight them";




    if(i<2) {
        rect.setAttribute("y", "240");
        rect.setAttribute("width", "120");
        rect.setAttribute("height", "400");
        rect.setAttribute("rx", "8"); // rounded corners
        rect.setAttribute("fill", "rgba(76, 236, 36, 0.8)");
        
        sleepValue.setAttribute("y", "220");
        sleepValue.textContent = "6hrs";

    }
    else if(i<=4) {
        rect.setAttribute("y", "440");
        rect.setAttribute("width", "120");
        rect.setAttribute("height", "200");
        rect.setAttribute("rx", "8"); // rounded corners
        rect.setAttribute("fill", "rgba(76, 236, 36, 0.5)");
        
        sleepValue.setAttribute("y", "420");
        sleepValue.textContent = "4hrs";

    }

    else if(i>4) {
        rect.setAttribute("y", "90");
        rect.setAttribute("width", "120");
        rect.setAttribute("height", "550");
        rect.setAttribute("rx", "8"); // rounded corners
        rect.setAttribute("fill", "rgba(76, 236, 36, 1)");

        sleepValue.setAttribute("y", "70");
        sleepValue.textContent = "8hrs";

    }

    rect.addEventListener("mouseover", () => {
        rect.setAttribute("stroke", "black");
        rect.setAttribute("stroke-width", "3");
    });

    rect.addEventListener("mouseout", () => {
        rect.setAttribute("stroke", "none");
    });

    svg.appendChild(rect);
    svg.appendChild(day);
    svg.appendChild(sleepValue);
    svg.appendChild(title);
    svg.appendChild(instructions);

}

document.body.appendChild(svg);


// -----------------------------------------------------------

const drawing = document.createElementNS(SVG_NS, "svg");
drawing.setAttribute("width", "fit-content");
drawing.setAttribute("height", "700");
drawing.setAttribute("viewBox", "0 0 1800 700");

for (let i = 0; i < 120; i++) {
    const circle = document.createElementNS(SVG_NS, "circle");
    const rect = document.createElementNS(SVG_NS, "rect");  
    const line = document.createElementNS(SVG_NS, "line");

    const randomX = Math.random() * 1800;
    const randomY = Math.random() * 700;
    const randomRadius = Math.random() * 50 + 10;  
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomColorStroke = Math.floor(Math.random() * 16777215).toString(16);


    line.setAttribute("style",`transform: rotate(${i*0.8}deg);` );
    line.setAttribute("x1", "550");
    line.setAttribute("y1", "350");
    line.setAttribute("x2", "650");
    line.setAttribute("y2", "450");
    line.setAttribute("stroke", `#${randomColor}`);
    line.setAttribute("stroke-width", "1.5");
  
    
    drawing.appendChild(line);

 

    if (i%2==0){
    circle.setAttribute("cx", randomX);
    circle.setAttribute("cy", randomY);
    circle.setAttribute("r", randomRadius);
    circle.setAttribute("fill", `#${randomColor}`);
    circle.setAttribute("stroke", `#${randomColorStroke}`);
    circle.setAttribute("stroke-width", "1.5");
    drawing.appendChild(circle);

    }

    else {
        rect.setAttribute("x", randomX);
        rect.setAttribute("y", randomY);
        rect.setAttribute("width", randomRadius);
        rect.setAttribute("height", randomRadius);
        rect.setAttribute("fill", `#${randomColor}`);
        rect.setAttribute("stroke", `#${randomColorStroke}`);
        rect.setAttribute("stroke-width", "1.5");
        drawing.appendChild(rect);
    }
}



document.body.appendChild(drawing);








