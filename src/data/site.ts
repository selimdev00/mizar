export const contacts = {
  phone: '8 916 747 62 24',
  phoneHref: 'tel:+79167476224',
  email: 'in@friendlee.pro',
  emailHref: 'mailto:in@friendlee.pro',
  telegram: 'https://t.me/ivaniush',
  whatsapp: 'https://wa.me/79167476224',
};

export type Service = {
  title: string;
  items: string[];
};

export const services: Service[] = [
  {
    title: 'Проектирование и дизайн',
    items: [
      'Анализ конкурентов',
      'Продуктовая аналитика',
      'Интерактивные прототипы',
      'Техническая архитектура и документация',
      'Дизайн-системы, разработка UI-китов',
      'Технический дизайн',
    ],
  },
  {
    title: 'Разработка под ключ',
    items: [
      'Порталы',
      'Сервисы и стартапы',
      'CRM-системы',
      'Корпоративные сайты',
      'Интернет-магазины',
      'Промопроекты',
      'Чатботы',
      'Мобильные приложения',
    ],
  },
  {
    title: 'Техподдержка и развитие',
    items: [
      'Доработка функциональности',
      'Автоматизация бизнес-процессов',
      'Разработка посадочных страниц',
      'Интеграции с внешними системами',
      'Работа с продуктовыми метриками',
      'Контроль качества, тестирование',
    ],
  },
];

export type TechCard = {
  title: string;
  body: string;
};

export const techStack: TechCard[] = [
  {
    title: 'Front-end',
    body: 'React / Vue / Angular / jQuery / HTML',
  },
  {
    title: 'Back-end',
    body: 'PHP (Laravel / Yii2 / Magento / Bitrix), JS (Node.JS / NextJS / NuxtJS), Python',
  },
  {
    title: 'Поддержка',
    body: 'Аналитика / Разработка баннеров / Email-рассылки / Управление контентом / Модерация / Серверное администрирование',
  },
];

export type Project = {
  name: string;
  summary: string;
  tags: string[];
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: 'Кинопрофи',
    summary: 'Сервис поиска специалистов в кино',
    tags: ['Аналитика', 'Дизайн', 'Разработка'],
    url: 'https://kinoprofi.pro',
    image: '/projects/kinoprofi.jpg',
  },
  {
    name: 'Магнит всевозможный',
    summary: 'Сайт благотворительного фонда',
    tags: ['Дизайн', 'Разработка'],
    url: 'https://blago.magnit.ru',
    image: '/projects/magnit.jpg',
  },
  {
    name: 'restore:digital art',
    summary: 'Платформа конкурсов цифрового искусства',
    tags: ['Платформа', 'Разработка'],
    url: 'https://digital-art.re-store.ru',
    image: '/projects/restore.jpg',
  },
  {
    name: 'МТС True Tech Day 2025',
    summary: 'Сайт техконференции',
    tags: ['Промо', 'Разработка'],
    url: 'https://truetechday.ru',
    image: '/projects/mts.jpg',
  },
  {
    name: 'Бренды Русагро',
    summary: 'Корпоративные сайты',
    tags: ['Корп. сайты', 'Разработка'],
    url: 'https://russiansugar.com',
    image: '/projects/rusagro.jpg',
  },
  {
    name: 'youtalk',
    summary: 'Онлайн-сервис психологической поддержки',
    tags: ['Сервис', 'Разработка'],
    url: 'https://youtalk.ru',
    image: '/projects/youtalk.jpg',
  },
  {
    name: 'RODNYA Creative PR Studio',
    summary: 'Сайт креативного агентства',
    tags: ['Дизайн', 'Разработка'],
    url: 'https://rodnya.moscow',
    image: '/projects/rodnya.jpg',
  },
  {
    name: 'Спортвсегда',
    summary: 'Бронирование спортивных услуг',
    tags: ['Сервис', 'Разработка'],
    url: 'https://sport.rinigroup.ru',
    image: '/projects/sportvsegda.jpg',
  },
  {
    name: 'Портал Teambuilding.ru',
    summary: 'Портал по организации мероприятий',
    tags: ['Портал', 'Разработка'],
    url: 'https://teambuilding.ru',
    image: '/projects/teambuilding.jpg',
  },
  {
    name: 'ПЭТ НЕТ',
    summary: 'Ядерная медицина',
    tags: ['Корп. сайт', 'Разработка'],
    url: 'https://pet-net.ru',
    image: '/projects/petnet.jpg',
  },
];

export const loopSteps = [
  '01 Ставим себя на место пользователей',
  '02 Делаем user friend Lee',
  '03 Анализируем, что получилось',
];
