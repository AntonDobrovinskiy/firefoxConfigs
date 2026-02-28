/****************************************************************************
 * EXTREME SPEED: MacBook Air M1 (YouTube Priority)
 ****************************************************************************/

/** [1] UI & RENDERING ***/
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("content.notify.interval", 100000);

/** [2] SMART PREFETCH ***/
user_pref("network.http.speculative-parallel-limit", 10);
user_pref("network.dns.disablePrefetch", false);
user_pref("network.dns.disablePrefetchFromHTTPS", false);
user_pref("browser.urlbar.speculativeConnect.enabled", true);
user_pref("network.dnsCacheExpiration", 7200);

/** [3] M1 GPU ACCELERATION ***/
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("gfx.canvas.accelerated", true);

/** [4] YOUTUBE HARDWARE DECODING ***/
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.cache_readahead_limit", 12000);
user_pref("media.cache_resume_threshold", 6000);
user_pref("media.memory_cache_max_size", 262144);

/** [5] AI FUNCTIONS ***/
user_pref("browser.ml.enable", true);
user_pref("browser.ml.chat.enabled", true);
user_pref("browser.ml.chat.menu", true);
user_pref("browser.tabs.groups.smart.enabled", true);

/** [6] MEMORY & SSD ***/
user_pref("browser.cache.memory.capacity", -1);
user_pref("browser.sessionstore.interval", 1800000);

/** [7] MACOS ***/
user_pref("widget.macos.native-context-menus", true);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");

/** [8] NETWORK PRIORITY ***/
user_pref("network.http.pacing.requests.enabled", false);
