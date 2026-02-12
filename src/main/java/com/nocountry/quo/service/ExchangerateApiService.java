package com.nocountry.quo.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nocountry.quo.model.ExchangerateApi.RatesRespondDto;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ExchangerateApiService {
    
    final private String apiKey = "6ff65b8afcdc60c8d1d22737";
    final private String apiUrl = "https://v6.exchangerate-api.com/v6/%s/latest/USD";

    private final RestTemplate restTemplate;

    public ResponseEntity<RatesRespondDto> getExchangeRate() {

        String finalUrl = String.format(apiUrl, apiKey);

        ResponseEntity<RatesRespondDto> response = restTemplate.getForEntity(finalUrl, RatesRespondDto.class);
        return response;
    }

}