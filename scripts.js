// ============================================================
//   DASHBOARD DATA (без иконок)
// ============================================================
const dashboardData = {
  mental: {
    title: 'Ментальная касса',
    subtitle: 'Энергия и фокус основателя',
    goal: 'Предотвратить выгорание и снизить число ошибок из-за усталости.',
    metrics: [
      { label: 'Качество сна', formula: 'Часы сна + доля глубокого сна', source: 'Умные часы и браслеты', threshold: 'Менее 6 часов или глубина ниже 15% — красный' },
      { label: 'Глубокий фокус', formula: 'Суммарное время без переключений', source: 'Трекеры времени и ручной ввод', threshold: 'Меньше 3 часов — жёлтый' },
      { label: 'Энергия и тревожность', formula: 'Оценка от 1 до 5 утром', source: 'Кнопка в дашборде', threshold: '1–2 — красный' }
    ],
    visualization: 'Крупные цветовые индикаторы + график тренда энергии за неделю.',
    update: 'Ежедневно утром.',
    action: 'Отменить стратегические встречи, передать решения партнёру и восстановить сон.',
    aiRecommendation: 'Если физическое состояние ухудшилось, сначала отключите все нерутинные встречи и дайте себе восстановительный день.',
    complexity: 'Средняя',
    time: '2–3 дня',
    status: 'warning'
  },
  hours: {
    title: 'Золотые часы',
    subtitle: 'Выручка по времени суток',
    goal: 'Понять, когда приходят самые крупные и маржинальные клиенты.',
    metrics: [
      { label: 'Выручка по часам', formula: 'Сумма продаж по каждому часу', source: 'Интернет-магазин, касса, система управления клиентскими отношениями', threshold: 'Пики в ночные часы — сигнал к переносу рекламы' },
      { label: 'Средний чек', formula: 'Выручка / число покупок по часу', source: 'Транзакции с меткой времени', threshold: 'Сильный рост среднего чека — зелёный' },
      { label: 'Конверсия', formula: 'Покупатели / посетители по часу', source: 'Веб-аналитика и касса', threshold: 'Резкий рост — зелёный' }
    ],
    visualization: 'Тепловая карта по дням недели и часам, под ней — точечный график пиков.',
    update: 'Каждый час в реальном времени.',
    action: 'Перенести рекламные запуски и чат-боты на наиболее прибыльные часы.',
    aiRecommendation: 'Если пик продаж приходится на ночь, сократите дневной бюджет и перенесите запуск рекламы на самые сильные часы.',
    complexity: 'Низкая',
    time: '1 день',
    status: 'good'
  },
  waste: {
    title: 'Мусорное ведро',
    subtitle: 'Скрытые затраты на плохих клиентов',
    goal: 'Сравнивать не только стоимость привлечения, но и стоимость последствий.',
    metrics: [
      { label: 'Стоимость привлечения', formula: 'Рекламные расходы / число новых клиентов', source: 'Рекламные кабинеты и аналитика', threshold: 'Разница с реальной ценой выше 30% — красный' },
      { label: 'Реальная цена клиента', formula: 'Стоимость привлечения + затраты на возвраты, поддержку и скидки', source: 'Поддержка, логистика, бухгалтерия', threshold: 'Выше пожизненной ценности — красный' },
      { label: 'Возвраты и жалобы', formula: 'Доля возвратов и негативных отзывов', source: 'Служба поддержки и отзывы', threshold: 'Рост выше 8% — жёлтый' }
    ],
    visualization: 'Столбчатая диаграмма по каждому каналу с двумя колонками: стоимость привлечения и реальные затраты.',
    update: 'Раз в день.',
    action: 'Остановить рекламу в убыточном канале и улучшить оффер или качество продукта.',
    aiRecommendation: 'При сильном расхождении между стоимостью привлечения и реальной ценой клиента временно отключите этот канал.',
    complexity: 'Средняя',
    time: '2–4 дня',
    status: 'danger'
  },
  word: {
    title: 'Скорость сарафана',
    subtitle: 'Как быстро клиенты становятся адвокатами',
    goal: 'Измерять скорость, с которой новый клиент делится с друзьями.',
    metrics: [
      { label: 'Время до первого шаринга', formula: 'От покупки до перехода по реферальной ссылке или публикации отзыва', source: 'Реферальные ссылки, социальные сети, трекеры', threshold: 'Рост медианного времени — красный' },
      { label: 'Доля быстрых рекомендаций', formula: 'Клиенты, совершившие действие в первые 24 часа', source: 'События и ссылки', threshold: 'Менее 20% — жёлтый' },
      { label: 'Тренд за 7 и 30 дней', formula: 'Медиана времени по периодам', source: 'Аналитика событий', threshold: 'Снижение темпа — жёлтый' }
    ],
    visualization: 'Свечной график и круговая диаграмма доли быстрых рекомендателей.',
    update: 'Раз в сутки.',
    action: 'Обновить онбординг, добавить бонус за отзыв в первый день и персонализированное приветствие.',
    aiRecommendation: 'Быстрое распространение рекомендаций обычно растёт после персонализированного приветствия и бонуса за первый отзыв.',
    complexity: 'Высокая',
    time: '5–7 дней',
    status: 'warning'
  },
  cash: {
    title: 'Будущая касса',
    subtitle: 'Остаток денег и ожидаемые поступления',
    goal: 'Показать, сколько дней можно работать на текущем остатке.',
    metrics: [
      { label: 'Дней до нуля', formula: 'Остаток / среднедневной расход', source: 'Банк, касса, бухгалтерия', threshold: 'Менее 30 — красный, 30–60 — жёлтый, более 60 — зелёный' },
      { label: 'Дебиторская задолженность', formula: 'Сумма непогашенных счетов по срокам', source: 'Счета, CRM, бухгалтерия', threshold: 'Старше 30 дней — жёлтый' },
      { label: 'Прогноз денег', formula: 'Остаток + ожидаемые поступления по срокам', source: 'Банк и счета', threshold: 'Падение прогноза — жёлтый' }
    ],
    visualization: 'Большая цифра дней до нуля, столбики ожидаемых поступлений и таблица крупных дебиторов.',
    update: 'Ежедневно.',
    action: 'Запустить сбор задолженности, предлагать скидку за срочную оплату и сокращать лишние расходы.',
    aiRecommendation: 'Если запас дней до нуля низкий, сначала соберите дебиторку и сократите самые дорогие статьи расходов.',
    complexity: 'Низкая',
    time: '1 день',
    status: 'good'
  },
  ai: {
    title: 'Эффективность искусственного интеллекта',
    subtitle: 'Доля задач, переданных нейросетям',
    goal: 'Понять, как быстро команда внедряет искусственный интеллект в рутину.',
    metrics: [
      { label: 'Доля задач с ИИ', formula: 'Число задач с тегом ИИ / все задачи', source: 'Трекер задач и теги', threshold: 'Рост ниже 3% в месяц — жёлтый, падение — красный' },
      { label: 'Тренд за три месяца', formula: 'Сравнение процентов по периодам', source: 'Трекер задач', threshold: 'Снижение — красный' },
      { label: 'Сравнение с целью', formula: 'Фактический рост / целевой рост', source: 'План внедрения', threshold: 'Отставание от цели — жёлтый' }
    ],
    visualization: 'Линейный график с трендом и контрольной линией целевого роста.',
    update: 'Раз в неделю.',
    action: 'Провести обучение команды и внедрить нейросетевого помощника в обработку запросов.',
    aiRecommendation: 'Если рост доли задач с ИИ замедлился, проведите обучение и автоматизируйте первое простое направление.',
    complexity: 'Средняя',
    time: '3–5 дней',
    status: 'warning'
  }
};

