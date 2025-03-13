package com.nocountry.quo.model.Enums;

public enum LocalCurrency {
    
    ARS("Argentina Peso"),
    BRL("Brazilian Real"),
    MXN("Mexican Peso"),
    COP("Colombian Peso");

    private final String name;

    LocalCurrency(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}