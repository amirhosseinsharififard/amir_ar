/**
 * Configuration file for the Real-Time Arbitrage Bot
 * فایل تنظیمات برای ربات آربیتراژ لحظه‌ای
 */
const createConfig = () => ({
    // ========================================
    // EXCHANGE API CONFIGURATION
    // تنظیمات API صرافی‌ها
    // ========================================
    exchanges: {
        aster: {
            name: "Aster",
            apiKey: process.env.ASTER_API_KEY,
            secretKey: process.env.ASTER_API_SECRET_KEY,
            baseUrl: process.env.ASTER_BASE_URL || "https://fapi.asterdex.com",
        },
        hyperliquid: {
            name: "Hyperliquid",
            apiKey: process.env.HYPERLIQUID_API_KEY || "your_hyperliquid_api_key",
            secretKey: process.env.HYPERLIQUID_API_SECRET_KEY || "your_hyperliquid_secret_key",
        },
    },
    // ========================================
    // SYMBOL MONITORING CONFIGURATION
    // تنظیمات مانیتورینگ نمادها
    // ========================================
    monitoring: {
        // Define the symbol pairs to monitor. The bot will automatically subscribe to WebSocket streams for these.
        // جفت نمادها برای مانیتورینگ را تعریف کنید. ربات به طور خودکار در استریم‌های WebSocket برای اینها عضو می‌شود.
        symbols: [
            { aster: "CCUSDT", hyperliquid: "CC" }, // Example: Metal on Aster vs Hyperliquid
        ],
    },
    // ========================================
    // STRATEGY CONFIGURATION
    // تنظیمات استراتژی
    // ========================================
    strategies: {
        // --- Price Arbitrage Strategy (based on bid/ask difference) ---
        priceArbitrage: {
            enabled: true, // Set to true to enable this strategy
            openThresholdPercent: 0.5, // Open a position if the price spread is greater than this percentage
            closeThresholdPercent: -0.5, // Close a position when the spread drops to this percentage
            tradeAmount: 100, // The amount of the asset to trade for this strategy
        },
        // --- Funding Rate Arbitrage Strategy (based on funding rate difference) ---
        fundingRateArbitrage: {
            enabled: true, // Set to true to enable this strategy
            minDifferencePercent: 0.01, // Open a position if the absolute difference in funding rates is greater than this percentage
            tradeAmount: 100, // The amount of the asset to trade for this strategy
        },
    },
    // ========================================
    // GENERAL TRADING SETTINGS
    // تنظیمات عمومی معاملات
    // ========================================
    trading: {
        // The asset to use for margin/collateral on each exchange
        marginAssets: {
            aster: "USDT",
            hyperliquid: "USDC",
        },
        // The bot will not attempt to open new positions if the balance on either exchange is below this value
        minBalanceUsd: 0,
    },
    // ========================================
    // BOT BEHAVIOR CONTROLS
    // کنترل‌های رفتار ربات
    // ========================================
    bot: {
        // Master switch for the entire bot. If false, the bot will not run.
        enabled: process.env.BOT_ENABLED !== "0",
        // Master switch for all trading. If false, the bot will only monitor and display opportunities.
        tradingEnabled: process.env.TRADING_ENABLED !== "0",
    },
    // ========================================
    // LOGGING AND DISPLAY
    // تنظیمات لاگ و نمایش
    // ========================================
    logging: {
        // If true, the dashboard will update on a single line in the console. If false, it will print new lines.
        liveDashboard: true,
    },
});
export default createConfig;
