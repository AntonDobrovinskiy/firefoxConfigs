// ============================================================================
// user.js — Firefox / Zen Browser Configuration
// ============================================================================
// This file contains custom Firefox preferences for Firefox-based browsers,
// including Zen Browser.
//
// The configuration focuses on:
//   - Reducing unnecessary background activity and resource consumption.
//   - Improving battery efficiency on an Apple Silicon MacBook.
//   - Enabling custom browser UI styling through userChrome.css and
//     userContent.css.
//   - Improving memory management by unloading inactive tabs when appropriate.
//   - Customizing macOS window rendering and browser interface behavior.
//
// IMPORTANT:
// Some preferences may be deprecated, ignored, or behave differently between
// Firefox versions and Firefox-based browsers such as Zen. Performance gains
// depend on the workload, open tabs, websites, and browser version.
// ============================================================================


// ============================================================================
// 1. General Browser Configuration
// ============================================================================

// Disable the captive portal detection service.
//
// Firefox normally uses this service to detect public Wi-Fi networks that
// require authentication through a browser-based login page, such as those
// found in hotels, airports, and other public locations.
//
// Disabling this service prevents Firefox from performing its usual captive
// portal checks. However, it may make automatic detection of Wi-Fi login pages
// less reliable. You may need to open a website manually to trigger the login
// page when connecting to a restricted network.
user_pref("network.captive-portal-service.enabled", false);


// Disable Firefox accessibility support.
//
// The value 1 forces accessibility services to remain disabled. This can
// reduce overhead associated with accessibility-related functionality.
//
// WARNING:
// This setting may interfere with screen readers, assistive technologies,
// and other accessibility tools. Keep it enabled if you rely on these
// features or need them for other applications interacting with Firefox.
user_pref("accessibility.force_disabled", 1);


// Enable custom browser interface stylesheets.
//
// This preference allows Firefox to load custom CSS files from the browser
// profile's chrome directory, including:
//
//   - userChrome.css: customizes browser UI elements, toolbars, tabs,
//     navigation controls, and other parts of the browser interface.
//   - userContent.css: customizes the appearance of certain internal pages
//     and document content, subject to Firefox's CSS restrictions.
//
// This setting is required for many advanced Firefox customization projects,
// including compact interfaces, custom tab styling, and modified URL bars.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);


// Enable SVG context properties in CSS content.
//
// This preference allows supported SVG context properties to be used in
// relevant content and styling contexts. It can be useful when customizing
// SVG-based icons whose appearance depends on CSS properties inherited from
// their surrounding elements.
//
// This is particularly relevant to advanced browser themes and custom icon
// styling. Actual support depends on the SVG features and CSS being used.
user_pref("svg.context-properties.content.enabled", true);


// ============================================================================
// 2. macOS Window Rendering and Visual Effects
// ============================================================================

// Enable the macOS title bar blending mode behind the window.
//
// This preference affects how the title bar blends with the area behind the
// browser window. It can help achieve a more integrated appearance between
// the browser interface and the macOS desktop, depending on the active theme
// and window configuration.
//
// The visual result may vary with macOS version, transparency settings,
// browser theme, and Zen-specific interface customizations.
user_pref("widget.macos.titlebar-blend-mode.behind-window", true);


// Enable CSS backdrop-filter support.
//
// The backdrop-filter property allows supported interface elements to apply
// visual effects, such as blur, to content behind them.
//
// This can be useful for translucent toolbars, floating panels, and other
// modern interface effects. Enabling the feature does not automatically add
// blur to every element; the relevant CSS must also define the effect.
//
// Depending on the page and rendering workload, backdrop filters can increase
// GPU activity. Keep this enabled when the visual effects are useful to you.
user_pref("layout.css.backdrop-filter.enabled", true);


// Enable native macOS fullscreen behavior.
//
// This preference controls Firefox's use of native macOS fullscreen windows.
// It can affect fullscreen transitions, window behavior, and integration with
// macOS Spaces and the desktop environment.
//
// The exact behavior depends on the Firefox version and the browser's own
// fullscreen implementation.
user_pref("widget.macos.native-fullscreen", true);


