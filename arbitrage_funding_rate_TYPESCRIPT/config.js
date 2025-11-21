import "dotenv/config";
const createConfig = () => ({
    exchanges: {
        aster: {
            name: "Aster",
            apiKey: process.env.ASTER_API_KEY,
            secretKey: process.env.ASTER_API_SECRET_KEY,
            baseUrl: process.env.ASTER_BASE_URL || "https://fapi.asterdex.com",
        },
        hyperliquid: {
            name: "Hyperliquid",
            apiKey: process.env.HYPERLIQUID_API_KEY,
            secretKey: process.env.HYPERLIQUID_API_SECRET_KEY,
        },
    },
    accounts: {
        amir: {
            aster: {
                apiKey: process.env.ASTER_API_KEY_AMIR,
                secretKey: process.env.ASTER_API_SECRET_KEY_AMIR,
            },
            hyperliquid: {
                apiKey: process.env.HYPERLIQUID_API_KEY_AMIR,
                secretKey: process.env.HYPERLIQUID_API_SECRET_KEY_AMIR,
            },
        },
        alireza: {
            aster: {
                apiKey: process.env.ASTER_API_KEY_ALIREZA,
                secretKey: process.env.ASTER_API_SECRET_KEY_ALIREZA,
            },
            hyperliquid: {
                apiKey: process.env.HYPERLIQUID_API_KEY_ALIREZA,
                secretKey: process.env.HYPERLIQUID_API_SECRET_KEY_ALIREZA,
            },
        },
    },
    monitoring: {
        symbols: [{ aster: "MONUSDT", hyperliquid: "MON" }],
    },
    limits: {
        maxTokenUnitsPerSymbol: 450,
        maxOpenPositions: 2,
        maxOpenOrders: undefined,
        openPositionDelayMs: 0,
        minTokenUnitsPerTrade: 225,
    },
    strategies: {
        priceArbitrage: {
            enabled: true,
            openPercent: 200,
            closePercent: -4.5,
        },
    },
    trading: {
        marginAssets: {
            aster: "USDT",
            hyperliquid: "USDC",
        },
        minBalanceUsd: 0,
        leverage: {
            aster: Number(3),
            hyperliquid: Number(3),
        },
    },
    bot: {
        enabled: process.env.BOT_ENABLED !== "0",
        tradingEnabled: process.env.TRADING_ENABLED !== "0",
        multiAccount: false,
    },
    safety: {
        liveTrading: process.env.LIVE_TRADING === "1",
    },
    logging: {
        liveDashboard: true,
    },
});
export default createConfig;