// ============================================================
//   ANIMATION: СЧЁТЧИК ЦИФР
// ============================================================
function animateCounters() {
  document.querySelectorAll('.hero-stat[data-count]').forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    const strong = stat.querySelector('strong');
    const suffix = stat.getAttribute('data-suffix') || '';
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 50));

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      strong.textContent = current + suffix;
    }, 30);
  });
}

// ============================================================
//   ANIMATION: FADE-IN ПРИ СКРОЛЛЕ
// ============================================================
function handleFadeItems() {
  const items = document.querySelectorAll('.fade-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  items.forEach(item => observer.observe(item));
}

// ============================================================
//   HEADER: СКРОЛЛ
// ============================================================
function handleHeaderScroll() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ============================================================
//   HAMBURGER
// ============================================================
function handleHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }
}

// ============================================================
//   ЧАТ: ПРОКРУТКА ВНИЗ (ГАРАНТИРОВАННАЯ — С ОЖИДАНИЕМ ОТРИСОВКИ)
// ============================================================
function scrollToBottom() {
  const container = document.querySelector('.messages');
  if (!container) return;
  
  // 1. Немедленная прокрутка
  container.scrollTop = container.scrollHeight;
  
  // 2. Прокрутка после отрисовки (самый надёжный способ)
  requestAnimationFrame(() => {
    container.scrollTop = container.scrollHeight;
  });
  
  // 3. Прокрутка с задержкой для мобильных устройств
  setTimeout(() => {
    container.scrollTop = container.scrollHeight;
  }, 50);
  
  // 4. Максимальная страховка для медленных устройств
  setTimeout(() => {
    container.scrollTop = container.scrollHeight;
  }, 150);
}

// ============================================================
//   ЧАТ: АКЦЕНТ НА СООБЩЕНИИ ПОЛЬЗОВАТЕЛЯ
// ============================================================
function highlightMessage(element) {
  element.classList.add('highlight');
  setTimeout(() => {
    element.classList.remove('highlight');
  }, 1500);
}

