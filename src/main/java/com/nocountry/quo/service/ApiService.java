package com.nocountry.quo.service;

import lombok.*;

import java.io.IOException;
import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

import com.nocountry.quo.model.CoinGeckoApi.CoinsResponseDto;

import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class ApiService {
    // Si la API requiere alguna clave de API o configuración especial.
   // @Value("${api.ejemplo.url}") se comenta esta linea para que no se rompa el proyecto durante el desarrollo
   
    private final String coingeckoUrl = "https://api.coingecko.com/api/v3/coins/markets";

    private final RestTemplate restTemplate;

    public ResponseEntity<List<CoinsResponseDto>> getCryptoData() {
        
        List<String> customCryptos = Arrays.asList("binancecoin", "polkadot", "bitcoin", "ethereum", "litecoin", "solana", "cardano", "tether", "ripple", "dai");
        String ids = String.join(",", customCryptos);

        String params = "?vs_currency=usd&ids=" + ids + "&order=market_cap_desc&per_page=" 
                        + customCryptos.size() + "&page=1&sparkline=false";

        ResponseEntity<String> response = restTemplate.getForEntity(coingeckoUrl + params, String.class);

        ObjectMapper mapper = new ObjectMapper();
            try {
                List<CoinsResponseDto> coinsList = mapper.readValue(response.getBody(), new TypeReference<List<CoinsResponseDto>>() {});
                return ResponseEntity.ok(coinsList);
            } catch (IOException e) {
                throw new RuntimeException("Error al mapear JSON a coinsList", e);
        
        }
    
    /*
    // Método genérico para hacer una consulta a la API externa
    public String getCryptoData(String cryptoSymbol) {
        // Construye la URL de la API que necesitas consultar
        String url = String.format("%s/api/v3/ticker/price?symbol=%sUSDT", ejemploApiUrl, cryptoSymbol);

        // Realiza la consulta GET y obtiene la respuesta
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        // Retorna el cuerpo de la respuesta (en este caso, el precio de la criptomoneda)
        return response.getBody();
    } 
    */

    }
}