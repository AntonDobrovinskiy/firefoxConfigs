// ============================================================================
// ULTIMATE UNIFIED CONFIG: INTEL XEON (MAC PRO) & APPLE SILICON (M1)
// ============================================================================

user_pref("browser.tabs.splitView.enabled", true);
user_pref("browser.uidensity", 1);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("widget.macos.titlebar-blend-mode.behind-window", true);

// --- [ 1. HARDWARE ACCELERATION & GRAPHICS (BOOST FOR AMD FIREPRO & M1) ] ---

// Force WebRender to full capacity. 
// On Mac Pro, this revives both FirePro cards; on M1, it utilizes the built-in GPU natively.
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.enabled", true);
user_pref("layers.acceleration.force-enabled", true);

// Enable hardware video decoding. Relieves the old Xeon processor during YouTube playback.
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.hardware-video-decoding.force-enabled", true);

// Allow WebGL to use hardware scaling
user_pref("webgl.force-enabled", true);


// --- [ 2. MEMORY MANAGEMENT (SMART BALANCE FOR RAM & SWAP) ] ---

// Return cache to auto-management (-1). 
// Mac Pro has plenty of RAM—let it store everything there. On M1, this prevents excessive SSD writes (SWAP).
user_pref("browser.cache.memory.capacity", -1);

// Aggressively unload inactive tabs when memory is low (lifesaver for 8GB M1 models).
user_pref("browser.tabs.unloadOnLowMemory", true);

// Visually dim unloaded tabs to make them easily identifiable
user_pref("browser.tabs.fadeOutUnloadedTabs", true);

// Limit image cache within reasonable bounds so endless feeds don't consume gigabytes.
user_pref("image.mem.max_ms_before_yield", 100);
user_pref("image.mem.surfacecache.max_size_kb", 262144); // 256MB

// Navigation history limit (bfcache) set to balance. 3 pages is perfect for instant Back/Forward.
user_pref("browser.sessionhistory.max_total_viewers", 3);
user_pref("browser.sessionhistory.max_entries", 15);


// --- [ 3. CPU OPTIMIZATION (RESOURCES ONLY FOR ACTIVE TASKS) ] ---

// Strictly throttle background tabs. Inactive tabs are barely allowed to wake up the CPU.
// This keeps the old Xeon from overheating and saves battery/resources on the M1.
user_pref("dom.timeout.background_throttling_max_budget", 50);
user_pref("dom.timeout.background_budget_regeneration_rate", 3);

// Limit the base number of content processes. 
// Too many processes create context-switching overhead for the old Xeon.
user_pref("dom.ipc.processCount", 4);
user_pref("dom.ipc.processCount.webIsolated", 4); // Optimal for Fission (site isolation)


// --- [ 4. SPEED AND INTERFACE RESPONSIVENESS ] ---

// Remove delay before page rendering starts. Pages begin assembling instantly.
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);

// Completely disable cosmetic browser animations (opening tabs, menus, etc.).
// The interface becomes rock-solid and visually "flies". Ideal for keyboard navigation.
user_pref("toolkit.cosmeticAnimations.enabled", false);


// --- [ 5. NETWORKING, STRICT PRIVACY & DEBLOATING ] ---

// FIXED: Completely disable prediction and hidden pre-rendering. 
// No more parasitic background traffic or hidden CPU load.
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", 0);

// Optimize connection limits for modern high-speed networks
user_pref("network.http.max-connections", 1500);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections", 30);

// Strip out telemetry, reports, and tracking (removes background threads)
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);

// Clean the New Tab page from Pocket, sponsors, and ads
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// Remove unnecessary clutter from the toolbar (Firefox Accounts overhead)
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled", false);
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.monitorEnabled", false);
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.relayEnabled", false);
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.vpnEnabled", false);


// --- [ 6. ADDITIONAL MAC TUNING ] ---

// Disable built-in Accessibility services if not needed. 
// On macOS, they often cause hidden memory leaks and interface stutters.
user_pref("accessibility.force_disabled", 1);