// ============================================================
//   ЧАТ: ЭФФЕКТ ПЕЧАТИ
// ============================================================
function typeMessageWithScroll(element, text, speed = 25) {
  let index = 0;
  element.textContent = '';
  
  function typeNext() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      // Прокручиваем после каждого символа
      scrollToBottom();
      setTimeout(typeNext, speed);
    } else {
      // Финальная прокрутка после завершения
      scrollToBottom();
    }
  }
  
  // Небольшая задержка перед началом печати
  setTimeout(typeNext, 10);
}

// ============================================================
//   ЧАТ: ОСНОВНАЯ ЛОГИКА
// ============================================================
const chatMessages = document.querySelector('.messages');
const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('[data-chat-input]');

if (chatMessages && chatForm && chatInput) {
  const initialMessage = 'Здравствуйте. Я помощник по дашбордам. Скажите, что сейчас важнее: энергия основателя, прибыль по часам, качество клиентов или запас денег?';

  if (!chatMessages.querySelector('.message')) {
    const first = document.createElement('div');
    first.className = 'message';
    chatMessages.appendChild(first);
    typeMessageWithScroll(first, initialMessage, 20);
  }

  chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const value = chatInput.value.trim();
    if (!value) return;

    // ===== 1. СООБЩЕНИЕ ПОЛЬЗОВАТЕЛЯ — МГНОВЕННО =====
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = value;
    chatMessages.appendChild(userMessage);
    
    // ===== 2. ПРОКРУТКА С ГАРАНТИЕЙ =====
    // Сразу
    scrollToBottom();
    // Через RAF (после отрисовки)
    requestAnimationFrame(() => {
      scrollToBottom();
    });
    // Через таймеры для мобильных
    setTimeout(scrollToBottom, 50);
    setTimeout(scrollToBottom, 150);
    
    // ===== 3. АКЦЕНТ НА СООБЩЕНИИ =====
    highlightMessage(userMessage);

    // ===== 4. ОТВЕТ ИИ =====
    const lower = value.toLowerCase();
    let answer = 'Я вижу, что вы хотите быстрое решение. Для старта рекомендую книгу «Краткая история времени» как ввод в системное мышление и ролик по управлению временем на YouTube: «Как не сгореть в бизнесе».';

    if (lower.includes('энер') || lower.includes('устал') || lower.includes('сон')) {
      answer = 'Проверьте «Ментальную кассу». Для восстановления ритма рекомендую книгу «Эссенция» и видео «Сон и продуктивность для предпринимателя».';
    } else if (lower.includes('деньг') || lower.includes('касс') || lower.includes('ноль')) {
      answer = 'Откройте «Будущую кассу». Для быстрого понимания финансов рекомендую книгу «Финансовая грамотность для предпринимателя» и видео «Как управлять денежным потоком».';
    } else if (lower.includes('клиент') || lower.includes('жалоб') || lower.includes('отзыв')) {
      answer = 'Смотрите «Мусорное ведро» и «Скорость сарафана». Хорошая книга — «Психология влияния», а полезное видео — «Как уменьшить возвраты и жалобы».';
    } else if (lower.includes('рекл') || lower.includes('час')) {
      answer = 'Проверьте «Золотые часы». Рекомендую книгу «Маркетинг без бюджета» и видео «Как искать лучшие часы для рекламы».';
    } else if (lower.includes('ии') || lower.includes('нейр') || lower.includes('ai')) {
      answer = 'Откройте блок «Эффективность искусственного интеллекта». Рекомендую книгу «Искусственный интеллект для предпринимателя» и видео «Автоматизация рутины с ИИ».';
    }

    // ===== 5. СООБЩЕНИЕ ИИ — С ЭФФЕКТОМ ПЕЧАТИ =====
    const botMessage = document.createElement('div');
    botMessage.className = 'message';
    chatMessages.appendChild(botMessage);
    
    // Небольшая задержка перед печатью
    setTimeout(() => {
      typeMessageWithScroll(botMessage, answer, 15);
    }, 50);

    chatInput.value = '';
  });
}

// ============================================================
//   МОДАЛЬНОЕ ОКНО
// ============================================================
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('[data-modal-title]');
const modalBody = document.querySelector('[data-modal-body]');

const closeModal = () => {
  if (modal) modal.classList.remove('open');
};

