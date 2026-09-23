// ============================================================================
// user.js — Firefox / Zen Configuration File
// ============================================================================

// 1. Disable Captive Portal service (Wi-Fi authorization check on public networks)
user_pref("network.captive-portal-service.enabled", false);

// 2. Disable Accessibility services to conserve system resources
user_pref("accessibility.force_disabled", 1);

// 3. Enable support for custom CSS stylesheets (userChrome.css and userContent.css)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true); // Extends CSS features for icons

// 4. macOS Vibrancy and window rendering settings
user_pref("widget.macos.titlebar-blend-mode.behind-window", true);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("widget.macos.native-fullscreen", true);

// 5. Memory management: automatic and manual tab unloading
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("browser.tabs.fadeOutUnloadedTabs", true);
user_pref("browser.tabs.fadeOutExplicitlyUnloadedTabs", true);

user_pref("browser.tabs.closeTabByDblclick", true);

// ============================================================================
// Battery & performance optimizations for Zen on MacBook M1 8GB
// ============================================================================

// --- Tab unloading (более агрессивная выгрузка неактивных вкладок) ---
// Минимальное время неактивности перед тем, как вкладка станет кандидатом на выгрузку (5 минут)
user_pref("browser.tabs.min_inactive_duration_before_unload", 300000);

// --- Autoplay (блокирует автовоспроизведение видео/аудио — сильно экономит батарею) ---
user_pref("media.autoplay.default", 5);                    // 5 = block all autoplay
user_pref("media.autoplay.blocking_policy", 2);            // более строгая политика

// --- Throttling фоновых вкладок (JS в фоне работает реже) ---
user_pref("dom.min_background_timeout_value", 30000);      // 30 секунд вместо 1
user_pref("dom.min_tracking_background_timeout_value", 30000);

// --- Session store (реже пишет сессию на диск → меньше просыпаний CPU) ---
user_pref("browser.sessionstore.interval", 60000);         // 60 секунд вместо 15

// --- Zen-specific: отключение экспериментальных rounded corners (экономит GPU на M1) ---
user_pref("zen.view.experimental-rounded-view", false);

// --- Дополнительно полезное (не влияет на скорость активных вкладок) ---
user_pref("network.predictor.enable-hover-on-ssl", false); // меньше фонового префетча

user_pref("browser.ctrlTab.maxPreviews", 5);
