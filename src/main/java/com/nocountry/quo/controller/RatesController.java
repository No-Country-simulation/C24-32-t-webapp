package com.nocountry.quo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

import com.nocountry.quo.model.ExchangerateApi.RatesRespondDto;
import com.nocountry.quo.service.ExchangerateApiService;

@RestController
@RequestMapping("/rates")
@AllArgsConstructor
public class RatesController {
    
    private final ExchangerateApiService exchangerateApiService;

    @GetMapping("")
    public ResponseEntity<RatesRespondDto> get() {
        return exchangerateApiService.getExchangeRate();
    }
    
}