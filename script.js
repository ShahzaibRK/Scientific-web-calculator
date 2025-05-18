// Create audio elements
const clickSound = new Audio('1.wav');  // short click beep sound (replace with your own base64 or URL)
const equalSound = new Audio('2.wav');  // special sound for equal (replace with your own base64 or URL)

// Function to play click sound
function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// Function to play equal sound
function playEqualSound() {
  equalSound.currentTime = 0;
  equalSound.play();
}

function append(value) {
  playClickSound();
  document.getElementById('display').value += value;
}

function clearDisplay() {
  playClickSound();
  document.getElementById('display').value = '';
}

function calculate() {
  playEqualSound();
  try {
    const input = document.getElementById('display').value;
    const result = eval(input);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

// Theme toggle code remains the same...
document.getElementById('themeSwitch').addEventListener('change', function () {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    document.body.style.backgroundColor = '#f0f0f0';
    document.querySelector('.calculator').style.backgroundColor = '#ffffff';
    document.querySelector('.display').style.backgroundColor = '#e0e0e0';
    document.querySelector('.display').style.color = '#000';
    document.querySelectorAll('button').forEach(btn => btn.style.color = '#000');
  } else {
    document.body.style.backgroundColor = '#121212';
    document.querySelector('.calculator').style.backgroundColor = '#1e1e1e';
    document.querySelector('.display').style.backgroundColor = '#2e2e2e';
    document.querySelector('.display').style.color = '#fff';
    document.querySelectorAll('button').forEach(btn => btn.style.color = '#fff');
  }
});
