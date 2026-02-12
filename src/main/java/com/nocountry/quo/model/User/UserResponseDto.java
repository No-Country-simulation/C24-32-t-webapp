package com.nocountry.quo.model.User;

public record UserResponseDto (
        String username,
        String mail,
        String phone,
        String avatar
) {
    // Constructor que inicializa los campos a partir de un objeto User
    public UserResponseDto(User user) {
        this(user.getUsername(), user.getMail(), user.getPhone(), user.getAvatar());
    }
}
