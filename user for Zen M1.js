/****************************************************************************
 * ZEN BROWSER EXTREME CONFIG (MacBook Air M1 8GB)
 * Optimized for: Speed > RAM, YouTube, AI on 8GB unified memory
 ****************************************************************************/

/** [1] ZEN UI SPEEDUP ***/
user_pref("zen.theme.border-radius", 0);
user_pref("zen.theme.content-element-separation", 0);
user_pref("zen.downloads.download-animation-duration", 200);
user_pref("zen.view.sidebar-height-throttle", 50);
user_pref("zen.tabs.dim-pending", false);
user_pref("zen.tabs.animation.duration", 100);

/** [2] INSTANT RESPONSE (ENGINE) ***/
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("content.notify.interval", 100000);
user_pref("content.notify.backoffcount", 10);

/** [3] NETWORK AND PRELOADING (SPEED PRIORITY) ***/
user_pref("network.http.speculative-parallel-limit", 12);
user_pref("network.dns.disablePrefetch", false);
user_pref("network.prefetch-next", true);
user_pref("browser.urlbar.speculativeConnect.enabled", true);
user_pref("network.dnsCacheExpiration", 7200);

/** [4] GRAPHICS AND VIDEO (M1 METAL & YOUTUBE) ***/
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.metal.force-enabled", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("layers.gpu-process.force-enabled", true);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.cache_readahead_limit", 15000); // 15 sec buffer (smooth 4K)
user_pref("media.cache_resume_threshold", 8000); // Resume at 8 sec
user_pref("media.memory_cache_max_size", 393216); // 384MB for video
user_pref("media.memory_max_size", 131072); // 128MB additional
user_pref("media.video-queue.default-size", 20);

/** [5] MEMORY AND SSD (8GB BALANCED) ***/
user_pref("browser.cache.disk.enable", false); // RAM only (SSD protection)
user_pref("browser.cache.memory.capacity", 393216); // 384MB (balanced)
user_pref("browser.sessionstore.interval", 1800000); // 30 min save
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("browser.tabs.min_inactive_duration_before_unload", 300000); // 5 min
user_pref("browser.tabs.drawInTitlebar", true);

/** [6] AI AND MOZILLA FEATURES ***/
user_pref("browser.ml.enable", true);
user_pref("browser.ml.chat.enabled", true);
user_pref("browser.ml.chat.menu", true);

/** [7] MACOS SPECIFIC ***/
user_pref("widget.macos.native-context-menus", true);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("browser.fullscreen.animate", false);

/** [8] TRANSPARENCY (Disable if lag) ***/
user_pref("browser.tabs.allow_transparent_browser", true);
user_pref("widget.macos.sidebar-blend-mode.behind-window", true);
user_pref("widget.macos.titlebar-blend-mode.behind-window", true);

/** [9] PROCESS MANAGEMENT (6 FOR 8GB) ***/
user_pref("dom.ipc.processCount", 6); // Optimized for 8GB unified memory
user_pref("dom.ipc.processCount.webIsolated", 3); // 3 isolated processes
user_pref("dom.ipc.processPrelaunch.enabled", true);
user_pref("dom.ipc.processPrelaunch.fork_count", 2);

/** [10] GARBAGE COLLECTION (SMOOTHER) ***/
user_pref("javascript.options.mem.gc_threshold", 32768); // 32MB (less frequent GC)
user_pref("javascript.options.mem.high_water_mark", 64); // 64MB
user_pref("javascript.options.mem.max", 524288); // 512MB max JS memory
user_pref("browser.low_commit_space_threshold_mb", 300);
user_pref("browser.low_memory_notification_mb", 150);

/** [11] NETWORK TUNING ***/
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 12);