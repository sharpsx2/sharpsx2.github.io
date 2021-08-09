let mouse = "Glorious Model O (matte white)";
let keyboard = "Razer Huntsman (black)";
let display = "Acer KG241QS (oc 165hz) & Samsung S24F350 (oc 75hz)";
let microphone = "Arozzi Stefa";
let phone = "Oneplus Nord N10 5G";

let cpu = "AMD Ryzen 5 3600";
let motherboard = "ASUS Prime B450-PLUS";
let ram = "16GB (2x8GB) 2400MHz";
let gpu = "RX 580";
let psu = "Corsair CV650";
let storage = "Samsung 860 EVO SSD: 0.5TB & 1TB";
let storage2 = "Western Digital SATA HDD: 300GB & 300GB";
let chassis = "Fractal Design Focus G";
let os = "Feren OS";

let whole = "Mouse: <b class=" + '"' + "equip" + '"' + ">" + mouse + "</b>";
whole =
  whole +
  "<br />Keyboard: <b class=" +
  '"' +
  "equip" +
  '"' +
  ">" +
  keyboard +
  "</b>";
whole =
  whole +
  "<br />Display: <b class=" +
  '"' +
  "equip" +
  '"' +
  ">" +
  display +
  "</b>";
whole =
  whole +
  "<br />Microphone: <b class=" +
  '"' +
  "equip" +
  '"' +
  ">" +
  microphone +
  "</b>";
whole =
  whole + "<br />Phone: <b class=" + '"' + "equip" + '"' + ">" + phone + "</b>";
whole =
  whole +
  "<br /><br />Processor:<b class=" +
  '"' +
  "equip" +
  '"' +
  ">" +
  cpu +
  "</b>";
whole =
  whole +
  "<br />Motherboard: <b class=" +
  '"' +
  "equip" +
  '"' +
  ">" +
  motherboard +
  "</b>";
whole =
  whole + "<br />RAM: <b class=" + '"' + "equip" + '"' + ">" + ram + "</b>";
whole =
  whole +
  "<br />Graphics Card: <b class=" +
  '"' +
  "equip" +
  '"' +
  ">" +
  gpu +
  "</b>";
whole =
  whole +
  "<br />Power Supply: <b class=" +
  '"' +
  "equip" +
  '"' +
  ">" +
  psu +
  "</b>";
whole =
  whole +
  "<br />Storage: <b class=" +
  '"' +
  "equip" +
  '"' +
  ">" +
  storage +
  "</b>";
whole =
  whole +
  "<br />Storage 2: <b class=" +
  '"' +
  "equip" +
  '"' +
  ">" +
  storage2 +
  "</b>";
whole =
  whole +
  "<br />Case: <b class=" +
  '"' +
  "equip" +
  '"' +
  ">" +
  chassis +
  "</b>";
whole = whole + "<br />OS: <b class=" + '"' + "equip" + '"' + ">" + os + "</b>";

document.getElementById("equipment").innerHTML = whole;