// ============================================================================
// 3. Memory Management and Tab Behavior
// ============================================================================

// Allow Firefox to unload tabs automatically when memory is low.
//
// Unloading a tab releases resources associated with its current document
// while keeping the tab itself open. When you return to an unloaded tab,
// Firefox can reload the page instead of maintaining all of its previous
// in-memory state.
//
// This can help reduce memory pressure when many tabs are open, especially
// on systems with limited RAM, such as an 8 GB MacBook.
//
// Note that unloading a tab is different from closing it. Some page state,
// unsaved changes, or temporary application data may not survive a reload.
user_pref("browser.tabs.unloadOnLowMemory", true);


// Enable visual fading for unloaded tabs.
//
// This preference allows Firefox to visually distinguish unloaded tabs
// through a faded appearance, where supported by the browser interface.
//
// The visual indicator helps identify tabs that are no longer actively
// loaded in memory and may need to reload when selected.
user_pref("browser.tabs.fadeOutUnloadedTabs", true);


// Enable visual fading for tabs that were explicitly unloaded.
//
// This complements the previous preference by applying the corresponding
// visual treatment to tabs unloaded through an explicit unloading action.
//
// It is useful when managing a large number of tabs because the tab strip
// can communicate which pages may need to be reloaded before use.
user_pref("browser.tabs.fadeOutExplicitlyUnloadedTabs", true);


// Close a tab by double-clicking it.
//
// This enables double-click-to-close behavior on tabs, where supported by
// the browser version and interface implementation.
//
// It provides a quick way to close tabs without moving the pointer to the
// close button. Be careful when double-clicking near tabs if you frequently
// use double-click gestures for other purposes.
user_pref("browser.tabs.closeTabByDblclick", true);


// ============================================================================
// 4. Battery Life and Performance Optimizations
//    Target system: Zen Browser on a MacBook Air M1 with 8 GB of RAM
// ============================================================================

// ---------------------------------------------------------------------------
// 4.1. Automatic Unloading of Inactive Tabs
// ---------------------------------------------------------------------------

// Set the minimum inactivity period before a tab becomes eligible for
// unloading.
//
// The value is specified in milliseconds:
//
//   300000 ms = 300 seconds = 5 minutes.
//
// This makes inactive tabs eligible for unloading after a relatively short
// period, potentially reducing memory usage when many tabs remain open.
//
// IMPORTANT:
// This is an eligibility threshold, not a guarantee that every inactive tab
// will be unloaded exactly five minutes after you stop using it. Firefox
// still applies its own unloading logic and may consider memory pressure,
// tab activity, and other internal conditions.
//
// Aggressive unloading can reduce memory consumption, but it may also cause
// more frequent page reloads, repeated network requests, and loss of temporary
// page state. Some preferences may be version-dependent.
user_pref("browser.tabs.min_inactive_duration_before_unload", 300000);


// ---------------------------------------------------------------------------
// 4.2. Disable Automatic Media Playback
// ---------------------------------------------------------------------------

// Block automatic playback of media.
//
// The value 5 represents the "block all autoplay" option in Firefox's
// media.autoplay.default preference.
//
// This helps prevent websites from automatically starting audio or video
// when a page opens or becomes active. Avoiding unwanted media playback can
// reduce CPU/GPU activity, network traffic, and battery consumption.
//
// Some websites may require a manual click before media can start. The exact
// behavior can vary depending on site permissions and Firefox version.
user_pref("media.autoplay.default", 5);


// Apply a stricter autoplay blocking policy.
//
// This preference controls the policy used for blocking automatic media
// playback. The value 2 requests a stricter blocking policy than the default
// behavior in configurations where this value is supported.
//
// Its interaction with media.autoplay.default and site-specific permissions
// depends on the Firefox version. It does not guarantee that every type of
// media, embedded player, or website script will be blocked.
user_pref("media.autoplay.blocking_policy", 2);


// ---------------------------------------------------------------------------
// 4.3. Throttle JavaScript Timers in Background Tabs
// ---------------------------------------------------------------------------

