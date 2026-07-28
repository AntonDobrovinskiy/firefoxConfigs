// Focus: Privacy, Telemetry Removal, Debloat, macOS Performance, and Memory Management

/** 1. MAC OS SPECIFIC & UI PERFORMANCE **/
// Disable macOS sidebar window transparency to eliminate render lag
user_pref("widget.macos.sidebar-blend-mode.behind-window", false);
// Disable macOS native fullscreen animation for snappier, instant transitions
user_pref("browser.fullscreen.animate", false);
// Enable smooth scrolling (optimized for Apple Trackpad/Magic Mouse feel)
user_pref("general.smoothScroll", true);

/** 2. MEMORY & TAB MANAGEMENT **/
// Automatically unload tabs when system memory is low
user_pref("browser.tabs.unloadOnLowMemory", true);
// Visually fade out tabs that have been unloaded to easily identify them
user_pref("browser.tabs.fadeOutUnloadedTabs", true);
// Increase session restore interval to 1 minute (60000ms) to reduce SSD writes and stutter (Default is 15s)
user_pref("browser.sessionstore.interval", 60000);

/** 3. PRIVACY & TELEMETRY (DEBLOAT) **/
// Completely disable Firefox telemetry, data collection, and health reports
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable crash reports sending
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Disable network prefetching (Privacy and bandwidth optimization)
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);

/** 4. UI CLEANUP & ANNOYANCES **/
// Disable Pocket integration completely
user_pref("extensions.pocket.enabled", false);

// Disable sponsored content, shortcuts, and stories on the New Tab page
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Disable "Check if Firefox is the default browser" prompt
user_pref("browser.shell.checkDefaultBrowser", false);

// Remove the annoying "Website is now fullscreen" warning overlay delay
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** 5. RENDERING & HARDWARE ACCELERATION **/
// Force enable WebRender for hardware-accelerated page drawing
user_pref("gfx.webrender.all", true);

/** 6. SECURITY TWEAKS **/
// Enable HTTPS-Only mode in all windows
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);

// Prevent accessibility services from accessing the browser 
// (Crucial for performance and security if you don't use screen readers like VoiceOver)
user_pref("accessibility.force_disabled", 1);
