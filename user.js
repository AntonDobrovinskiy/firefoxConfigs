// ============================================================================
// user.js — Firefox & Zen Browser Magic Rulebook
// Target: MacBook Air M3 (16 GB RAM)
// ============================================================================
// Hi! This file is like a list of house rules for your browser.
// Every time you open Firefox or Zen Browser, it reads these rules so it
// knows how to behave: stay fast, save battery, look pretty, and not be
// annoying.
//
// Works in BOTH Firefox and Zen Browser!
// If regular Firefox sees a "zen.*" rule, it just shrugs and ignores it.
// ============================================================================


// ============================================================================
// 1. GENERAL HOUSE RULES
// ============================================================================

// Stop asking "Hey, is this hotel Wi-Fi?" all the time.
// Normally, your browser keeps poking the internet to see if you need to
// sign in to café or airport Wi-Fi. Turning this off keeps it quiet.
// (If you ARE at a café and the login page doesn't pop up by itself, just
// try opening any normal website and it will show up!)
user_pref("network.captive-portal-service.enabled", false);

// Helper tools for other Mac apps (LEFT OFF / COMMENTED OUT ON PURPOSE).
// If you remove the "//" at the start of the line below, it tells the browser
// to stop talking to screen readers and helper apps. That saves a tiny bit of
// energy, BUT it can break cool Mac apps like Raycast, Alfred, or window
// managers. Since your M3 MacBook is super strong, we leave this rule asleep.
// user_pref("accessibility.force_disabled", 1);

// Let us paint and decorate the browser with custom stickers!
// This lets you use special CSS files (userChrome.css and userContent.css)
// to change how buttons, tabs, and toolbars look.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Let custom icons borrow colors from the room they are in.
// Like a chameleon! If you use a custom theme, this helps SVG icons match
// the colors around them nicely.
user_pref("svg.context-properties.content.enabled", true);


// ============================================================================
// 2. MAKING IT LOOK PRETTY ON MACOS
// ============================================================================

// Make the top bar act like frosted glass.
// This lets the colors of your Mac desktop peek softly through the top of
// the browser window (and makes Zen's sidebar look super sleek).
user_pref("widget.macos.titlebar-blend-mode.behind-window", true);

// Turn on the "blurry glass" magic effect.
// Allows menus and translucent panels to blur whatever is behind them,
// just like looking through a steamy bathroom mirror.
user_pref("layout.css.backdrop-filter.enabled", true);

// Use the real Mac fullscreen mode.
// When you click the green button to make the browser huge, it slides smoothly
// into its own Mac Space instead of doing a weird fake fullscreen.
user_pref("widget.macos.native-fullscreen", true);


// ============================================================================
// 3. MEMORY, SPEED & PROTECTING YOUR SSD (16 GB RAM SUPERPOWERS!)
// ============================================================================

// Stop scribbling temporary web pictures onto your main storage (SSD).
// Think of your SSD as a notebook with limited pages—writing to it nonstop
// wears it out over many years. We turn disk caching OFF...
user_pref("browser.cache.disk.enable", false);

// ...and use your super-fast 16 GB RAM desk instead!
// RAM is like a giant whiteboard that wipes clean and writes super fast.
user_pref("browser.cache.memory.enable", true);

// Give the browser a 512 MB spot on that whiteboard (524288 KB = 512 MB).
// Pages you just visited will pop back up in a blink!
user_pref("browser.cache.memory.capacity", 524288);

// Let sleepy tabs take a nap if your Mac ever runs low on memory.
// A napping tab stays in your tab bar so you don't lose it, it just closes
// its eyes until you click it again.
user_pref("browser.tabs.unloadOnLowMemory", true);

// Wait 45 minutes before telling an unused tab it's bedtime.
// 2700000 milliseconds = 45 minutes.
// On an 8 GB Mac you'd rush tabs to bed in 5 minutes, which is annoying.
// With 16 GB, your tabs can stay awake and ready for a whole 45 minutes!
user_pref("browser.tabs.min_inactive_duration_before_unload", 2700000);

// Make napping tabs look a little faded/ghostly.
// That way, you can tell at a glance which tabs are sleeping and will need
// a second to wake up when you click them.
user_pref("browser.tabs.fadeOutUnloadedTabs", true);

