const input = document.querySelector('.inp')
const btn = document.querySelector('.buy')
btn.addEventListener('click', function () {
    // alert('Nechta '+input.value+' sotib olmoqchisiz?')
    // alert(`Nechta ${input.value} sotib olmoqchisiz?`)
    var price = ' 3'
    console.log(num);
    var num = prompt('Nechta ' + input.value + ' sotib olmoqchisiz? ' + input.value+ ' narxi' + price + '$');
    // var kopaytir = price * num
    alert('Sizning savdoyingiz korzinkaga qo`shildi.')
    alert('Siz ' + num + ' ta ' + input.value + ' oldingiz! Savdoyingiz uchun rahmat.')
    input.value = ''
})