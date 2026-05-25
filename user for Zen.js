// ============================================================================
// ZEN BROWSER ULTIMATE CONFIG: MAC PRO (INTEL) & MACBOOK (M1)
// ============================================================================

// --- [ 1. АНТИ-ЛАГ: ОТКЛЮЧЕНИЕ ТЯЖЕЛОЙ ПРОЗРАЧНОСТИ MACOS ] ---
// Излишняя прозрачность и frosted-glass эффекты заставляют оконный менеджер macOS
// постоянно пересчитывать слои. Отключаем это, чтобы интерфейс Zen не лагал.
user_pref("widget.macos.sidebar-blend-mode.behind-window", false);		
user_pref("widget.macos.titlebar-blend-mode.behind-window", false);


// --- [ 2. ИНТЕРФЕЙС И ОСОБЕННОСТИ ZEN BROWSER ] ---
// Оставляем поддержку разделения экрана (Split View) и кастомных стилей
user_pref("browser.tabs.splitView.enabled", true);
user_pref("browser.uidensity", 1);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Полностью отключаем косметическую анимацию. 
// В Zen это сделает переключение между вертикальными вкладками и воркспейсами мгновенным.
user_pref("toolkit.cosmeticAnimations.enabled", false);


// --- [ 3. АППАРАТНОЕ УСКОРЕНИЕ (ОЖИВЛЯЕМ AMD FIREPRO И GPU M1) ] ---
// Форсируем WebRender. На Mac Pro это заставит обе видеокарты эффективно
// отрисовывать сложную структуру панелей Zen.
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.enabled", true);
user_pref("layers.acceleration.force-enabled", true);

// Аппаратное декодирование видео (разгрузка старого Xeon на YouTube)
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("webgl.force-enabled", true);


// --- [ 4. УПРАВЛЕНИЕ ПАМЯТЬЮ (ДЛЯ БОЛЬШОГО КОЛИЧЕСТВА ВТИХУЮ ОТКРЫТЫХ ВКЛАДОК) ] ---
// В Zen из-за удобных вертикальных вкладок легко накопить сотню открытых страниц.
// Этот блок не даст им съесть всю память.

// Разрешаем автоуправление кэшем в RAM (без жестких лимитов, бережем ресурс SSD)
user_pref("browser.cache.memory.capacity", -1);

// Выгружаем неактивные вкладки при нехватке памяти (спасение для базовых M1)
user_pref("browser.tabs.unloadOnLowMemory", true);

// Визуально затемнять выгруженные вкладки для наглядности
user_pref("browser.tabs.fadeOutUnloadedTabs", true);

// Ограничиваем кэш изображений, чтобы бесконечные ленты не раздували процесс
user_pref("image.mem.max_ms_before_yield", 100);
user_pref("image.mem.surfacecache.max_size_kb", 262144); // 256MB

// Кэш для мгновенного перехода "Назад/Вперед" (bfcache) — оптимум 3 страницы
user_pref("browser.sessionhistory.max_total_viewers", 3);
user_pref("browser.sessionhistory.max_entries", 15);


// --- [ 5. ОПТИМИЗАЦИЯ ПРОЦЕССОРА (РЕСУРСЫ НА АКТИВНЫЙ ВОРКСПЕЙС) ] ---
// Жестко душим фоновые вкладки в неактивных рабочих пространствах Zen.
user_pref("dom.timeout.background_throttling_max_budget", 50);
user_pref("dom.timeout.background_budget_regeneration_rate", 3);

// Ограничиваем количество процессов контента до 4.
// Избавляет старый Xeon от лишнего оверхеда на переключение контекста процессора.
user_pref("dom.ipc.processCount", 4);
user_pref("dom.ipc.processCount.webIsolated", 4);


// --- [ 6. СКОРОСТЬ ЗАГРУЗКИ СТРАНИЦ ] ---
// Убираем задержку перед началом рендеринга (страница собирается сразу)
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);

// Оптимизируем сетевые потоки
user_pref("network.http.max-connections", 1500);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections", 30);


// --- [ 7. СТРОГАЯ ПРИВАТНОСТЬ И ОТКЛЮЧЕНИЕ ПАРАЗИТНОЙ НАГРУЗКИ ] ---
// Отключаем скрытую предзагрузку страниц, которая создает фоновый шум для CPU
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", 0);

// Полностью вырезаем встроенную телеметрию Firefox, на базе которой собран Zen
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);


// --- [ 8. МАК-СПЕЦИФИКА ] ---
// Фоновые службы Accessibility в macOS часто вызывают утечки памяти — отключаем
user_pref("accessibility.force_disabled", 1);
