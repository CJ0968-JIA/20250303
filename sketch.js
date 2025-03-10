let slider;
let button;
let dropdown;
let shake = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createInputBox();
  createSliderBox();
  createShakeButton();
  createDropdownMenu();
}

function draw() {
  background(0); // 設置背景顏色為黑色
  displayText();
}

function createInputBox() {
  let input = createInput();
  input.position(10, 10);
  input.input(updateText);
  input.style('width', '200px');
  input.style('height', '30px');
  input.size(200, 50);
}

function createSliderBox() {
  slider = createSlider(28, 50, 32);
  slider.position(220, 10);
}

function createShakeButton() {
  button = createButton('Shake Text');
  button.position(400, 10);
  button.mousePressed(toggleShake);
}

function createDropdownMenu() {
  dropdown = createSelect();
  dropdown.position(550, 10);
  dropdown.option('淡江大學');
  dropdown.option('淡江大學教育科技學系');
  dropdown.option('第三周');
  dropdown.changed(handleDropdownChange);
}

function handleDropdownChange() {
  let selected = dropdown.value();
  if (selected === '淡江大學') {
    window.open('https://www.tku.edu.tw/', '_blank');
  } else if (selected === '淡江大學教育科技學系') {
    window.open('https://www.et.tku.edu.tw/', '_blank');
  } else if (selected === '第三周') {
    window.open('https://cj0968-jia.github.io/0310/');
  }
}

function toggleShake() {
  shake = !shake;
}

let inputText = '';

function updateText() {
  inputText = this.value();
}

function displayText() {
  let textSizeValue = slider.value();
  textSize(textSizeValue);
  textAlign(CENTER, CENTER);
  fill(255); // 設置文字顏色為白色
  let displayText = inputText.split('').join(' ');
  let repeatedText = displayText + ' ' + displayText;
  for (let y = 100; y < height; y += 40) {
    let yOffset = shake ? sin(frameCount * 0.1 + y) * 10 : 0;
    text(repeatedText, width / 2, y + yOffset);
  }
}
