package com.nocountry.quo.model.ExchangerateApi;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.nocountry.quo.model.Enums.LocalCurrency;

import java.io.IOException;

import java.util.EnumMap;
import java.util.Iterator;
import java.util.Map;

public class LocalCurrencyDeserializer extends JsonDeserializer<Map<LocalCurrency, Double>> {

    @Override
    public Map<LocalCurrency, Double> deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        JsonNode node = p.getCodec().readTree(p);
        Map<LocalCurrency, Double> conversionRates = new EnumMap<>(LocalCurrency.class);

        Iterator<Map.Entry<String, JsonNode>> fields = node.fields();
        while (fields.hasNext()) {
            Map.Entry<String, JsonNode> entry = fields.next();
            try {
                LocalCurrency currency = LocalCurrency.valueOf(entry.getKey()); // Intenta convertir la clave a Enum
                conversionRates.put(currency, entry.getValue().asDouble());
            } catch (IllegalArgumentException e) {
                // Si la clave no es parte del Enum, la ignoramos
            }
        }
        return conversionRates;
    }
    
}
