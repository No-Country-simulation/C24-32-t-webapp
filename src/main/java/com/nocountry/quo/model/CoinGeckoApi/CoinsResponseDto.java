package com.nocountry.quo.model.CoinGeckoApi;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public record CoinsResponseDto(
    String id,
    String symbol,
    String name,
    @JsonProperty("current_price") Double currentPrice,
    @JsonProperty("price_change_24h") Double priceChange24h,
    @JsonProperty("price_change_percentage_24h") Double priceChangePercentage24h,
    Double ath,
    @JsonProperty("last_updated") String lastUpdated
) {}