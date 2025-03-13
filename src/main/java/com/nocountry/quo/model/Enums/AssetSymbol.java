package com.nocountry.quo.model.Enums;

public enum AssetSymbol {
    BTC,
    ETH,
    USDT,
    USDC,
    BNB,
    XRP,
    ADA,
    DAI,
    SOL,
    DOT;

    public static AssetSymbol fromString(String symbol) {
        try {
            return AssetSymbol.valueOf(symbol.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid asset symbol: " + symbol);
        }
    }
}