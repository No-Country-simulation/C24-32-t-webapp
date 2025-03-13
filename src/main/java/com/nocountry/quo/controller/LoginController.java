package com.nocountry.quo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import com.nocountry.quo.model.User.User;
import com.nocountry.quo.model.User.UserLoginRequestDto;
import com.nocountry.quo.security.JWTTokenDto;
import com.nocountry.quo.security.JWTTokenService;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/login")
@AllArgsConstructor
public class LoginController {
    
    private final AuthenticationManager authenticationManager;
    private final JWTTokenService tokenService;

    @PostMapping
    public ResponseEntity<JWTTokenDto> autenticarUsuario(@RequestBody @Valid UserLoginRequestDto request) {
        System.out.println("REQUEST=" + request);
        try {
            Authentication authToken = new UsernamePasswordAuthenticationToken(request.username(), request.password());
            System.out.println("authToken=" + authToken);
            var usuarioAutenticado = authenticationManager.authenticate(authToken);
            System.out.println("usuarioAutenticado=" + usuarioAutenticado);
            var JWTtoken = tokenService.createToken((User) usuarioAutenticado.getPrincipal());
            System.out.println("TOKEN=" + JWTtoken);
            return ResponseEntity.ok(new JWTTokenDto(JWTtoken));
        } catch (AuthenticationException e) {
            System.out.println("Authentication failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}