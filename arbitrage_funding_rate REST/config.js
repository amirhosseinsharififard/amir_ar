/**
 * Configuration file for Price Comparison Bot
 * فایل تنظیمات ربات مقایسه قیمت
 */
const createConfig = () => ({
    // Exchange configurations
    // تنظیمات صرافی‌ها
    exchanges: {
        aster: {
            name: "Aster",
            apiKey: process.env.ASTER_API_KEY ||
                "39cf08e129afb79d67de1b9a198245bf5fc54260de142cd99f1848ae55bcedc0",
            secretKey: process.env.ASTER_API_SECRET_KEY ||
                "9b86018491f56aa55bede3fe50891d54131433d6d587bc32a8605b89b4e57633",
            baseUrl: process.env.ASTER_BASE_URL || "https://fapi.asterdex.com",
            timeout: 3000, // کاهش از 10 ثانیه به 3 ثانیه
            enabled: true,
        },
        hyperliquid: {
            name: "Hyperliquid",
            apiKey: process.env.HYPERLIQUID_API_KEY,
            secretKey: process.env.HYPERLIQUID_API_SECRET_KEY,
            baseUrl: "https://api.hyperliquid.xyz",
            timeout: 1000, // کاهش از 2 ثانیه به 1 ثانیه
            enabled: true,
            // Respect env for live/test
            sandbox: process.env.HYPERLIQUID_SANDBOX === "1",
            testnet: process.env.HYPERLIQUID_TESTNET === "1",
        },
    },
    // Monitoring configuration
    // تنظیمات مانیتورینگ
    monitoring: {
        interval: 1000, // Update interval in milliseconds / فاصله زمانی بروزرسانی (میلی‌ثانیه) - هر 1 ثانیه
        perSymbolDelayMs: 0, // Delay between symbols within a cycle / تاخیر بین نمادها در هر چرخه
        symbols: [
            { aster: "MONUSDT", hyperliquid: "MON/USDC:USDC" }, // ارز جدید - بررسی نماد درست
        ], // Symbols to monitor / نمادهای مورد نظر
        enabled: true, // Enable/disable monitoring / فعال/غیرفعال کردن مانیتورینگ
        maxRetries: 3, // Maximum retry attempts / حداکثر تعداد تلاش مجدد - کاهش یافت
        retryDelay: 100, // Delay between retries in milliseconds / تاخیر بین تلاش‌های مجدد
    },
    // Price comparison settings
    // تنظیمات مقایسه قیمت
    comparison: {
        significantDifferenceThreshold: 1.0, // Percentage threshold for significant difference / آستانه اختلاف قابل توجه (درصد)
        moderateDifferenceThreshold: 0.5, // Percentage threshold for moderate difference / آستانه اختلاف متوسط (درصد)
        pricePrecision: 2, // Decimal places for price display / تعداد اعشار برای نمایش قیمت
        percentagePrecision: 4, // Decimal places for percentage display / تعداد اعشار برای نمایش درصد
    },
    // Strategy settings for Aster-Hyperliquid arbitrage
    // تنظیمات استراتژی برای آربیتراژ بین Aster و Hyperliquid
    strategy: {
        openThresholdPercent: 0.3, // اگر Aster BID نسبت به Hyperliquid ASK بیش از این درصد بود، موقعیت باز شود
        closeThresholdPercent: 0.0, // اگر Hyperliquid BID نسبت به Aster ASK بزرگ‌تر از این شد، موقعیت بسته شود
        tokenAmountPerSide: 25, // تعداد توکن برای هر سمت (Aster و Hyperliquid)
        maxOpenPositionsPerSymbol: 1, // محدودیت تعداد موقعیت باز برای هر نماد
        marginAssets: { aster: "USDT", hyperliquid: "USDC" }, // دارایی مارجین
        minBalanceUsd: 5, // حداقل موجودی تقریبی برای اقدام به باز کردن پوزیشن
    },
    // Bot control settings
    // تنظیمات کنترل ربات
    bot: {
        enabled: process.env.BOT_ENABLED !== "0", // اگر BOT_ENABLED=0 باشد ربات خاموش است
        tradingEnabled: process.env.TRADING_ENABLED !== "0", // اگر TRADING_ENABLED=0 باشد معاملات خاموش است
        monitoringEnabled: process.env.MONITORING_ENABLED !== "0", // اگر MONITORING_ENABLED=0 باشد مانیتورینگ خاموش است
    },
    // Safety settings for live trading
    // تنظیمات ایمنی برای معاملات واقعی
    safety: {
        liveTrading: true, // برای معاملات واقعی باید 1 باشد
        requireEnvFlag: false, // اگر true باشد بدون LIVE_TRADING=1 سفارشی ارسال نمی‌شود
    },
    // Display settings
    // تنظیمات نمایش
    display: {
        showTimestamp: true, // Show timestamp in output / نمایش زمان در خروجی
        showExchangeDetails: true, // Show detailed exchange information / نمایش جزئیات صرافی
        highlightDifferences: true, // Highlight significant differences / برجسته کردن اختلافات قابل توجه
        colorOutput: true, // Enable colored output / فعال کردن خروجی رنگی
    },
    // Logging settings
    // تنظیمات لاگ
    logging: {
        level: "info", // Log level: debug, info, warn, error / سطح لاگ
        saveToFile: false, // Save logs to file / ذخیره لاگ در فایل
        logFile: "price_comparison.log", // Log file name / نام فایل لاگ
        liveDashboard: true, // اگر true باشد فقط داشبورد زنده آپدیت می‌شود و چاپ اضافی نداریم
    },
});
export default createConfig;
