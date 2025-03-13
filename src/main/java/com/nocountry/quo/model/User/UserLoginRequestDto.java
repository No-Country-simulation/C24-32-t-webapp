package com.nocountry.quo.model.User;

import jakarta.validation.constraints.NotNull;

public record UserLoginRequestDto(
    @NotNull
    String username,
    @NotNull 
    String password) {
    
}