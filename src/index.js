// Gerar data aleatória
let now = new Date();
const maxDate = new Date();
maxDate.setDate(now.getDate() + 100);
const randomDate = new Date(now.getTime() + Math.random() * (maxDate.getTime() - now.getTime()));
const randomHour = Math.floor(Math.random() * 24);
const randomMinute = Math.floor(Math.random() * 60);
const randomSecond = Math.floor(Math.random() * 60);
randomDate.setHours(randomHour, randomMinute, randomSecond)

// Adicionar 0 a esquerda caso seja um número inferior a 10
const zeroLeft = (value) => {
  if(value < 10){
    value = "0" + value;
    return value;
  } else {
    return value;
  }
}

// Atualiza a view
setInterval(() => {
  now = new Date();
  const distance = randomDate.getTime() - now.getTime()

  document.getElementById('days').value = zeroLeft(Math.floor(distance / (1000 * 60 * 60 * 24)))

  document.getElementById('hours').value = zeroLeft(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))

  document.getElementById('minutes').value = zeroLeft(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))

  document.getElementById('seconds').value = zeroLeft(Math.floor((distance % (1000 * 60)) / 1000))
}, 1000)