function buildDashboardVisual(key, item) {
  switch (key) {
    case 'mental':
      return `
        <div class="visual-panel">
          <h4>Состояние основателя</h4>
          <div class="visual-pill-row">
            <span class="visual-pill good">Сон 7.2 ч</span>
            <span class="visual-pill warning">Фокус 3.4 ч</span>
            <span class="visual-pill danger">Тревога 2/5</span>
          </div>
          <div class="sparkline">
            <span style="height: 48%"></span>
            <span style="height: 64%"></span>
            <span style="height: 58%"></span>
            <span style="height: 76%"></span>
            <span style="height: 82%"></span>
            <span style="height: 70%"></span>
          </div>
        </div>
      `;
    case 'hours':
      return `
        <div class="visual-panel">
          <h4>Тепловая карта часов</h4>
          <div class="heat-grid">
            ${['08', '10', '12', '14', '16', '18', '20'].map((hour, index) => `<div class="heat-cell ${index % 2 === 0 ? 'active' : ''}" style="opacity: ${0.15 + index * 0.05}"></div>`).join('')}
          </div>
          <p class="small">Насыщенность клетки показывает, насколько сильное окно продаж стоит усилить.</p>
        </div>
      `;
    case 'waste':
      return `
        <div class="visual-panel">
          <h4>Потери по каналам</h4>
          <div class="channel-bars">
            <div class="channel-row"><span>Реклама</span><div class="bar-track"><div class="bar-fill danger" style="width: 82%"></div></div></div>
            <div class="channel-row"><span>Поддержка</span><div class="bar-track"><div class="bar-fill warning" style="width: 61%"></div></div></div>
            <div class="channel-row"><span>Логистика</span><div class="bar-track"><div class="bar-fill good" style="width: 38%"></div></div></div>
          </div>
        </div>
      `;
    case 'word':
      return `
        <div class="visual-panel">
          <h4>Карта распространения</h4>
          <div class="timeline-steps">
            <div class="timeline-step active">Покупка</div>
            <div class="timeline-step active">Отзыв</div>
            <div class="timeline-step active">Реферал</div>
            <div class="timeline-step">Повторная покупка</div>
          </div>
        </div>
      `;
    case 'cash':
      return `
        <div class="visual-panel">
          <h4>Прогноз кассы</h4>
          <div class="forecast-bars">
            ${['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'].map((label, index) => `<div class="forecast-bar"><span>${label}</span><strong style="height: ${48 + index * 8}%"></strong></div>`).join('')}
          </div>
        </div>
      `;
    case 'ai':
      return `
        <div class="visual-panel">
          <h4>Тренд внедрения ИИ</h4>
          <div class="line-chart">
            <div class="line-point" style="left: 8%; top: 62%"></div>
            <div class="line-point" style="left: 28%; top: 48%"></div>
            <div class="line-point" style="left: 50%; top: 38%"></div>
            <div class="line-point" style="left: 72%; top: 28%"></div>
            <div class="line-point" style="left: 92%; top: 18%"></div>
          </div>
        </div>
      `;
    default:
      return `
        <div class="visual-panel">
          <h4>Визуализация</h4>
          <p>${item.visualization}</p>
        </div>
      `;
  }
}

function renderDetailPage(key) {
  const item = dashboardData[key];
  if (!item) return;

  if (modal && modalTitle && modalBody) {
    modalTitle.textContent = item.title;
    modalBody.innerHTML = `
      <div class="detail-card">
        <h4>Цель</h4>
        <p>${item.goal}</p>
      </div>
      ${buildDashboardVisual(key, item)}
      <div class="detail-card">
        <h4>Какие цифры смотрим</h4>
        ${item.metrics.map(metric => `<p><strong>${metric.label}</strong>: ${metric.formula}</p>`).join('')}
      </div>
      <div class="detail-card">
        <h4>Источники данных</h4>
        ${item.metrics.map(metric => `<p><strong>${metric.label}</strong>: ${metric.source}</p>`).join('')}
      </div>
      <div class="detail-card">
        <h4>Пороговые значения</h4>
        ${item.metrics.map(metric => `<p><strong>${metric.label}</strong>: ${metric.threshold}</p>`).join('')}
      </div>
      <div class="detail-card">
        <h4>Обновление и действия</h4>
        <p>${item.update}</p>
        <p class="recommendations">${item.action}</p>
      </div>
      <div class="detail-card">
        <h4>ИИ рекомендации</h4>
        <p class="recommendations">${item.aiRecommendation}</p>
      </div>
      <div class="detail-card">
        <h4>Сложность внедрения</h4>
        <p>${item.complexity} — примерное время настройки: ${item.time}.</p>
      </div>
    `;
    modal.classList.add('open');
  }
}

if (modal) {
  document.querySelectorAll('[data-open-dashboard]').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.getAttribute('data-open-dashboard');
      if (key) renderDetailPage(key);
    });
  });

  const closeButton = document.querySelector('.close-btn');
  if (closeButton) closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
}

// ============================================================
//   АССИСТЕНТ (для ai-assistant.html)
// ============================================================
const assistantMessages = document.querySelector('[data-assistant-messages]');
const assistantForm = document.querySelector('[data-assistant-form]');
const assistantInput = document.querySelector('[data-assistant-input]');

