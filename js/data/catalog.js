// js/data/catalog.js
// Каталог сетов и историй

export const SETS_DATA = [
  {
    id: "set-1",
    title: "Мой день и ритуалы",
    subtitle: "Бытовые привычки и распорядок",
    icon: "🏠",
    themeColor: "#FFE5B4", // Персиковый пастельный
    accentColor: "#FFB07C",
    stories: [
      {
        id: "cat-walk",
        title: "Большая прогулка Котёнка",
        subtitle: "Утро, завтрак, лужицы и добрый вечер",
        icon: "🐱",
        stepsCount: 7,
        badge: "Хит для малышей"
      },
      {
        id: "cat-teeth",
        title: "Как Котёнок чистил зубки",
        subtitle: "Игра с пузырьками и зубной щёткой",
        icon: "🪥",
        stepsCount: 5,
        badge: "Скоро"
      },
      {
        id: "cat-sleep",
        title: "Пора баиньки",
        subtitle: "Мягкая колыбельная и подготовка ко сну",
        icon: "🌙",
        stepsCount: 5,
        badge: "Скоро"
      },
      {
        id: "cat-porridge",
        title: "Котёнок кушает кашку",
        subtitle: "Весёлый аппетит без капризов",
        icon: "🥣",
        stepsCount: 5,
        badge: "Скоро"
      }
    ]
  },
  {
    id: "set-2",
    title: "Мир эмоций",
    subtitle: "Эмоциональный интеллект и спокойствие",
    icon: "💛",
    themeColor: "#FFF4C2", // Светло-желтый
    accentColor: "#F5C744",
    stories: [
      { id: "story-sad", title: "Почему Котёнок загрустил", subtitle: "Как обнять и успокоить", icon: "🌧️", stepsCount: 5, badge: "Скоро" },
      { id: "story-angry", title: "Сердитый пушистик", subtitle: "Учимся дышать, когда злимся", icon: "🎈", stepsCount: 5, badge: "Скоро" },
      { id: "story-dark", title: "Темнота в комнатке", subtitle: "Побеждаем страх ночника", icon: "✨", stepsCount: 5, badge: "Скоро" },
      { id: "story-share", title: "Котёнок делится мячиком", subtitle: "Радость дружбы и щедрость", icon: "🧶", stepsCount: 5, badge: "Скоро" }
    ]
  },
  {
    id: "set-3",
    title: "Выход в мир",
    subtitle: "Социальные истории и адаптация",
    icon: "🌳",
    themeColor: "#D8F3DC", // Мятно-зеленый
    accentColor: "#74C69D",
    stories: [
      { id: "story-doctor", title: "В гостях у доброго доктора", subtitle: "Осмотр без страха и слёз", icon: "🩺", stepsCount: 5, badge: "Скоро" },
      { id: "story-playground", title: "На детской площадке", subtitle: "Как знакомиться: «Давай играть!»", icon: "🛝", stepsCount: 5, badge: "Скоро" },
      { id: "story-shop", title: "Поход в магазин", subtitle: "Сенсорный покой среди полок", icon: "🛒", stepsCount: 5, badge: "Скоро" },
      { id: "story-kindergarten", title: "Первый день в садике", subtitle: "Мама всегда возвращается", icon: "🧸", stepsCount: 5, badge: "Скоро" }
    ]
  },
  {
    id: "set-4",
    title: "Исследователи",
    subtitle: "Цвета, формы, размеры и звуки",
    icon: "🔍",
    themeColor: "#E2EAFC", // Нежно-лавандовый
    accentColor: "#A2B2EE",
    stories: [
      { id: "story-colors", title: "Разноцветная полянка", subtitle: "Изучаем главные цвета", icon: "🎨", stepsCount: 5, badge: "Скоро" },
      { id: "story-sounds", title: "Кто спрятался за кустом?", subtitle: "Звуки зверят и птиц", icon: "🐥", stepsCount: 5, badge: "Скоро" },
      { id: "story-sizes", title: "Большой и маленький", subtitle: "Сравниваем лапки и грибочки", icon: "🍄", stepsCount: 5, badge: "Скоро" },
      { id: "story-seasons", title: "Времена года Котёнка", subtitle: "Снежок, ручейки, лучи и листики", icon: "🍁", stepsCount: 5, badge: "Скоро" }
    ]
  }
];
