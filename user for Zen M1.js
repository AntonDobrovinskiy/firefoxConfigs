/****************************************************************************
 * ZEN BROWSER EXTREME CONFIG (MacBook Air M1 8GB)
 * Optimized for: Speed, YouTube, AI and energy efficiency on 8GB RAM
 ****************************************************************************/

/** [1] ZEN UI SPEEDUP ***/
user_pref("zen.theme.border-radius", 0); // Remove rounded corners (significantly reduces GPU load on M1)
user_pref("zen.theme.content-element-separation", 0); // Remove extra margins around sites
user_pref("zen.downloads.download-animation-duration", 200); // Fast download animation
user_pref("zen.view.sidebar-height-throttle", 50); // Speed up sidebar response
user_pref("zen.tabs.dim-pending", false); // Don't waste resources on dimming inactive tabs

/** [2] INSTANT RESPONSE (ENGINE) ***/
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("content.notify.interval", 100000);

/** [3] NETWORK AND PRELOADING (FLYING MODE) ***/
user_pref("network.http.speculative-parallel-limit", 15);
user_pref("network.dns.disablePrefetch", false);
user_pref("network.prefetch-next", true);
user_pref("browser.urlbar.speculativeConnect.enabled", true);

/** [4] GRAPHICS AND VIDEO (M1 METAL & YOUTUBE) ***/
user_pref("gfx.webrender.all", true);
user_pref("gfx.canvas.accelerated", true);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.cache_readahead_limit", 15000); // YouTube buffer 15 seconds ahead
user_pref("media.memory_cache_max_size", 524288); // 512MB for video in RAM (optimized for 8GB)

/** [5] MEMORY AND SSD (Protect Mac) ***/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.capacity", 524288); // 512MB (optimized for 8GB RAM)
user_pref("browser.sessionstore.interval", 1800000); // Save session every 30 min
user_pref("browser.tabs.unloadOnLowMemory", true); // Auto-unload inactive tabs on low memory
user_pref("browser.tabs.min_inactive_duration_before_unload", 300000); // Unload after 5 min inactive

/** [6] AI AND MOZILLA FEATURES (DON'T TOUCH) ***/
user_pref("browser.ml.enable", true);
user_pref("browser.ml.chat.enabled", true);
user_pref("browser.ml.chat.menu", true);

/** [7] MACOS SPECIFIC ***/
user_pref("widget.macos.native-context-menus", true);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");

/** [8] TRANSPARENCY (If Zen lags) ***/
// If you notice lag during scrolling, change these three to false:
user_pref("browser.tabs.allow_transparent_browser", true);
user_pref("widget.macos.sidebar-blend-mode.behind-window", true);
user_pref("widget.macos.titlebar-blend-mode.behind-window", true);

/** [9] PROCESS MANAGEMENT (8GB OPTIMIZED) ***/
user_pref("dom.ipc.processCount.webIsolated", 4); // 4 for 8GB RAM (reduced from 6)
user_pref("dom.ipc.processPrelaunch.enabled", true); // Pre-launch processes for faster startup
user_pref("dom.ipc.processCount", 8); // Total content processes (balanced for 8GB)

/** [10] ENERGY EFFICIENCY (M1 BATTERY) ***/
user_pref("browser.low_commit_space_threshold_mb", 200); // Aggressive memory management
user_pref("browser.low_memory_notification_mb", 100); // Early low memory warning
user_pref("javascript.options.mem.gc_threshold", 16384); // GC threshold in KB (16MB)