const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan jari-jari lingkaran: ', (radius) => {
  const area = Math.PI * radius * radius;
  
  console.log(`Luas lingkaran dengan jari-jari ${radius} adalah ${area.toFixed(2)}.`);

  rl.close();
});
