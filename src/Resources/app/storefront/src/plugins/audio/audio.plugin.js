import Plugin from 'src/plugin-system/plugin.class';

export default class AudioPlugin extends Plugin {

  static options = {
    audioSelector: 'audio',
    playBtnSelector: '.toggle-play',
    timelineSelector: '.timeline',
    progressBarSelector: '.progress'
  };

  init() {
    this.audio = this.el.querySelector(this.options.audioSelector);
    this.playBtn = this.el.querySelector(this.options.playBtnSelector);
    this.timeline = this.el.querySelector(this.options.timelineSelector);
    this.progressBar = this.el.querySelector(this.options.progressBarSelector);

    this.registerEvents();

    //check audio percentage and update time accordingly
    setInterval(() => {
      this.progressBar.style.width = this.audio.currentTime / this.audio.duration * 100 + "%";
    }, 250);
  }

  registerEvents() {
    this.playBtn.addEventListener("click", this.togglePlayAudio.bind(this));
    this.timeline.addEventListener("click", this.timelineSkipp.bind(this));
  }

  togglePlayAudio() {
    this.audio.paused ? this.audio.play() : this.audio.pause()
  }

  timelineSkipp(e) {
    const timelineWidth = window.getComputedStyle(this.timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * this.audio.duration;
    this.audio.currentTime = timeToSeek;
  }
}

