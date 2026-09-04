// js/data/catWalkStory.js
// Сценарий «Большая прогулка Котёнка» с механикой «ДО» ➔ «ПОСЛЕ» и путями к реальным изображениям

const STORIES_BASE = 'assets/images/stories/cat-walk';
const BADGES_BASE = 'assets/images/badges/cat-walk';

export const CAT_WALK_STORY = {
  id: "cat-walk",
  title: "Большая прогулка Котёнка",
  hero: "Котёнок",
  scenes: [
    // -------------------------------------------------------------
    // СЦЕНА 1: Утро и окошко
    // -------------------------------------------------------------
    {
      step: 1,
      headerText: "Котёнок: Утро",
      beforeImage: `${STORIES_BASE}/scene1-morning-before.png`,
      speechText: "Глазки открываются... С добрым утром, малыш! Посмотри, Котёнок проснулся и сладко зевает: А-а-а-х! Постучи пальчиком по окошку: Тук-тук-тук!",
      soundEffectText: "«А-а-ах! Тук-тук-тук!»",
      choices: [
        {
          id: "window",
          icon: `${BADGES_BASE}/badge-window.png`,
          title: "Постучи в окошко: Тук-тук!",
          soundType: "knock",
          badgeIcon: `${BADGES_BASE}/badge-window.png`,
          afterImage: `${STORIES_BASE}/scene1-morning-after.png`,
          reactionSpeech: "Тук-тук! Шторки распахнулись! За окном солнышко светит, птички поют! Доброе утро, мир!",
          reactionSoundText: "«Тук-тук! Ура, солнышко!»"
        }
      ]
    },

    // -------------------------------------------------------------
    // СЦЕНА 2: Вкусный завтрак
    // -------------------------------------------------------------
    {
      step: 2,
      headerText: "Котёнок: Завтрак",
      beforeImage: `${STORIES_BASE}/scene2-breakfast-before.png`,
      speechText: "Ой, а чем это так вкусно пахнет на кухне? Давай потянем носиком: Нюх-нюх-нюх! Чем мы сегодня угостим Котёнка?",
      soundEffectText: "«Нюх-нюх! Мур-р-р!»",
      choices: [
        {
          id: "milk",
          icon: `${BADGES_BASE}/badge-milk.png`,
          title: "Тёплое молочко",
          soundType: "chime",
          badgeIcon: `${BADGES_BASE}/badge-milk.png`,
          afterImage: `${STORIES_BASE}/scene2-breakfast-after-milk.png`,
          reactionSpeech: "Тёплое молочко! Лакаем язычком: Хлюп-хлюп-хлюп! Оближем губки: М-м-м! Белые усики в молочке, сыт Котёнок!",
          reactionSoundText: "«Хлюп-хлюп! М-м-м!»"
        },
        {
          id: "porridge",
          icon: `${BADGES_BASE}/badge-porridge.png`,
          title: "Творожная кашка",
          soundType: "chime",
          badgeIcon: `${BADGES_BASE}/badge-porridge.png`,
          afterImage: `${STORIES_BASE}/scene2-breakfast-after-porridge.png`,
          reactionSpeech: "Вкусная кашка с ягодками! Ложечку в ротик — Ам-ням-ням! Животик гладим кружочком: сыт малыш, лапки полны сил!",
          reactionSoundText: "«Ам-ням-ням! Вкусно!»"
        }
      ]
    },

    // -------------------------------------------------------------
    // СЦЕНА 3: Одеваемся на прогулку
    // -------------------------------------------------------------
    {
      step: 3,
      headerText: "Котёнок: Одеваемся",
      beforeImage: `${STORIES_BASE}/scene3-dress-before.png`,
      speechText: "Ножки-ножки, бежали по дорожке! Но на улице мокрые лужицы. Во что же обуть пушистые лапки, чтобы они не промокли?",
      soundEffectText: "«Топ-топ! Шлёп-шлёп!»",
      isShoeChoice: true,
      choices: [
        {
          id: "boots",
          icon: `${BADGES_BASE}/badge-boots.png`,
          title: "Жёлтые сапожки",
          soundType: "chime",
          badgeIcon: `${BADGES_BASE}/badge-boots.png`,
          afterImage: `${STORIES_BASE}/scene3-dress-after-boots.png`,
          reactionSpeech: "Жёлтые сапожки на лапки — скок! Теперь никакие лужи не страшны! Потопай ножками: Топ-топ-топ, шлёп-шлёп-шлёп!",
          reactionSoundText: "«Шлёп-шлёп! Топ-топ!»"
        },
        {
          id: "sneakers",
          icon: `${BADGES_BASE}/badge-sneakers.png`,
          title: "Быстрые кроссовки",
          soundType: "chime",
          badgeIcon: `${BADGES_BASE}/badge-sneakers.png`,
          afterImage: `${STORIES_BASE}/scene3-dress-after-sneakers.png`,
          reactionSpeech: "Кроссовки-быстроходы! Сами на лапки наскочили! В них можно скакать выше деревьев: Прыг-скок, прыг-скок! Оп-ля!",
          reactionSoundText: "«Прыг-скок! Мяу, оп-ля!»"
        }
      ]
    },

    // -------------------------------------------------------------
    // СЦЕНА 4: Походный рюкзачок (динамически — с учётом обуви)
    // -------------------------------------------------------------
    {
      step: 4,
      headerText: "Котёнок: Рюкзачок",
      dynamicBranch: true,
      branchBy: 'shoe',
      isBackpackChoice: true,
      branches: {
        boots: {
          beforeImage: `${STORIES_BASE}/scene4-backpack-boots-before.png`,
          speechText: "Сапожки надеты — теперь рюкзачок! Похлопай по кармашкам: пусто? Что мы положим в наш секретный кармашек?",
          soundEffectText: "«Вж-ж-жик!»",
          choices: [
            {
              id: "umbrella",
              icon: `${BADGES_BASE}/badge-umbrella.png`,
              title: "Яркий зонтик",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-umbrella.png`,
              afterImage: `${STORIES_BASE}/scene4-backpack-boots-after-umbrella.png`,
              reactionSpeech: "Прячем зонтик в рюкзачок! Замочек закрываем пальчиком: Вж-ж-жик! Застегнули! Отличная вещь для прогулки!",
              reactionSoundText: "«Вжик-вжик! Щёлк!»"
            },
            {
              id: "fish",
              icon: `${BADGES_BASE}/badge-fish.png`,
              title: "Вкусная рыбка",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-fish.png`,
              afterImage: `${STORIES_BASE}/scene4-backpack-boots-after-fish.png`,
              reactionSpeech: "Прячем рыбку в рюкзачок! Замочек закрываем: Вж-ж-жик! Если животик проголодается — будет чем подкрепиться!",
              reactionSoundText: "«Вжик! Готово!»"
            }
          ]
        },
        sneakers: {
          beforeImage: `${STORIES_BASE}/scene4-backpack-sneakers-before.png`,
          speechText: "Кроссовки на лапках — теперь рюкзачок! Похлопай по кармашкам: пусто? Что мы положим в наш секретный кармашек?",
          soundEffectText: "«Вж-ж-жик!»",
          choices: [
            {
              id: "umbrella",
              icon: `${BADGES_BASE}/badge-umbrella.png`,
              title: "Яркий зонтик",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-umbrella.png`,
              afterImage: `${STORIES_BASE}/scene4-backpack-sneakers-after-umbrella.png`,
              reactionSpeech: "Прячем зонтик в рюкзачок! Замочек закрываем пальчиком: Вж-ж-жик! Застегнули! Отличная вещь для прогулки!",
              reactionSoundText: "«Вжик-вжик! Щёлк!»"
            },
            {
              id: "fish",
              icon: `${BADGES_BASE}/badge-fish.png`,
              title: "Вкусная рыбка",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-fish.png`,
              afterImage: `${STORIES_BASE}/scene4-backpack-sneakers-after-fish.png`,
              reactionSpeech: "Прячем рыбку в рюкзачок! Замочек закрываем: Вж-ж-жик! Если животик проголодается — будет чем подкрепиться!",
              reactionSoundText: "«Вжик! Готово!»"
            }
          ]
        }
      }
    },

    // -------------------------------------------------------------
    // СЦЕНА 5: Звонкий ручеёк (динамически — с учётом обуви)
    // -------------------------------------------------------------
    {
      step: 5,
      headerText: "Котёнок: Ручеёк",
      dynamicBranch: true,
      branchBy: 'shoe',
      branches: {
        boots: {
          beforeImage: `${STORIES_BASE}/scene5-stream-boots-before.png`,
          speechText: "Бежали лапки в сапожках, и вдруг... Тпру-у-у, стоп! Звонкий ручеёк: Буль-буль, жур-жур! Как нам перебраться?",
          soundEffectText: "«Жур-жур! Буль-буль!»",
          choices: [
            {
              id: "log",
              icon: `${BADGES_BASE}/badge-log.png`,
              title: "По брёвнышку: топ-топ",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-log.png`,
              afterImage: `${STORIES_BASE}/scene5-stream-boots-after-log.png`,
              reactionSpeech: "Лапки и хвостик в стороны! Тихонечко шагаем: Топ... топ... Ура, перешли на другой бережок! Сапожки сухие!",
              reactionSoundText: "«Топ... топ... Ура, перешли!»"
            },
            {
              id: "stones",
              icon: `${BADGES_BASE}/badge-stones.png`,
              title: "По камушкам: оп-ля!",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-stones.png`,
              afterImage: `${STORIES_BASE}/scene5-stream-boots-after-stones.png`,
              reactionSpeech: "Присели на лапки в сапожках, пружиним... и Оп-ля! Прыг! Ловкий прыжок прямо на бережок!",
              reactionSoundText: "«Оп-ля! Прыг! Мяу!»"
            }
          ]
        },
        sneakers: {
          beforeImage: `${STORIES_BASE}/scene5-stream-sneakers-before.png`,
          speechText: "Бежали лапки в быстрых кроссовках, и вдруг... Тпру-у-у, стоп! Звонкий ручеёк: Буль-буль! Как переберёмся?",
          soundEffectText: "«Жур-жур! Буль-буль!»",
          choices: [
            {
              id: "log",
              icon: `${BADGES_BASE}/badge-log.png`,
              title: "По брёвнышку: топ-топ",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-log.png`,
              afterImage: `${STORIES_BASE}/scene5-stream-sneakers-after-log.png`,
              reactionSpeech: "В лёгких кроссовках балансируем: Топ... топ... Ура, перешли на другой бережок! Лапки сухие!",
              reactionSoundText: "«Топ... топ... Ура, перешли!»"
            },
            {
              id: "stones",
              icon: `${BADGES_BASE}/badge-stones.png`,
              title: "По камушкам: оп-ля!",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-stones.png`,
              afterImage: `${STORIES_BASE}/scene5-stream-sneakers-after-stones.png`,
              reactionSpeech: "Кроссовки с крылышками пружинят... Оп-ля! Прыг! Ловкий прыжок прямо на бережок!",
              reactionSoundText: "«Оп-ля! Прыг! Мяу!»"
            }
          ]
        }
      }
    },

    // -------------------------------------------------------------
    // СЦЕНА 6: Кульминация (Дождик или Рыбка × Обувь)
    // -------------------------------------------------------------
    {
      step: 6,
      headerText: "Котёнок: В лесу",
      dynamicBranch: true,
      branchBy: 'backpack_and_shoe',
      branches: {
        umbrella_boots: {
          beforeImage: `${STORIES_BASE}/scene6-umbrella-boots-before.png`,
          speechText: "Ой-ой-ой! Из тучки закапал дождик: Кап! Кап-кап! Сапожки на ножках есть, а спинку укроем зонтиком!",
          soundEffectText: "«Кап-кап-кап!»",
          choices: [
            {
              id: "rescue_umbrella",
              icon: `${BADGES_BASE}/badge-umbrella.png`,
              title: "Раскрыть зонтик: Хлоп!",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-umbrella.png`,
              afterImage: `${STORIES_BASE}/scene6-umbrella-boots-after.png`,
              reactionSpeech: "ХЛОП! Раскрыли зонтик! В сапожках и под зонтом никакие тучки не страшны!",
              reactionSoundText: "«ХЛОП! Тук-тук-тук!»"
            }
          ]
        },
        umbrella_sneakers: {
          beforeImage: `${STORIES_BASE}/scene6-umbrella-sneakers-before.png`,
          speechText: "Ой-ой-ой! Дождик: Кап-кап! Скорее доставай наш зонтик, чтобы спасти пушистую шёрстку!",
          soundEffectText: "«Кап-кап-кап!»",
          choices: [
            {
              id: "rescue_umbrella",
              icon: `${BADGES_BASE}/badge-umbrella.png`,
              title: "Раскрыть зонтик: Хлоп!",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-umbrella.png`,
              afterImage: `${STORIES_BASE}/scene6-umbrella-sneakers-after.png`,
              reactionSpeech: "ХЛОП! Раскрыли зонтик! Ку-ку, дождик, мы в домике! Сухо, тепло и уютно!",
              reactionSoundText: "«ХЛОП! Тук-тук-тук!»"
            }
          ]
        },
        fish_boots: {
          beforeImage: `${STORIES_BASE}/scene6-fish-boots-before.png`,
          speechText: "Тишина! Слышишь? Ур-р-р! Животик у Котёнка урчит от голода! Доставай вкусную рыбку из рюкзачка!",
          soundEffectText: "«Ур-р-р!»",
          choices: [
            {
              id: "rescue_fish",
              icon: `${BADGES_BASE}/badge-fish.png`,
              title: "Угостить рыбкой: Хрум!",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-fish.png`,
              afterImage: `${STORIES_BASE}/scene6-fish-boots-after.png`,
              reactionSpeech: "Хрум-хрум-хрум! Вкусная рыбка подкрепила силы! Котёнок в сапожках весело топает лапками!",
              reactionSoundText: "«Хрум-хрум! Мур-р-р!»"
            }
          ]
        },
        fish_sneakers: {
          beforeImage: `${STORIES_BASE}/scene6-fish-sneakers-before.png`,
          speechText: "Ур-р-р! Кроссовки быстро бежали, животик у Котёнка проголодался! Доставай рыбку!",
          soundEffectText: "«Ур-р-р!»",
          choices: [
            {
              id: "rescue_fish",
              icon: `${BADGES_BASE}/badge-fish.png`,
              title: "Угостить рыбкой: Хрум!",
              soundType: "chime",
              badgeIcon: `${BADGES_BASE}/badge-fish.png`,
              afterImage: `${STORIES_BASE}/scene6-fish-sneakers-after.png`,
              reactionSpeech: "Хрум-хрум-хрум! Подкрепились рыбкой! В быстрых кроссовках снова готовы к подвигам: Мур-р-мяу!",
              reactionSoundText: "«Хрум-хрум! Мур-р-р!»"
            }
          ]
        }
      }
    },

    // -------------------------------------------------------------
    // СЦЕНА 7: Тёплый дом и уют
    // -------------------------------------------------------------
    {
      step: 7,
      headerText: "Котёнок: Дома",
      beforeImage: `${STORIES_BASE}/scene7-home-before.png`,
      speechText: "Устали мягкие лапки, вернулись в тёплый домик к маме. Чем же мы согреем нашего усталого путешественника?",
      soundEffectText: "«Мур-р-р... Уютно!»",
      interactiveType: "finish",
      choices: [
        {
          id: "tea",
          icon: `${BADGES_BASE}/badge-tea.png`,
          title: "Сладкий чай",
          soundType: "chime",
          badgeIcon: `${BADGES_BASE}/badge-tea.png`,
          afterImage: `${STORIES_BASE}/scene7-home-after-tea.png`,
          reactionSpeech: "Горячая кружечка! Дуем вместе: Губки в трубочку — Фу-у-у-у! Сделаем глоточек: Хлюп... Ах, как тепло потекло по животику!",
          reactionSoundText: "«Фу-у-у... Хлюп!»"
        },
        {
          id: "milk_warm",
          icon: `${BADGES_BASE}/badge-warm-milk.png`,
          title: "Тёплое молочко",
          soundType: "chime",
          badgeIcon: `${BADGES_BASE}/badge-warm-milk.png`,
          afterImage: `${STORIES_BASE}/scene7-home-after-milk.png`,
          reactionSpeech: "Тёплое молочко с пенкой! Дуем на него: Фу-у-у! Ах, как сладко и спокойно! Глазки закрываются... Мур-мур-мяу!",
          reactionSoundText: "«Фу-у-у... Мур-р-р»"
        }
      ]
    }
  ]
};
