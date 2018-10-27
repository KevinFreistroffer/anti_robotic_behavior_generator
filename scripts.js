"use strict";

(function() {
  let startButton = $('#start');
  let select = $('#select');
  let audio = $('#audio');

  let startSeconds = Math.ceil((new Date().getTime()) / 1000);
  let endSeconds = 0;
  let alarmTime;
  let min = $('#min').keyup(() => { minimumIntervalInMinutes = $('#min').val() });
  let max = $('#max').keyup(() => { maximumIntervalInMinutes = $('#max').val() });
  let minimumIntervalInMinutes = min;
  let maximumIntervalInMinutes = max;
  let minimumTimeBetweenAlarms = 60 * minimumIntervalInMinutes
  // let alarm = new Audio('violins.mp3');

  $(startButton).click(() => {
    setAlarm();
    startAlarm();
  });

  $(select).on('change', (event) =>   {
    let target = event.currentTarget;
    let file = target.files[0];
      URL.createObjectURL(file);
    //$(audio).attr('src', URL.createObjectURL(file));
    $(audio).attr('src', './violins.mp3');
  });

  const setAlarm = () => {
    let randomFutureTimeInMinutes = Math.ceil( Math.random() * maximumIntervalInMinutes );
    endSeconds = startSeconds + randomFutureTimeInMinutes * 60;
  };

  const startAlarm = () => {

    $(startButton).html("Timer started");

    let secondsInterval = setInterval(() => {
      startSeconds += 1;
      if ( startSeconds === endSeconds ) {
        console.log(`MUSIC NOTESSS`);
        let a = document.getElementById('audio').play();
        clearInterval(secondsInterval);
      }
    }, 1000);
    
      let a = document.getElementById('audio').play();

  }
  
})();