if (assistantMessages && assistantForm && assistantInput) {
  const initialAssistant = 'Я готов помочь с обучением и ростом. Давайте сначала поговорим об увлечениях и переживаниях. Что вас волнует прямо сейчас?';
  if (!assistantMessages.querySelector('.message')) {
    const first = document.createElement('div');
    first.className = 'message';
    assistantMessages.appendChild(first);
    typeMessageWithScroll(first, initialAssistant, 20);
  }

  assistantForm.addEventListener('submit', event => {
    event.preventDefault();
    const value = assistantInput.value.trim();
    if (!value) return;

    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = value;
    assistantMessages.appendChild(userMessage);
    scrollToBottom();
    highlightMessage(userMessage);

    const lower = value.toLowerCase();
    let answer = 'Рекомендую начать с книги «Сделано в Америке» и видео «Как продавать без давления». Вернитесь позже и сохраните заметку о том, что вы решили попробовать.';

    if (lower.includes('прод') || lower.includes('продав') || lower.includes('маркет')) {
      answer = 'Похоже, вам важен рост продаж. Советую книгу «Сделано в Америке» и видео «Как продавать в онлайн-бизнесе без лишних расходов». Вернитесь и сохраните заметку после выбора пути.';
    } else if (lower.includes('страх') || lower.includes('трев') || lower.includes('переж')) {
      answer = 'Если вы переживаете из-за стресса и усталости, посмотрите книгу «Атомные привычки» и видео «Как вернуть энергию предпринимателю». После этого вернитесь и сделайте заметку о том, что вы хотите внедрить.';
    } else if (lower.includes('учит') || lower.includes('обуч')) {
      answer = 'Для обучения лучше подойдёт книга «Пиши, сокращай» и короткий обучающий ролик «Автоматизация бизнеса без боли». Вернитесь и сохраните заметку, чтобы закрепить новую идею.';
    }

    const botMessage = document.createElement('div');
    botMessage.className = 'message';
    assistantMessages.appendChild(botMessage);
    typeMessageWithScroll(botMessage, answer, 15);

    assistantInput.value = '';
    scrollToBottom();
  });
}

// ============================================================
//   ЗАМЕТКИ
// ============================================================
const noteArea = document.querySelector('[data-note-area]');
const saveNoteButton = document.querySelector('[data-save-note]');

if (noteArea && saveNoteButton) {
  const saved = localStorage.getItem('assistant-note');
  if (saved) noteArea.value = saved;

  saveNoteButton.addEventListener('click', () => {
    localStorage.setItem('assistant-note', noteArea.value || 'Заметка пока пустая.');
    saveNoteButton.textContent = '✅ Сохранено';
    setTimeout(() => { saveNoteButton.textContent = 'Сохранить заметку'; }, 1200);
  });
}

// ============================================================
//   РАДАР
// ============================================================
const radarCanvas = document.querySelector('[data-radar]');

if (radarCanvas) {
  const values = [78, 71, 66, 74, 81, 69];
  const labels = ['Энергия', 'Выручка', 'Клиенты', 'Рекомендации', 'Касса', 'ИИ'];
  const size = 320;
  const center = size / 2;
  const radius = 110;
  const points = values.map((value, index) => {
    const angle = (Math.PI * 2 * index) / values.length - Math.PI / 2;
    const currentRadius = (value / 100) * radius;
    return `${center + Math.cos(angle) * currentRadius},${center + Math.sin(angle) * currentRadius}`;
  }).join(' ');

  radarCanvas.innerHTML = `
    <svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${center}" cy="${center}" r="${radius}" fill="none" stroke="rgba(255,255,255,0.08)" />
      <circle cx="${center}" cy="${center}" r="${radius * 0.66}" fill="none" stroke="rgba(255,255,255,0.08)" />
      <circle cx="${center}" cy="${center}" r="${radius * 0.33}" fill="none" stroke="rgba(255,255,255,0.08)" />
      ${labels.map((label, index) => {
        const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2;
        const x = center + Math.cos(angle) * (radius + 18);
        const y = center + Math.sin(angle) * (radius + 18);
        return `<text x="${x}" y="${y}" fill="#8da0ba" font-size="12" text-anchor="middle">${label}</text>`;
      }).join('')}
      <polygon points="${points}" fill="rgba(83,214,194,0.15)" stroke="#53d6c2" stroke-width="2" />
    </svg>
  `;
}

// ============================================================
//   МАСКОТ: ИНТЕРАКТИВНОСТЬ
// ============================================================
const robotWrapper = document.querySelector('.robot-animation-wrapper');

if (robotWrapper) {
  const robotImage = robotWrapper.querySelector('.robot-image');

  robotWrapper.addEventListener('mouseover', () => {
    if (robotImage) robotImage.style.animationDuration = '2s';
  });

  robotWrapper.addEventListener('mouseout', () => {
    if (robotImage) robotImage.style.animationDuration = '4s';
  });
}

