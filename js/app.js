// js/app.js
// Главный координатор приложения с отдельным экраном «О проекте»

import { SETS_DATA } from './data/catalog.js';
import { CAT_WALK_STORY } from './data/catWalkStory.js';
import { soundManager } from './engine/sound.js';

class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
    
    // Тема по умолчанию: "mint"
    this.currentTheme = localStorage.getItem('story_theme') || 'mint';
    this.applyTheme(this.currentTheme);

    // Состояние приложения (State)
    this.state = {
      screen: 'SETS', // 'SETS' | 'STORIES' | 'COVER' | 'QUEST' | 'ABOUT'
      selectedSetId: 'set-1',
      selectedStoryId: null,
      currentStep: 1,
      backpackItem: null,
      collectedBadges: []
    };

    this.init();
  }

  init() {
    this.render();
  }

  applyTheme(themeName) {
    this.currentTheme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('story_theme', themeName);
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === 'day' ? 'mint' : 'day';
    this.applyTheme(nextTheme);
    this.render();
  }

  renderHeaderControls(includeTheme = false) {
    const themeIcon = this.currentTheme === 'day' ? '☀️' : '🌿';
    const soundIcon = soundManager.speechEnabled ? '🔊' : '🔇';
    return `
      <div class="header-actions">
        ${includeTheme ? `<button class="btn-icon" id="themeToggle" title="Сменить тему">${themeIcon}</button>` : ''}
        <button class="btn-icon" id="soundToggle" title="Звук">${soundIcon}</button>
      </div>
    `;
  }

  setupHeaderControls(includeTheme = false) {
    if (includeTheme) {
      const themeBtn = document.getElementById('themeToggle');
      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          soundManager.playChime();
          this.toggleTheme();
        });
      }
    }

    const soundBtn = document.getElementById('soundToggle');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        soundManager.speechEnabled = !soundManager.speechEnabled;
        soundBtn.innerText = soundManager.speechEnabled ? '🔊' : '🔇';
        if (!soundManager.speechEnabled && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
      });
    }
  }

  render() {
    if (this.state.screen === 'SETS') {
      this.renderSetsScreen();
    } else if (this.state.screen === 'ABOUT') {
      this.renderAboutScreen();
    } else if (this.state.screen === 'STORIES') {
      this.renderStoriesScreen();
    } else if (this.state.screen === 'COVER') {
      this.renderCoverScreen();
    } else if (this.state.screen === 'QUEST') {
      this.renderQuestScreen();
    }
  }

  // ===================== ЭКРАН 1: ВЫБОР СЕТА =====================
  renderSetsScreen() {
    this.appContainer.innerHTML = `
      <header class="header-bar">
        <div class="btn-icon" title="Сказки-тренажёры">🐱</div>
        <div class="header-title-container">
          <div class="header-title">Приключения Котёнка</div>
        </div>
        ${this.renderHeaderControls(true)}
      </header>
      
      <main class="screen">
        <h2 style="font-size: 1.45rem; font-weight: 900; text-align: center; color: var(--text-main); margin-bottom: 4px;">
          Выбери волшебный мир
        </h2>
        <p style="text-align: center; color: var(--text-muted); font-size: 0.95rem; margin-bottom: 12px;">
          4 обучающих направления для малышей
        </p>
        
        <div class="sets-grid">
          ${SETS_DATA.map(set => `
            <div class="set-card" data-set-id="${set.id}">
              <div class="set-icon-box">${set.icon}</div>
              <div style="flex: 1;">
                <div class="card-title">${set.title}</div>
                <div class="card-subtitle">${set.subtitle}</div>
                <span class="badge-tag">4 сказки</span>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="footer-about-container">
          <button class="btn-about" id="btnAbout">
            <span>💖</span>
            <span>О проекте</span>
          </button>
        </div>
      </main>
    `;

    this.appContainer.querySelectorAll('.set-card').forEach(card => {
      card.addEventListener('click', () => {
        soundManager.playChime();
        const setId = card.getAttribute('data-set-id');
        this.state.selectedSetId = setId;
        this.state.screen = 'STORIES';
        this.render();
      });
    });

    document.getElementById('btnAbout')?.addEventListener('click', () => {
      soundManager.playChime();
      this.state.screen = 'ABOUT';
      this.render();
    });

    this.setupHeaderControls(true);
  }

  // ===================== ЭКРАН «О ПРОЕКТЕ» (АККУРАТНЫЙ И АДАПТИВНЫЙ) =====================
  renderAboutScreen() {
    this.appContainer.innerHTML = `
      <header class="header-bar">
        <button class="btn-icon" id="btnBackFromAbout" title="Назад">⬅️</button>
        <div class="header-title-container">
          <div class="header-title">О проекте</div>
        </div>
        ${this.renderHeaderControls(false)}
      </header>

      <main class="screen about-stage">
        <div class="about-card-box">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 4px;">
            <span style="font-size: 40px;">🐱</span>
            <div>
              <h3 style="font-size: 1.3rem; font-weight: 900; color: var(--header-title-color);">«Приключения Котёнка»</h3>
              <p style="font-size: 0.92rem; color: var(--text-muted);">Развивающие интерактивные сказки (2–4 года)</p>
            </div>
          </div>

          <p style="font-size: 1rem; color: var(--text-main); line-height: 1.45;">
            Добрый тренажёр социальных историй и полезных привычек, где малыш помогает пушистому герою принимать решения.
          </p>

          <div class="about-item">
            <span class="about-item-icon">🌸</span>
            <span><strong>Zero-Stress:</strong> без проигрышей, ошибок и таймеров</span>
          </div>

          <div class="about-item">
            <span class="about-item-icon">🗣️</span>
            <span><strong>Запуск речи:</strong> простые звукоподражания и ритмичные фразы</span>
          </div>

          <div class="about-item">
            <span class="about-item-icon">☀️</span>
            <span><strong>Привычки:</strong> мягкое освоение сна, гигиены и сборов</span>
          </div>

          <div class="about-item">
            <span class="about-item-icon">💛</span>
            <span><strong>Бережно:</strong> пастельные тона без резких вспышек</span>
          </div>
        </div>

        <button class="btn-start-story glowing-border" id="btnBackToHome" style="margin: 0 auto; width: 100%; max-width: 320px; justify-content: center;">
          <span>⬅️</span>
          <span>На главный экран</span>
        </button>
      </main>
    `;

    const goBack = () => {
      soundManager.playChime();
      this.state.screen = 'SETS';
      this.render();
    };

    document.getElementById('btnBackFromAbout')?.addEventListener('click', goBack);
    document.getElementById('btnBackToHome')?.addEventListener('click', goBack);

    this.setupHeaderControls(false);
  }

  // ===================== ЭКРАН 2: СПИСОК СКАЗОК =====================
  renderStoriesScreen() {
    const currentSet = SETS_DATA.find(s => s.id === this.state.selectedSetId) || SETS_DATA[0];

    this.appContainer.innerHTML = `
      <header class="header-bar">
        <button class="btn-icon" id="btnBackToSets" title="Назад к сетам">⬅️</button>
        <div class="header-title-container">
          <div class="header-title">${currentSet.title}</div>
        </div>
        ${this.renderHeaderControls(false)}
      </header>

      <main class="screen">
        <h2 style="font-size: 1.45rem; font-weight: 900; text-align: center; color: var(--text-main); margin-bottom: 16px;">
          Выбери сказку для игры
        </h2>

        <div class="stories-grid">
          ${currentSet.stories.map(story => {
            const isPlayable = story.id === 'cat-walk';
            return `
              <div class="story-card ${isPlayable ? '' : 'disabled'}" data-story-id="${story.id}">
                <div class="story-card-icon">${story.icon}</div>
                <div style="flex: 1;">
                  <div class="card-title">${story.title}</div>
                  <div class="card-subtitle">${story.subtitle}</div>
                  <span class="badge-tag">
                    ${story.badge}
                  </span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </main>
    `;

    document.getElementById('btnBackToSets').addEventListener('click', () => {
      soundManager.playChime();
      this.state.screen = 'SETS';
      this.render();
    });

    this.appContainer.querySelectorAll('.story-card').forEach(card => {
      card.addEventListener('click', () => {
        const storyId = card.getAttribute('data-story-id');
        if (storyId === 'cat-walk') {
          soundManager.playChime();
          this.state.selectedStoryId = storyId;
          this.state.screen = 'COVER';
          this.render();
        }
      });
    });

    this.setupHeaderControls(false);
  }

  // ===================== ЭКРАН ОБЛОЖКИ =====================
  renderCoverScreen() {
    this.appContainer.innerHTML = `
      <header class="header-bar">
        <button class="btn-icon" id="btnBackToStories" title="Назад к сказкам">⬅️</button>
        <div class="header-title-container">
          <div class="header-title">Сказка готова!</div>
        </div>
        ${this.renderHeaderControls(false)}
      </header>

      <main class="screen story-cover-stage">
        <div class="cover-avatar-box">🐱</div>
        <h2 class="cover-title">Большая прогулка Котёнка</h2>
        <p class="cover-desc">
          Уютная развивающая сказка-тренажёр на 7 шагов: утро, вкусный завтрак, ручеёк и тёплый дом.
        </p>

        <button class="btn-start-story glowing-border" id="btnStartQuest">
          <span>▶️</span>
          <span>Начать сказку</span>
        </button>
      </main>
    `;

    document.getElementById('btnBackToStories').addEventListener('click', () => {
      soundManager.playChime();
      this.state.screen = 'STORIES';
      this.render();
    });

    document.getElementById('btnStartQuest').addEventListener('click', () => {
      soundManager.playChime();
      this.state.currentStep = 1;
      this.state.backpackItem = null;
      this.state.collectedBadges = [];
      this.state.screen = 'QUEST';
      this.render();
    });

    this.setupHeaderControls(false);
  }

  // ===================== ЭКРАН 3: ИГРОВАЯ СЦЕНА КВЕСТА =====================
  renderQuestScreen() {
    const scene = CAT_WALK_STORY.scenes.find(s => s.step === this.state.currentStep);
    
    let beforeSvg = scene.beforeSvg;
    let speechText = scene.speechText;
    let soundEffectText = scene.soundEffectText;
    let choices = scene.choices;

    if (scene.dynamicBranch) {
      const branchKey = this.state.backpackItem || 'umbrella';
      const branchData = scene.branches[branchKey];
      beforeSvg = branchData.beforeSvg;
      speechText = branchData.speechText;
      soundEffectText = branchData.soundEffectText;
      choices = branchData.choices;
    }

    this.appContainer.innerHTML = `
      <header class="header-bar">
        <button class="btn-icon" id="btnExitQuest" title="Выйти в меню">🏠</button>
        
        <div class="header-title-container">
          <div class="header-title">${scene.headerText}</div>
          <div class="choice-badges-container" id="badgesRow" title="Твои выборы">
            ${this.renderBadgesSlots()}
          </div>
        </div>

        ${this.renderHeaderControls(false)}
      </header>

      <main class="screen quest-stage">
        <div class="scene-illustration" id="sceneIllustration">
          ${beforeSvg}
        </div>

        <div class="speech-bubble" id="speechBubble">
          <span id="speechTextContent">${speechText}</span>
          <div>
            <span class="speech-sound-tag" id="speechSoundTag">${soundEffectText}</span>
          </div>
        </div>

        <div id="speakingNotice" class="speaking-indicator">
          <span>🎧 Слушаем рассказчика...</span>
        </div>

        <div class="choices-row" id="choicesRow">
          ${choices.map(choice => `
            <button class="choice-btn glowing-border" data-choice-id="${choice.id}">
              <div class="choice-icon">${choice.icon}</div>
              <div class="choice-title">${choice.title}</div>
            </button>
          `).join('')}
        </div>
      </main>
    `;

    soundManager.speak(speechText, () => {
      this.revealChoices();
    });

    this.setupQuestEvents(scene, choices);
    this.setupHeaderControls(false);
  }

  revealChoices() {
    const notice = document.getElementById('speakingNotice');
    if (notice) {
      notice.style.display = 'none';
    }
    const choicesRow = document.getElementById('choicesRow');
    if (choicesRow) {
      choicesRow.classList.add('visible');
    }
  }

  renderBadgesSlots() {
    const slots = [];
    for (let i = 0; i < 5; i++) {
      const badge = this.state.collectedBadges[i];
      if (badge) {
        slots.push(`<div class="choice-badge-slot filled">${badge}</div>`);
      } else {
        slots.push(`<div class="choice-badge-slot"></div>`);
      }
    }
    return slots.join('');
  }

  setupQuestEvents(scene, choices) {
    document.getElementById('btnExitQuest').addEventListener('click', () => {
      soundManager.playChime();
      this.state.screen = 'STORIES';
      this.render();
    });

    this.appContainer.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const choiceId = btn.getAttribute('data-choice-id');
        const chosen = choices.find(c => c.id === choiceId);
        
        if (chosen.soundType === 'knock') {
          soundManager.playKnock();
        } else {
          soundManager.playChime();
        }

        if (chosen.badgeIcon) {
          this.addBadge(chosen.badgeIcon);
        }

        if (scene.isBackpackChoice) {
          this.state.backpackItem = choiceId;
        }

        const choicesRow = document.getElementById('choicesRow');
        if (choicesRow) {
          choicesRow.classList.remove('visible');
          choicesRow.style.opacity = '0';
          choicesRow.style.pointerEvents = 'none';
        }

        // Замена картинки на «ПОСЛЕ»
        const illustration = document.getElementById('sceneIllustration');
        if (illustration && chosen.afterSvg) {
          illustration.classList.add('transitioning');
          setTimeout(() => {
            illustration.innerHTML = chosen.afterSvg;
            illustration.classList.remove('transitioning');
          }, 200);
        }

        const textElem = document.getElementById('speechTextContent');
        const tagElem = document.getElementById('speechSoundTag');
        if (textElem && chosen.reactionSpeech) {
          textElem.innerText = chosen.reactionSpeech;
        }
        if (tagElem && chosen.reactionSoundText) {
          tagElem.innerText = chosen.reactionSoundText;
        }

        soundManager.speak(chosen.reactionSpeech, () => {
          setTimeout(() => {
            if (scene.interactiveType === 'finish') {
              this.renderFinalScreen();
            } else {
              this.state.currentStep += 1;
              this.render();
            }
          }, 1500);
        });
      });
    });
  }

  addBadge(badgeIcon) {
    this.state.collectedBadges.push(badgeIcon);
    const badgesRow = document.getElementById('badgesRow');
    if (badgesRow) {
      badgesRow.innerHTML = this.renderBadgesSlots();
    }
  }

  renderFinalScreen() {
    this.appContainer.innerHTML = `
      <header class="header-bar">
        <button class="btn-icon" id="btnRestart">🏠</button>
        <div class="header-title-container">
          <div class="header-title">Ты умничка!</div>
          <div class="choice-badges-container">
            ${this.renderBadgesSlots()}
          </div>
        </div>
        ${this.renderHeaderControls(false)}
      </header>
      
      <main class="screen" style="align-items: center; justify-content: center; text-align: center; gap: 20px;">
        <div style="font-size: 84px; animation: popIn 0.6s ease;">😻</div>
        <h2 style="font-size: 1.7rem; font-weight: 900; color: var(--header-title-color);">Какая чудесная получилась прогулка!</h2>
        <div class="speech-bubble" style="max-width: 520px;">
          Ты помог Котёнку одеться, накормил, перевёл через ручеёк и спас от непогоды! 
          Котёнок мурлычет и передаёт тебе огромный пушистый привет: <strong>Мур-р-мяу!</strong>
        </div>
        <button class="btn-start-story glowing-border" id="btnPlayAgain" style="margin-top: 10px;">
          <span>🔄</span>
          <span>Играть снова!</span>
        </button>
      </main>
    `;

    document.getElementById('btnRestart').addEventListener('click', () => {
      this.state.screen = 'STORIES';
      this.render();
    });

    document.getElementById('btnPlayAgain').addEventListener('click', () => {
      soundManager.playChime();
      this.state.currentStep = 1;
      this.state.backpackItem = null;
      this.state.collectedBadges = [];
      this.state.screen = 'QUEST';
      this.render();
    });

    this.setupHeaderControls(false);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
