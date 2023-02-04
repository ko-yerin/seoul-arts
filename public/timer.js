function makeTimer() {
  //GMT 09:00한국 기준
  let endTime = new Date('4 February 2023 13:00:00 GMT+09:00')

  //미국 서부(뉴욕쪽) pst기준
  // let endTime = new Date('3 February 2023 20:00:00 GMT-08:00')

  endTime = (Date.parse(endTime) / 1000)

  let now = new Date() //현재 GMT시간
  now = (Date.parse(now) / 1000)

  let timeLeft = endTime - now

  let days = Math.floor(timeLeft / 86400)
  let hours = Math.floor((timeLeft - (days * 86400)) / 3600)
  let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60)
  let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)))

  // ✅설치 가능 alert
  if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {

    alert('🚀 Downloading available!!!')
  }
  // ✅기간 지나면 'Downloading text로
  else if (days < 0) {
    clearInterval(x);
    console.log('done?')
    $('#Downloaoding').html('<h3>Start Download</h3>')
    $('.days').html('')
    $('.hours').html('')
    $('.minutes').html('')
    $('.seconds').html('')
  }
  // ✅ 카운팅 ( 00:00:00 ) 작업
  else {
    if (hours < '10') {
      hours = '0' + hours
    }
    if (minutes < '10') {
      minutes = '0' + minutes
    }
    if (seconds < '10') {
      seconds = '0' + seconds
    }
    $('.days').html(`<span>Download start timer : ${days} Days</span>`)
    $('.hours').html(hours + '<span>:</span>')
    $('.minutes').html(minutes + '<span>:</span>')
    $('.seconds').html(seconds)
  }
}

x = setInterval(function() {
  makeTimer()
}, 1000)