// ============================================================
//   ЗАПУСК ВСЕХ АНИМАЦИЙ
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(animateCounters, 400);
  handleFadeItems();
  handleHeaderScroll();
  handleHamburger();

  document.querySelectorAll('.fade-item').forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      item.classList.add('visible');
    }
  });
});

// ============================================================
//   DASHBOARD.HTML (если есть)
// ============================================================
if (document.getElementById('detail-title')) {
  const params = new URLSearchParams(window.location.search);
  const key = params.get('dashboard');
  const item = dashboardData[key];
  if (item) {
    const detailTitle = document.getElementById('detail-title');
    const detailSummary = document.getElementById('detail-summary');
    const detailContent = document.getElementById('detail-content');
    if (detailTitle && detailSummary && detailContent) {
      detailTitle.textContent = item.title;
      detailSummary.textContent = item.goal;
      detailContent.innerHTML = `
        <div class="detail-card">
          <h4>Цель</h4>
          <p>${item.goal}</p>
        </div>
        ${buildDashboardVisual(key, item)}
        <div class="detail-card">
          <h4>Какие цифры смотрим</h4>
          ${item.metrics.map(metric => `<p><strong>${metric.label}</strong>: ${metric.formula}</p>`).join('')}
        </div>
        <div class="detail-card">
          <h4>Источники данных</h4>
          ${item.metrics.map(metric => `<p><strong>${metric.label}</strong>: ${metric.source}</p>`).join('')}
        </div>
        <div class="detail-card">
          <h4>Пороговые значения</h4>
          ${item.metrics.map(metric => `<p><strong>${metric.label}</strong>: ${metric.threshold}</p>`).join('')}
        </div>
        <div class="detail-card">
          <h4>Обновление и действия</h4>
          <p>${item.update}</p>
          <p class="recommendations">${item.action}</p>
        </div>
        <div class="detail-card">
          <h4>ИИ рекомендации</h4>
          <p class="recommendations">${item.aiRecommendation}</p>
        </div>
        <div class="detail-card">
          <h4>Сложность внедрения</h4>
          <p>${item.complexity} — примерное время настройки: ${item.time}.</p>
        </div>
      `;
    }
  }
  // ============================================================
//   AI ASSISTANT PAGE — ДОПОЛНИТЕЛЬНАЯ ЛОГИКА
// ============================================================
if (document.querySelector('[data-assistant-messages]')) {
  const assistantMessages = document.querySelector('[data-assistant-messages]');
  const assistantForm = document.querySelector('[data-assistant-form]');
  const assistantInput = document.querySelector('[data-assistant-input]');

  if (assistantMessages && assistantForm && assistantInput) {
    const initialAssistant = 'Здравствуйте! Я ваш персональный ИИ-помощник. Задайте вопрос по любому дашборду: энергия, касса, клиенты, реклама, эффективность ИИ или попросите рекомендацию.';

    if (!assistantMessages.querySelector('.message')) {
      const first = document.createElement('div');
      first.className = 'message';
      assistantMessages.appendChild(first);
      typeMessageWithScroll(first, initialAssistant, 20);
    }

    assistantForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const value = assistantInput.value.trim();
      if (!value) return;

      const userMessage = document.createElement('div');
      userMessage.className = 'message user';
      userMessage.textContent = value;
      assistantMessages.appendChild(userMessage);
      scrollToBottom();
      highlightMessage(userMessage);

      const lower = value.toLowerCase();
      let answer = 'Рекомендую начать с книги «Сделано в Америке» и видео «Как продавать без давления». Вернитесь позже и сохраните заметку о том, что вы решили попробовать.';

      if (lower.includes('прод') || lower.includes('продав') || lower.includes('маркет')) {
        answer = 'Похоже, вам важен рост продаж. Советую книгу «Сделано в Америке» и видео «Как продавать в онлайн-бизнесе без лишних расходов». Вернитесь и сохраните заметку после выбора пути.';
      } else if (lower.includes('страх') || lower.includes('трев') || lower.includes('переж')) {
        answer = 'Если вы переживаете из-за стресса и усталости, посмотрите книгу «Атомные привычки» и видео «Как вернуть энергию предпринимателю». После этого вернитесь и сделайте заметку о том, что вы хотите внедрить.';
      } else if (lower.includes('учит') || lower.includes('обуч')) {
        answer = 'Для обучения лучше подойдёт книга «Пиши, сокращай» и короткий обучающий ролик «Автоматизация бизнеса без боли». Вернитесь и сохраните заметку, чтобы закрепить новую идею.';
      } else if (lower.includes('касс') || lower.includes('деньг') || lower.includes('финанс')) {
        answer = 'Проверьте дашборд «Будущая касса». Рекомендую книгу «Финансовая грамотность для предпринимателя» и видео «Как управлять денежным потоком». Сохраните эту заметку, чтобы не забыть проверить финансы.';
      } else if (lower.includes('энер') || lower.includes('сон') || lower.includes('устал')) {
        answer = 'Обратите внимание на «Ментальную кассу». Рекомендую книгу «Эссенция» и видео «Сон и продуктивность для предпринимателя». Запишите, что планируете внедрить.';
      } else if (lower.includes('клиент') || lower.includes('жалоб') || lower.includes('отзыв')) {
        answer = 'Смотрите «Мусорное ведро» и «Скорость сарафана». Хорошая книга — «Психология влияния», а полезное видео — «Как уменьшить возвраты и жалобы». Сохраните эту рекомендацию.';
      } else if (lower.includes('рекл') || lower.includes('час') || lower.includes('время')) {
        answer = 'Проверьте «Золотые часы». Рекомендую книгу «Маркетинг без бюджета» и видео «Как искать лучшие часы для рекламы». Запишите, какие часы у вас самые прибыльные.';
      } else if (lower.includes('ии') || lower.includes('нейр') || lower.includes('ai')) {
        answer = 'Откройте блок «Эффективность искусственного интеллекта». Рекомендую книгу «Искусственный интеллект для предпринимателя» и видео «Автоматизация рутины с ИИ». Сохраните заметку о том, какие задачи можно автоматизировать.';
      }

      const botMessage = document.createElement('div');
      botMessage.className = 'message';
      assistantMessages.appendChild(botMessage);
      typeMessageWithScroll(botMessage, answer, 15);

      assistantInput.value = '';
      scrollToBottom();
    });
  }
}
  // ============================================================
