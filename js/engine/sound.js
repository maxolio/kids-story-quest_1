// js/engine/sound.js
// Модуль звуков и озвучки с обратным вызовом onEnd

class SoundManager {
  constructor() {
    this.ctx = null;
    this.speechEnabled = true;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Мягкий перезвон колокольчика при выборе
  playChime() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.5);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  // Звук стука в окошко «Тук-тук»
  playKnock() {
    try {
      this.initContext();
      if (!this.ctx) return;

      [0, 0.16].forEach(delay => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, this.ctx.currentTime + delay);
        gain.gain.setValueAtTime(0.35, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + delay + 0.09);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + 0.09);
      });
    } catch (e) {
      console.warn(e);
    }
  }

  // Озвучка речи диктора с передачей колбэка окончания фразы onFinish
  speak(text, onFinish) {
    if (!this.speechEnabled || !('speechSynthesis' in window)) {
      // Если звук отключен или не поддерживается, завершаем через 1.5 сек
      if (onFinish) setTimeout(onFinish, 1500);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.92;
    utterance.pitch = 1.15;

    let hasFinished = false;
    const finish = () => {
      if (!hasFinished) {
        hasFinished = true;
        if (onFinish) onFinish();
      }
    };

    utterance.onend = finish;
    utterance.onerror = finish;

    // Страховочный таймер: если браузер заглушил речь, кнопки появятся через расчётное время
    const estimatedDuration = Math.max(2500, (text.length / 15) * 1000);
    setTimeout(finish, estimatedDuration);

    window.speechSynthesis.speak(utterance);
  }
}

export const soundManager = new SoundManager();