// Also make tabs look faded if YOU manually told them to go to sleep.
user_pref("browser.tabs.fadeOutExplicitlyUnloadedTabs", true);

// Double-click a tab to make it go poof (close it).
// Super handy shortcut! (Note: If you keep accidentally closing tabs in Zen's
// sidebar by clicking too fast, just change "true" to "false" here.)
user_pref("browser.tabs.closeTabByDblclick", true);


// ============================================================================
// 4. BATTERY LIFE & M3 CHIP MUSCLES
// ============================================================================

// Turn on AV1 video superpowers!
// Your M3 chip has a special built-in mini-brain JUST for playing modern
// AV1 videos (like on YouTube). Using it saves tons of battery and keeps
// your MacBook cool.
user_pref("media.av1.enabled", true);

// Tell the browser: "Use the Mac's special video muscles, not the main brain!"
// Hardware video decoding makes watching videos smooth and battery-friendly.
user_pref("media.hardware-video-decoding.enabled", true);

// NO loud surprise videos!
// Value 5 = block ALL autoplay (both video and sound). Websites aren't allowed
// to start yelling at you until YOU press Play.
user_pref("media.autoplay.default", 5);

// Be extra strict about that "no surprise videos" rule.
// Value 2 means a website can only play media when you actually click or tap
// on the page yourself.
user_pref("media.autoplay.blocking_policy", 2);

// Tell background tabs to chill out and only check for updates every 10 seconds.
// 10000 milliseconds = 10 seconds.
// Fast enough that your chats (like Telegram or Slack) don't feel broken,
// but slow enough that hidden tabs aren't jumping up and down draining battery.
user_pref("dom.min_background_timeout_value", 10000);

// Put sneaky background tracking scripts in a 30-second time-out.
// 30000 milliseconds = 30 seconds.
// If a hidden tab is running ad-trackers, make them wait way longer to do work.
user_pref("dom.min_tracking_background_timeout_value", 30000);

// Save your list of open tabs every 60 seconds instead of every 15 seconds.
// 60000 milliseconds = 60 seconds.
// Your browser writes down which tabs you have open just in case it crashes.
// Doing it once a minute gives your disk a nice breather.
user_pref("browser.sessionstore.interval", 60000);

// Don't start loading a website just because your mouse hovered over a link.
// Normally, if your mouse pointer merely touches a link, the browser gets
// overly excited and starts calling that website early. This tells it to wait
// until you actually click!
user_pref("network.predictor.enable-hover-on-ssl", false);


// ============================================================================
// 5. SHHH! NO TATTLING (PRIVACY & LESS BACKGROUND NOISE)
// ============================================================================

// Stop sending daily "how is the browser feeling?" health reports home.
user_pref("datareporting.healthreport.uploadEnabled", false);

// Turn off telemetry (anonymous stats about what buttons you click).
// Fewer secret background messages = a slightly quieter, more private browser.
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);


// ============================================================================
// 6. QUICK TAB SWITCHING (CTRL + TAB)
// ============================================================================

// When you press Ctrl+Tab, only show picture previews for 5 recent tabs.
// Keeps the popup neat and tidy instead of throwing a giant wall of pictures
// at your face.
user_pref("browser.ctrlTab.maxPreviews", 5);

// Sort Ctrl+Tab by the tabs you JUST used (like Cmd+Tab on your Mac!).
// Super easy to bounce back and forth between two tabs.
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);


// ============================================================================
// 7. ZEN BROWSER SPECIAL RULES
//    (Regular Firefox doesn't understand these and will safely ignore them!)
// ============================================================================

// Turn on Zen's own built-in tab nap-time manager.
user_pref("zen.tab-unloader.enabled", true);

// Put unused Zen tabs to sleep after 45 minutes.
// Matches our Firefox rule above so both browsers behave like twins!
user_pref("zen.tab-unloader.timeout-minutes", 45);

// Sharp corners vs. Round corners in Zen Browser.
// Right now it's "false" (no experimental rounded corners).
// Your M3 chip handles round corners effortlessly, so if you like the cute
// rounded look in Zen, just change "false" to "true"!
user_pref("zen.view.experimental-rounded-view", true);
