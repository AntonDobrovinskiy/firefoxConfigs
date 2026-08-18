// ============================================================================
// user.js — Firefox Configuration File
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