//   AI ASSISTANT PAGE — ЗАМЕТКИ (СОХРАНЕНИЕ, РЕДАКТИРОВАНИЕ, УДАЛЕНИЕ)
//   БЕЗ ИКОНОК
// ============================================================
if (document.querySelector('.ai-notes-card')) {
  const notesList = document.getElementById('notesList');
  const noteInput = document.getElementById('noteInput');
  const addNoteBtn = document.getElementById('addNoteBtn');

  // Загрузка заметок из localStorage
  let notes = JSON.parse(localStorage.getItem('ai-notes') || '[]');

  function renderNotes() {
    if (!notesList) return;
    notesList.innerHTML = '';
    
    if (notes.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'note-item';
      empty.innerHTML = `<span class="note-text" style="color: var(--text-muted); font-style: italic;">Нет заметок. Напишите первую!</span>`;
      notesList.appendChild(empty);
      return;
    }

    notes.forEach((note, index) => {
      const item = document.createElement('div');
      item.className = 'note-item';
      item.dataset.index = index;
      
      item.innerHTML = `
        <span class="note-text">${note}</span>
        <input class="edit-input" type="text" value="${note}" />
        <div class="note-actions">
          <button class="edit-btn">Редактировать</button>
          <button class="save-edit-btn">Сохранить</button>
          <button class="delete-btn">Удалить</button>
        </div>
      `;
      
      notesList.appendChild(item);
    });
  }

  function saveNotes() {
    localStorage.setItem('ai-notes', JSON.stringify(notes));
    renderNotes();
  }

  // Добавление заметки
  if (addNoteBtn && noteInput) {
    addNoteBtn.addEventListener('click', () => {
      const text = noteInput.value.trim();
      if (!text) return;
      notes.push(text);
      saveNotes();
      noteInput.value = '';
    });

    noteInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addNoteBtn.click();
      }
    });
  }

  // Обработка кликов по заметкам (удаление, редактирование)
  if (notesList) {
    notesList.addEventListener('click', (e) => {
      const item = e.target.closest('.note-item');
      if (!item) return;
      const index = parseInt(item.dataset.index);
      
      // Удаление
      if (e.target.classList.contains('delete-btn')) {
        notes.splice(index, 1);
        saveNotes();
        return;
      }
      
      // Редактирование
      if (e.target.classList.contains('edit-btn')) {
        item.classList.add('editing');
        const input = item.querySelector('.edit-input');
        if (input) {
          input.focus();
          input.select();
        }
        return;
      }
      
      // Сохранение редактирования
      if (e.target.classList.contains('save-edit-btn')) {
        const input = item.querySelector('.edit-input');
        if (input) {
          const newText = input.value.trim();
          if (newText) {
            notes[index] = newText;
            saveNotes();
          } else {
            item.classList.remove('editing');
          }
        }
        return;
      }
    });

    // Сохранение по Enter в поле редактирования
    notesList.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const input = e.target;
        if (input.classList.contains('edit-input')) {
          const item = input.closest('.note-item');
          const saveBtn = item?.querySelector('.save-edit-btn');
          if (saveBtn) saveBtn.click();
        }
      }
    });
  }

  renderNotes();
}

