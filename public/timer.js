function makeTimer() {

  let endTime = new Date('4 February 2023 13:00:00 GMT+09:00')
  // let endTime = new Date('4 February 2023 19:00:00 GMT+09:00')
  //GMT 09:00한국 기준
  // let endTime = new Date('2 February 2023 08:43:00 GMT+01:00')

  endTime = (Date.parse(endTime) / 1000)

  let now = new Date() //현재 GMT시간
  now = (Date.parse(now) / 1000)

  let timeLeft = endTime - now

  let days = Math.floor(timeLeft / 86400)
  let hours = Math.floor((timeLeft - (days * 86400)) / 3600)
  let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60)
  let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)))
  if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {

    alert('🚀 다운로드 가능합니다!!!')
    //날짜도 여기로
  }
  else if (days < 0) {
    $('#days').html('<p>다운로드 가능</p>')
    $('#hours').html('<p>다운로드 가능</p>')
    $('#minutes').html('<p>다운로드 가능</p>')
    $('#seconds').html('<p>다운로드 가능</p>')
  }
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
      $('.days').html(days + '<span>Days</span>')
      $('.hours').html(hours + '<span>:</span>')
      $('.minutes').html(minutes + '<span>:</span>')
      $('.seconds').html(seconds)
  }
}

setInterval(function() {
  makeTimer()
}, 1000)