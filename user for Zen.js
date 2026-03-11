// --- [ MEMORY MANAGEMENT ] ---

// Limit the number of back/forward history entries stored in RAM.
// Default can be as high as 50; reduced to 10 to save memory.
user_pref("browser.sessionhistory.max_entries", 10);

// Number of "live" pages kept in memory for instant back/forward navigation (bfcache).
// The -1 (auto) setting can be aggressive on 8GB RAM; capped at 3 pages.
user_pref("browser.sessionhistory.max_total_viewers", 3);

// Enable the native mechanism to unload tabs when system memory is low.
user_pref("browser.tabs.unloadOnLowMemory", true);

// Limit the image cache in RAM. 
// Prevents the process from bloating when scrolling through image-heavy feeds (social media).
user_pref("image.mem.max_ms_before_yield", 100);
user_pref("image.mem.surfacecache.max_size_kb", 262144); // 256MB

// Set a hard cap for the memory cache. 
// If set to -1 (auto), Firefox may use 1GB+; capped here at ~512MB (524288 KB).
user_pref("browser.cache.memory.capacity", 524288);


// --- [ PERFORMANCE AND RESPONSIVENESS ] ---

// Start rendering pages immediately instead of waiting for the default 250ms delay.
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);

// Enable hardware acceleration and WebRender to offload rendering from the CPU to the GPU.
user_pref("layers.acceleration.force-enabled", true);
user_pref("gfx.webrender.all", false);
user_pref("gfx.webrender.compositor.force-enabled", false);
user_pref("layout.frame_rate", 60);
user_pref("layout.framevisibility.enabled", true);


// Optimize network requests by increasing the number of simultaneous connections.
user_pref("network.http.max-connections", 1500);
user_pref("network.http.max-persistent-connections-per-server", 10);


// --- [ PRIVACY AND DE-BLOATING ] ---
// Fewer background processes = less RAM and CPU usage.

// Disable telemetry and data collection to reduce background overhead.
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);

// Disable "bloat" features on the New Tab page (Pocket, sponsored stories).
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Disable speculative pre-connections and prefetching.
// While it can speed up loading, it consumes extra RAM and bandwidth by loading pages you might not visit.
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);

// --- [ SIDEBAR ANIMATION ] ---

user_pref("sidebar.animation.enabled", true);
user_pref("sidebar.animation.duration-ms", 50);
user_pref("sidebar.animation.expand-on-hover.delay-duration-ms", 50);
user_pref("sidebar.animation.expand-on-hover.duration-ms", 50);