// ============================================================
//   AI ASSISTANT PAGE — МОБИЛЬНЫЕ ВКЛАДКИ
// ============================================================
if (document.querySelector('.ai-mobile-tabs')) {
  const tabs = document.querySelectorAll('.ai-tab-btn');
  const contents = document.querySelectorAll('.ai-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.tab;
      contents.forEach(content => {
        content.classList.toggle('active', content.dataset.tabContent === target);
      });
    });
  });

  // По умолчанию показываем чат
  const chatTab = document.querySelector('[data-tab="chat"]');
  if (chatTab) chatTab.click();
}

// ============================================================
//   AI ASSISTANT PAGE — ЧАТ
// ============================================================
if (document.querySelector('[data-assistant-messages]')) {
  const assistantMessages = document.querySelector('[data-assistant-messages]');
  const assistantForm = document.querySelector('[data-assistant-form]');
  const assistantInput = document.querySelector('[data-assistant-input]');

  if (assistantMessages && assistantForm && assistantInput) {
    const initialAssistant = 'Здравствуйте! Я ваш персональный ИИ-помощник. Задайте вопрос по любому дашборду: энергия, касса, клиенты, реклама, эффективность ИИ или попросите рекомендацию.';

    if (!assistantMessages.querySelector('.message')) {
      const first = document.createElement('div');
      first.className = 'message';
      assistantMessages.appendChild(first);
      typeMessageWithScroll(first, initialAssistant, 20);
    }

    assistantForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const value = assistantInput.value.trim();
      if (!value) return;

      const userMessage = document.createElement('div');
      userMessage.className = 'message user';
      userMessage.textContent = value;
      assistantMessages.appendChild(userMessage);
      scrollToBottom();
      highlightMessage(userMessage);

      const lower = value.toLowerCase();
      let answer = 'Рекомендую начать с книги «Сделано в Америке» и видео «Как продавать без давления». Вернитесь позже и сохраните заметку о том, что вы решили попробовать.';

      if (lower.includes('прод') || lower.includes('продав') || lower.includes('маркет')) {
        answer = 'Похоже, вам важен рост продаж. Советую книгу «Сделано в Америке» и видео «Как продавать в онлайн-бизнесе без лишних расходов». Вернитесь и сохраните заметку после выбора пути.';
      } else if (lower.includes('страх') || lower.includes('трев') || lower.includes('переж')) {
        answer = 'Если вы переживаете из-за стресса и усталости, посмотрите книгу «Атомные привычки» и видео «Как вернуть энергию предпринимателю». После этого вернитесь и сделайте заметку о том, что вы хотите внедрить.';
      } else if (lower.includes('учит') || lower.includes('обуч')) {
        answer = 'Для обучения лучше подойдёт книга «Пиши, сокращай» и короткий обучающий ролик «Автоматизация бизнеса без боли». Вернитесь и сохраните заметку, чтобы закрепить новую идею.';
      } else if (lower.includes('касс') || lower.includes('деньг') || lower.includes('финанс')) {
        answer = 'Проверьте дашборд «Будущая касса». Рекомендую книгу «Финансовая грамотность для предпринимателя» и видео «Как управлять денежным потоком». Сохраните эту заметку, чтобы не забыть проверить финансы.';
      } else if (lower.includes('энер') || lower.includes('сон') || lower.includes('устал')) {
        answer = 'Обратите внимание на «Ментальную кассу». Рекомендую книгу «Эссенция» и видео «Сон и продуктивность для предпринимателя». Запишите, что планируете внедрить.';
      } else if (lower.includes('клиент') || lower.includes('жалоб') || lower.includes('отзыв')) {
        answer = 'Смотрите «Мусорное ведро» и «Скорость сарафана». Хорошая книга — «Психология влияния», а полезное видео — «Как уменьшить возвраты и жалобы». Сохраните эту рекомендацию.';
      } else if (lower.includes('рекл') || lower.includes('час') || lower.includes('время')) {
        answer = 'Проверьте «Золотые часы». Рекомендую книгу «Маркетинг без бюджета» и видео «Как искать лучшие часы для рекламы». Запишите, какие часы у вас самые прибыльные.';
      } else if (lower.includes('ии') || lower.includes('нейр') || lower.includes('ai')) {
        answer = 'Откройте блок «Эффективность искусственного интеллекта». Рекомендую книгу «Искусственный интеллект для предпринимателя» и видео «Автоматизация рутины с ИИ». Сохраните заметку о том, какие задачи можно автоматизировать.';
      }

      const botMessage = document.createElement('div');
      botMessage.className = 'message';
      assistantMessages.appendChild(botMessage);
      typeMessageWithScroll(botMessage, answer, 15);

      assistantInput.value = '';
      scrollToBottom();
    });
  }
}
}
