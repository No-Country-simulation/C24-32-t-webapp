package com.nocountry.quo.model.ExchangerateApi;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.nocountry.quo.model.Enums.LocalCurrency;

@JsonIgnoreProperties(ignoreUnknown = true)
public record RatesRespondDto(

    Long time_last_update_unix,

    @JsonDeserialize(using = LocalCurrencyDeserializer.class)
    Map<LocalCurrency, Double> conversion_rates
) {}