// Increase the minimum timeout interval for background JavaScript timers.
//
// The value is specified in milliseconds:
//
//   30000 ms = 30 seconds.
//
// Background websites often use timers for polling, periodic updates, and
// other scheduled tasks. Increasing the minimum interval can reduce how
// frequently eligible background timers run, potentially lowering CPU usage
// and power consumption when many tabs are open.
//
// This is a minimum timeout value, not a guarantee that every background
// script will execute exactly once every 30 seconds. Browser scheduling,
// page visibility, timer nesting, and other throttling mechanisms can affect
// actual execution frequency.
//
// Some live dashboards, web applications, and communication tools may update
// less frequently as a result.
user_pref("dom.min_background_timeout_value", 30000);


// Increase the minimum timeout interval for background tracking scripts.
//
// This preference targets background timers associated with tracking-related
// contexts, where supported by Firefox.
//
// Raising the interval may reduce the frequency of eligible background
// activity from tracking scripts, potentially improving efficiency when
// numerous pages remain open.
//
// The actual effect depends on the browser version and the way the relevant
// scripts are classified and scheduled.
user_pref("dom.min_tracking_background_timeout_value", 30000);


// ---------------------------------------------------------------------------
// 4.4. Reduce Session Restore Write Frequency
// ---------------------------------------------------------------------------

// Save browser session state less frequently.
//
// The value is specified in milliseconds:
//
//   60000 ms = 60 seconds.
//
// Firefox periodically saves session information so that open tabs and other
// session details can be restored after a crash or browser restart.
//
// Increasing the interval from a commonly used 15-second default to 60 seconds
// reduces the frequency of scheduled session-state writes. This may reduce
// some disk activity, although the actual impact on CPU wakeups and battery
// life is workload-dependent.
//
// TRADE-OFF:
// If Firefox crashes unexpectedly, the most recent session changes may not
// have been saved. Tabs or recently changed session state may therefore be
// missing from the restored session.
//
// This preference controls session-store scheduling; it does not disable all
// browser writes or guarantee a proportional reduction in disk activity.
user_pref("browser.sessionstore.interval", 60000);


// ---------------------------------------------------------------------------
// 4.5. Zen Browser-Specific Visual Settings
// ---------------------------------------------------------------------------

// Disable Zen's experimental rounded view.
//
// This preference disables the experimental rounded-view interface feature,
// where the current Zen version recognizes and supports this setting.
//
// It may simplify window rendering or avoid certain experimental visual
// effects. However, disabling rounded corners does not guarantee a measurable
// reduction in GPU usage or battery consumption on Apple Silicon.
//
// The primary reason to use this setting may be interface consistency,
// visual preference, or avoiding unwanted experimental styling.
user_pref("zen.view.experimental-rounded-view", false);


// ---------------------------------------------------------------------------
// 4.6. Disable Hover-Based HTTPS Connection Prediction
// ---------------------------------------------------------------------------

// Disable HTTPS connection prediction triggered by hovering over links.
//
// Browser connection prediction can sometimes initiate preparatory network
// activity before a link is opened. Disabling this behavior may reduce some
// speculative background network requests and unnecessary connection setup.
//
// The effect on battery life is likely to be small in many browsing sessions,
// and this preference does not disable all forms of DNS prefetching,
// preconnecting, caching, or network prediction.
//
// Actual behavior depends on the Firefox version and the site's connection
// characteristics.
user_pref("network.predictor.enable-hover-on-ssl", false);


// ============================================================================
// 5. Ctrl+Tab — Recent Tab Preview Limit
// ============================================================================

// Limit the number of tab previews displayed by the Ctrl+Tab interface.
//
// Setting the value to 5 limits the configured preview count to five tabs,
// where supported by the active browser interface.
//
// This can make keyboard-based tab switching easier to scan and less visually
// cluttered, particularly when many tabs are open.
//
// Note that this preference controls the configured preview count; it does
// not limit the total number of open tabs or necessarily change the ordering
// of tabs in the switcher.
user_pref("browser.ctrlTab.maxPreviews", 5);
