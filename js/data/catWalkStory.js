// js/data/catWalkStory.js
// Сценарий «Большая прогулка Котёнка» с механикой «ДО» ➔ «ПОСЛЕ» (Причина и Следствие)

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
      // Картинка ДО (шторки закрыты, котик сонный)
      beforeSvg: `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#FFF8E7"/>
          <circle cx="300" cy="170" r="110" fill="#BAE6FD" stroke="#F59E0B" stroke-width="8"/>
          <!-- Закрытые шторки -->
          <path d="M190 60 Q300 170 190 280 L190 280 Z" fill="#FCA5A5"/>
          <path d="M410 60 Q300 170 410 280 L410 280 Z" fill="#FCA5A5"/>
          <ellipse cx="300" cy="330" rx="140" ry="45" fill="#FB923C"/>
          <circle cx="300" cy="290" r="55" fill="#FDBA74"/>
          <polygon points="260,250 280,210 295,245" fill="#EA580C"/>
          <polygon points="340,250 320,210 305,245" fill="#EA580C"/>
          <path d="M280 285 Q290 295 300 285" stroke="#7C2D12" stroke-width="3" fill="none"/>
          <path d="M300 285 Q310 295 320 285" stroke="#7C2D12" stroke-width="3" fill="none"/>
          <polygon points="297,298 303,298 300,303" fill="#F472B6"/>
        </svg>
      `,
      speechText: "Глазки открываются... С добрым утром, малыш! Посмотри, Котёнок проснулся и сладко зевает: А-а-а-х! Постучи пальчиком по окошку: Тук-тук-тук!",
      soundEffectText: "«А-а-ах! Тук-тук-тук!»",
      choices: [
        {
          id: "window",
          icon: "🪟",
          title: "Постучи в окошко: Тук-тук!",
          soundType: "knock",
          badgeIcon: "🪟",
          // Картинка ПОСЛЕ (шторки распахнулись, солнышко, котик улыбается)
          afterSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#FFFBEB"/>
              <circle cx="300" cy="170" r="110" fill="#BAE6FD" stroke="#F59E0B" stroke-width="8"/>
              <!-- Распахнутый вид из окна -->
              <ellipse cx="300" cy="240" rx="100" ry="40" fill="#86EFAC"/>
              <circle cx="320" cy="130" r="28" fill="#FDE047"/>
              <!-- Шторки собраны по бокам -->
              <rect x="180" y="60" width="20" height="220" fill="#FCA5A5" rx="5"/>
              <rect x="400" y="60" width="20" height="220" fill="#FCA5A5" rx="5"/>
              <ellipse cx="300" cy="330" rx="140" ry="45" fill="#FB923C"/>
              <circle cx="300" cy="290" r="55" fill="#FDBA74"/>
              <circle cx="280" cy="285" r="7" fill="#1E293B"/>
              <circle cx="320" cy="285" r="7" fill="#1E293B"/>
              <circle cx="265" cy="295" r="7" fill="#FCA5A5"/>
              <circle cx="335" cy="295" r="7" fill="#FCA5A5"/>
              <path d="M295 305 Q300 312 305 305" stroke="#7C2D12" stroke-width="3" fill="none"/>
            </svg>
          `,
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
      // Картинка ДО (пустая тарелочка на столе)
      beforeSvg: `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#FEF9C3"/>
          <ellipse cx="300" cy="330" rx="240" ry="70" fill="#FDE047"/>
          <circle cx="300" cy="200" r="60" fill="#FDBA74"/>
          <polygon points="255,160 275,115 295,155" fill="#EA580C"/>
          <polygon points="345,160 325,115 305,155" fill="#EA580C"/>
          <circle cx="280" cy="195" r="7" fill="#1E293B"/>
          <circle cx="320" cy="195" r="7" fill="#1E293B"/>
          <!-- Пустая тарелочка -->
          <ellipse cx="300" cy="295" rx="70" ry="25" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="4"/>
        </svg>
      `,
      speechText: "Ой, а чем это так вкусно пахнет на кухне? Давай потянем носиком: Нюх-нюх-нюх! Чем мы сегодня угостим Котёнка?",
      soundEffectText: "«Нюх-нюх! Мур-р-р!»",
      choices: [
        {
          id: "milk",
          icon: "🥛",
          title: "Тёплое молочко",
          soundType: "chime",
          badgeIcon: "🥛",
          // ПОСЛЕ молочка
          afterSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#FEF9C3"/>
              <ellipse cx="300" cy="330" rx="240" ry="70" fill="#FDE047"/>
              <circle cx="300" cy="200" r="60" fill="#FDBA74"/>
              <!-- Мисочка полная белого молочка -->
              <ellipse cx="300" cy="295" rx="70" ry="25" fill="#38BDF8" stroke="#0284C7" stroke-width="3"/>
              <ellipse cx="300" cy="292" rx="58" ry="18" fill="#FFFFFF"/>
              <!-- Белые молочные усики у котика -->
              <ellipse cx="300" cy="215" rx="20" ry="8" fill="#FFFFFF" opacity="0.9"/>
              <circle cx="280" cy="195" r="7" fill="#1E293B"/>
              <circle cx="320" cy="195" r="7" fill="#1E293B"/>
              <path d="M295 218 Q300 226 305 218" stroke="#EA580C" stroke-width="3" fill="none"/>
            </svg>
          `,
          reactionSpeech: "Тёплое молочко! Лакаем язычком: Хлюп-хлюп-хлюп! Оближем губки: М-м-м! Белые усики в молочке, сыт Котёнок!",
          reactionSoundText: "«Хлюп-хлюп! М-м-м!»"
        },
        {
          id: "porridge",
          icon: "🥣",
          title: "Творожная кашка",
          soundType: "chime",
          badgeIcon: "🥣",
          // ПОСЛЕ кашки
          afterSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#FEF9C3"/>
              <ellipse cx="300" cy="330" rx="240" ry="70" fill="#FDE047"/>
              <circle cx="300" cy="200" r="60" fill="#FDBA74"/>
              <!-- Мисочка с кашкой и ягодками -->
              <ellipse cx="300" cy="295" rx="70" ry="25" fill="#FB923C"/>
              <ellipse cx="300" cy="292" rx="58" ry="18" fill="#FDE68A"/>
              <circle cx="285" cy="290" r="5" fill="#EF4444"/>
              <circle cx="315" cy="290" r="5" fill="#EF4444"/>
              <!-- Котик гладит сытый животик -->
              <circle cx="280" cy="195" r="7" fill="#1E293B"/>
              <circle cx="320" cy="195" r="7" fill="#1E293B"/>
              <path d="M292 215 Q300 224 308 215" stroke="#7C2D12" stroke-width="3" fill="none"/>
            </svg>
          `,
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
      // Картинка ДО (босые белые лапки)
      beforeSvg: `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#F1F5F9"/>
          <rect x="180" y="40" width="240" height="300" rx="10" fill="#E2E8F0" stroke="#94A3B8" stroke-width="4"/>
          <ellipse cx="300" cy="350" rx="170" ry="40" fill="#CBD5E1"/>
          <circle cx="300" cy="240" r="55" fill="#FDBA74"/>
          <!-- Белые босые лапки -->
          <ellipse cx="275" cy="315" rx="18" ry="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
          <ellipse cx="325" cy="315" rx="18" ry="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
        </svg>
      `,
      speechText: "Ножки-ножки, бежали по дорожке! Но на улице мокрые лужицы. Во что же обуть пушистые лапки, чтобы они не промокли?",
      soundEffectText: "«Топ-топ! Шлёп-шлёп!»",
      choices: [
        {
          id: "boots",
          icon: "🥾",
          title: "Жёлтые сапожки",
          soundType: "chime",
          badgeIcon: "🥾",
          // ПОСЛЕ: сапожки надеты, лужица
          afterSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#F1F5F9"/>
              <ellipse cx="300" cy="350" rx="170" ry="40" fill="#BAE6FD"/>
              <circle cx="300" cy="235" r="55" fill="#FDBA74"/>
              <!-- Ярко-жёлтые резиновые сапожки на лапках -->
              <rect x="260" y="295" width="26" height="35" rx="8" fill="#FACC15" stroke="#CA8A04" stroke-width="3"/>
              <rect x="314" y="295" width="26" height="35" rx="8" fill="#FACC15" stroke="#CA8A04" stroke-width="3"/>
              <!-- Брызги веселые -->
              <circle cx="245" cy="335" r="4" fill="#38BDF8"/>
              <circle cx="355" cy="335" r="4" fill="#38BDF8"/>
            </svg>
          `,
          reactionSpeech: "Жёлтые сапожки на лапки — скок! Теперь никакие лужи не страшны! Потопай ножками: Топ-топ-топ, шлёп-шлёп-шлёп!",
          reactionSoundText: "«Шлёп-шлёп! Топ-топ!»"
        },
        {
          id: "sneakers",
          icon: "👟",
          title: "Быстрые кроссовки",
          soundType: "chime",
          badgeIcon: "👟",
          // ПОСЛЕ: кроссовки надеты, прыжок
          afterSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#F1F5F9"/>
              <ellipse cx="300" cy="360" rx="140" ry="30" fill="#CBD5E1"/>
              <!-- Котик в прыжке -->
              <circle cx="300" cy="210" r="55" fill="#FDBA74"/>
              <!-- Красивые синие кроссовки с крылышками -->
              <rect x="260" y="265" width="28" height="22" rx="7" fill="#38BDF8" stroke="#0284C7" stroke-width="3"/>
              <rect x="312" y="265" width="28" height="22" rx="7" fill="#38BDF8" stroke="#0284C7" stroke-width="3"/>
              <path d="M250 270 Q240 260 255 255" stroke="#FDE047" stroke-width="4" fill="none"/>
              <path d="M350 270 Q360 260 345 255" stroke="#FDE047" stroke-width="4" fill="none"/>
            </svg>
          `,
          reactionSpeech: "Кроссовки-быстроходы! Сами на лапки наскочили! В них можно скакать выше деревьев: Прыг-скок, прыг-скок! Оп-ля!",
          reactionSoundText: "«Прыг-скок! Мяу, оп-ля!»"
        }
      ]
    },

    // -------------------------------------------------------------
    // СЦЕНА 4: Походный рюкзачок
    // -------------------------------------------------------------
    {
      step: 4,
      headerText: "Котёнок: Рюкзачок",
      // Картинка ДО: рюкзачок открыт и пуст
      beforeSvg: `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#E0F2FE"/>
          <circle cx="300" cy="190" r="60" fill="#FDBA74"/>
          <!-- Открытый рюкзак -->
          <rect x="245" y="240" width="110" height="115" rx="25" fill="#38BDF8" stroke="#0284C7" stroke-width="4"/>
          <ellipse cx="300" cy="255" rx="35" ry="12" fill="#0F172A" opacity="0.3"/>
        </svg>
      `,
      speechText: "Лапки обули, а на спинку — рюкзачок! Похлопай ладошками по бочкам: проверим кармашки! Пусто? Что мы положим в наш секретный кармашек?",
      soundEffectText: "«Вж-ж-жик!»",
      isBackpackChoice: true,
      choices: [
        {
          id: "umbrella",
          icon: "☂️",
          title: "Яркий зонтик",
          soundType: "chime",
          badgeIcon: "☂️",
          // ПОСЛЕ: зонтик выглядывает из застёгнутого рюкзачка
          afterSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#E0F2FE"/>
              <circle cx="300" cy="190" r="60" fill="#FDBA74"/>
              <!-- Ручка зонтика торчит из рюкзака -->
              <path d="M320 210 L320 245 Q320 200 335 200 Q345 200 345 215" stroke="#EA580C" stroke-width="6" fill="none"/>
              <rect x="245" y="240" width="110" height="115" rx="25" fill="#38BDF8" stroke="#0284C7" stroke-width="4"/>
              <line x1="300" y1="250" x2="300" y2="330" stroke="#FDE047" stroke-width="4" stroke-dasharray="6,4"/>
            </svg>
          `,
          reactionSpeech: "Прячем зонтик в рюкзачок! Замочек закрываем пальчиком: Вж-ж-жик! Застегнули! Отличная вещь для прогулки!",
          reactionSoundText: "«Вжик-вжик! Щёлк!»"
        },
        {
          id: "fish",
          icon: "🐟",
          title: "Вкусная рыбка",
          soundType: "chime",
          badgeIcon: "🐟",
          // ПОСЛЕ: рыбка в рюкзачке
          afterSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#E0F2FE"/>
              <circle cx="300" cy="190" r="60" fill="#FDBA74"/>
              <!-- Хвостик рыбки торчит из рюкзачка -->
              <polygon points="320,225 340,210 340,240" fill="#38BDF8"/>
              <rect x="245" y="240" width="110" height="115" rx="25" fill="#38BDF8" stroke="#0284C7" stroke-width="4"/>
              <line x1="300" y1="250" x2="300" y2="330" stroke="#FDE047" stroke-width="4" stroke-dasharray="6,4"/>
            </svg>
          `,
          reactionSpeech: "Прячем рыбку в рюкзачок! Замочек закрываем: Вж-ж-жик! Если животик проголодается — будет чем подкрепиться!",
          reactionSoundText: "«Вжик! Готово!»"
        }
      ]
    },

    // -------------------------------------------------------------
    // СЦЕНА 5: Звонкий ручеёк
    // -------------------------------------------------------------
    {
      step: 5,
      headerText: "Котёнок: Ручеёк",
      // Картинка ДО: котёнок на ближнем берегу перед водой
      beforeSvg: `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#DCFCE7"/>
          <path d="M0 160 Q150 210 300 170 T600 220 L600 300 Q450 250 300 290 T0 240 Z" fill="#38BDF8"/>
          <rect x="180" y="195" width="240" height="35" rx="12" fill="#B45309"/>
          <ellipse cx="140" cy="230" rx="30" ry="18" fill="#64748B"/>
          <ellipse cx="460" cy="245" rx="32" ry="20" fill="#64748B"/>
          <!-- Котик испуганно топчется на левом берегу -->
          <circle cx="90" cy="210" r="45" fill="#FDBA74"/>
        </svg>
      `,
      speechText: "Бежали лапки, и вдруг... Тпру-у-у, стоп! Слышишь? Буль-буль, жур-жур... Это же звонкий ручеёк! А котята не любят мочить хвостики. Как нам перебраться?",
      soundEffectText: "«Жур-жур! Буль-буль!»",
      choices: [
        {
          id: "log",
          icon: "🪵",
          title: "По брёвнышку: топ-топ",
          soundType: "chime",
          badgeIcon: "🪵",
          // ПОСЛЕ: котёнок балансирует на бревнышке и переходит на тот берег
          afterSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#DCFCE7"/>
              <path d="M0 160 Q150 210 300 170 T600 220 L600 300 Q450 250 300 290 T0 240 Z" fill="#38BDF8"/>
              <rect x="180" y="195" width="240" height="35" rx="12" fill="#B45309"/>
              <!-- Котик уже перешел на правый берег и машет хвостиком! -->
              <circle cx="510" cy="180" r="45" fill="#FDBA74"/>
              <path d="M540 180 Q570 160 560 140" stroke="#EA580C" stroke-width="8" stroke-linecap="round" fill="none"/>
            </svg>
          `,
          reactionSpeech: "Лапки и хвостик в стороны! Тихонечко шагаем: Топ... топ... Удержались! Ура, перешли на другой бережок! Лапки сухие!",
          reactionSoundText: "«Топ... топ... Ура, перешли!»"
        },
        {
          id: "stones",
          icon: "🪨",
          title: "По камушкам: оп-ля!",
          soundType: "chime",
          badgeIcon: "🪨",
          // ПОСЛЕ: котёнок приземлился на бережок после прыжка
          afterSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#DCFCE7"/>
              <path d="M0 160 Q150 210 300 170 T600 220 L600 300 Q450 250 300 290 T0 240 Z" fill="#38BDF8"/>
              <!-- Камушки с кругами на воде -->
              <ellipse cx="280" cy="235" rx="35" ry="20" fill="#64748B"/>
              <!-- Котёнок радостно приземлился на том берегу -->
              <circle cx="500" cy="190" r="45" fill="#FDBA74"/>
              <circle cx="485" cy="185" r="5" fill="#1E293B"/>
              <circle cx="515" cy="185" r="5" fill="#1E293B"/>
            </svg>
          `,
          reactionSpeech: "Присели на лапки, пружиним... и Оп-ля! Прыг! Ловкий прыжок прямо на бережок! Ни капельки не намокли, какой смелый котик!",
          reactionSoundText: "«Оп-ля! Прыг! Мяу!»"
        }
      ]
    },

    // -------------------------------------------------------------
    // СЦЕНА 6: Кульминация (Дождик или Рыбка)
    // -------------------------------------------------------------
    {
      step: 6,
      headerText: "Котёнок: В лесу",
      dynamicBranch: true,
      branches: {
        umbrella: {
          // ДО: дождик капает, котёнок без зонта сжимается
          beforeSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#E2E8F0"/>
              <!-- Туча -->
              <ellipse cx="300" cy="80" rx="90" ry="40" fill="#475569"/>
              <ellipse cx="240" cy="90" rx="60" ry="35" fill="#64748B"/>
              <ellipse cx="360" cy="90" rx="60" ry="35" fill="#64748B"/>
              <!-- Капли летят вниз -->
              <line x1="220" y1="140" x2="210" y2="180" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
              <line x1="300" y1="140" x2="290" y2="180" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
              <line x1="380" y1="140" x2="370" y2="180" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
              <!-- Котёнок прижал ушки, зонтик ещё сложен в рюкзачке -->
              <circle cx="300" cy="300" r="45" fill="#FDBA74"/>
              <polygon points="270,275 260,250 285,270" fill="#EA580C"/>
              <polygon points="330,275 340,250 315,270" fill="#EA580C"/>
            </svg>
          `,
          speechText: "Ой-ой-ой! Из тучки закапал дождик: Кап! Кап-кап! Скорее доставай наш зонтик и нажимай на кнопку!",
          soundEffectText: "«Кап-кап-кап!»",
          choices: [
            {
              id: "rescue_umbrella",
              icon: "☂️",
              title: "Раскрыть зонтик: Хлоп!",
              soundType: "chime",
              badgeIcon: "☂️",
              // ПОСЛЕ: большой раскрытый зонт, капли барабанят сверху, котик сухо улыбается
              afterSvg: `
                <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#E2E8F0"/>
                  <ellipse cx="300" cy="70" rx="90" ry="35" fill="#475569"/>
                  <!-- Большой яркий зонт раскрыт -->
                  <path d="M170 230 Q300 110 430 230 Z" fill="#EF4444" stroke="#DC2626" stroke-width="4"/>
                  <line x1="300" y1="170" x2="300" y2="340" stroke="#78350F" stroke-width="8" stroke-linecap="round"/>
                  <!-- Капли стучат по зонту -->
                  <line x1="200" y1="110" x2="195" y2="135" stroke="#38BDF8" stroke-width="4"/>
                  <line x1="400" y1="110" x2="395" y2="135" stroke="#38BDF8" stroke-width="4"/>
                  <!-- Котёнок сухой и довольный -->
                  <circle cx="300" cy="290" r="45" fill="#FDBA74"/>
                  <circle cx="285" cy="285" r="5" fill="#1E293B"/>
                  <circle cx="315" cy="285" r="5" fill="#1E293B"/>
                  <path d="M295 295 Q300 302 305 295" stroke="#7C2D12" stroke-width="2" fill="none"/>
                </svg>
              `,
              reactionSpeech: "ХЛОП! Раскрыли зонтик! Ку-ку, дождик, мы в домике! Капли барабанят: тук-тук-тук, а под зонтиком сухо, тепло и уютно!",
              reactionSoundText: "«ХЛОП! Тук-тук-тук!»"
            }
          ]
        },
        fish: {
          // ДО: котёнок сидит голодный, животик урчит
          beforeSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#FEF9C3"/>
              <rect y="250" width="600" height="150" fill="#86EFAC"/>
              <rect x="200" y="270" width="200" height="25" rx="5" fill="#D97706"/>
              <rect x="220" y="295" width="15" height="50" fill="#92400E"/>
              <rect x="365" y="295" width="15" height="50" fill="#92400E"/>
              <circle cx="300" cy="220" r="50" fill="#FDBA74"/>
            </svg>
          `,
          speechText: "Тишина! Слышишь? Ур-р-р! Это животик у Котёнка урчит от голода! Погладь свой животик кружочком! Доставай вкусную рыбку!",
          soundEffectText: "«Ур-р-р!»",
          choices: [
            {
              id: "rescue_fish",
              icon: "🐟",
              title: "Угостить рыбкой: Хрум!",
              soundType: "chime",
              badgeIcon: "🐟",
              // ПОСЛЕ: котёнок кушает рыбку, улыбается
              afterSvg: `
                <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#FEF9C3"/>
                  <rect y="250" width="600" height="150" fill="#86EFAC"/>
                  <rect x="200" y="270" width="200" height="25" rx="5" fill="#D97706"/>
                  <rect x="220" y="295" width="15" height="50" fill="#92400E"/>
                  <rect x="365" y="295" width="15" height="50" fill="#92400E"/>
                  <circle cx="300" cy="220" r="50" fill="#FDBA74"/>
                  <!-- Рыбка в обеих лапках -->
                  <ellipse cx="300" cy="245" rx="28" ry="12" fill="#38BDF8"/>
                  <circle cx="285" cy="215" r="5" fill="#1E293B"/>
                  <circle cx="315" cy="215" r="5" fill="#1E293B"/>
                </svg>
              `,
              reactionSpeech: "Хрум-хрум-хрум! Какая сочная, вкусная рыбка! Животик сыт, Котёнок мурлычет до самых ушек: Мур-р-мяу!",
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
      // Картинка ДО: горячая дымящаяся чашка
      beforeSvg: `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#9A3412"/>
          <rect x="200" y="160" width="200" height="180" rx="10" fill="#1E293B"/>
          <path d="M260 300 Q300 200 340 300 Z" fill="#FDBA74"/>
          <path d="M280 300 Q300 240 320 300 Z" fill="#EF4444"/>
          <ellipse cx="140" cy="320" rx="90" ry="40" fill="#F472B6"/>
          <circle cx="140" cy="290" r="45" fill="#FDBA74"/>
          <!-- Горячая дымящаяся кружка -->
          <rect x="440" y="270" width="50" height="60" rx="10" fill="#F1F5F9"/>
          <path d="M465 250 Q460 220 465 200" stroke="#FFF" stroke-width="4" stroke-linecap="round" fill="none"/>
        </svg>
      `,
      speechText: "Устали мягкие лапки, вернулись в тёплый домик к маме. Чем же мы согреем нашего усталого путешественника?",
      soundEffectText: "«Мур-р-р... Уютно!»",
      interactiveType: "finish",
      choices: [
        {
          id: "tea",
          icon: "🫖",
          title: "Сладкий чай",
          soundType: "chime",
          badgeIcon: "🫖",
          // ПОСЛЕ: дуем на кружечку
          afterSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#9A3412"/>
              <rect x="200" y="160" width="200" height="180" rx="10" fill="#1E293B"/>
              <path d="M260 300 Q300 200 340 300 Z" fill="#FDBA74"/>
              <!-- Котик лакает чайчик -->
              <ellipse cx="150" cy="320" rx="90" ry="40" fill="#F472B6"/>
              <circle cx="150" cy="285" r="45" fill="#FDBA74"/>
              <rect x="440" y="270" width="50" height="60" rx="10" fill="#F59E0B"/>
            </svg>
          `,
          reactionSpeech: "Горячая кружечка! Дуем вместе: Губки в трубочку — Фу-у-у-у! Сделаем глоточек: Хлюп... Ах, как тепло потекло по животику!",
          reactionSoundText: "«Фу-у-у... Хлюп!»"
        },
        {
          id: "milk_warm",
          icon: "🥛",
          title: "Тёплое молочко",
          soundType: "chime",
          badgeIcon: "🥛",
          // ПОСЛЕ: сладкий сон
          afterSvg: `
            <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="400" fill="#9A3412"/>
              <rect x="200" y="160" width="200" height="180" rx="10" fill="#1E293B"/>
              <path d="M260 300 Q300 200 340 300 Z" fill="#FDBA74"/>
              <ellipse cx="140" cy="320" rx="90" ry="40" fill="#F472B6"/>
              <circle cx="140" cy="290" r="45" fill="#FDBA74"/>
            </svg>
          `,
          reactionSpeech: "Тёплое молочко с пенкой! Дуем на него: Фу-у-у! Ах, как сладко и спокойно! Глазки закрываются... Мур-мур-мяу!",
          reactionSoundText: "«Фу-у-у... Мур-р-р»"
        }
      ]
    }
  ]
};
