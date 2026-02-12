package com.nocountry.quo.service;

import com.nocountry.quo.model.User.User;
import com.nocountry.quo.model.User.UserResponseDto;
import com.nocountry.quo.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

import java.util.Optional;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserResponseDto read(Long id, UserDetails userDetails) {
        Long userId = ((User) userDetails).getId();

        // Validar si el usuario que hace la solicitud es el mismo que el del ID proporcionado
        if (id != userId) {
            throw new AccessDeniedException("Unauthorized.");
        }

        Optional<User> userOptional = userRepository.findById(id);

        // Comprobar si el usuario existe en la base de datos
        if (userOptional.isEmpty()) {
            throw new EntityNotFoundException("User with ID=" + id + " not found.");
        }

        User user = userOptional.get();
        return new UserResponseDto(user);  // Retornar el DTO con los datos del usuario
    }


    // Método para actualizar el nombre y teléfono del usuario
    @Transactional
    public User updateUserInfo(Long userId, String username, String phone) {
        // Buscar al usuario en la base de datos
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Actualizar los campos de nombre y teléfono
        user.setUsername(username);
        user.setPhone(phone);

        // Guardar los cambios en la base de datos
        return userRepository.save(user);
    }

    // Método para actualizar el avatar del usuario
    @Transactional
    public User updateAvatar(Long userId, String avatar) {
        // Buscar al usuario en la base de datos
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Actualizar el campo del avatar
        user.setAvatar(avatar);

        // Guardar los cambios en la base de datos
        return userRepository.save(user);
    }

    // Método para eliminar la cuenta del usuario
    @Transactional
    public void deleteAccount(Long userId) {
        // Buscar al usuario en la base de datos
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Eliminar el usuario de la base de datos
        userRepository.delete(user);
    }
}
