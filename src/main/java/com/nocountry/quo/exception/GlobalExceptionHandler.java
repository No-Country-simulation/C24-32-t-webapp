package com.nocountry.quo.exception;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.persistence.EntityNotFoundException;

@RestControllerAdvice // Indica que esta clase manejará excepciones globalmente
public class GlobalExceptionHandler {

    /**
     * Este método maneja excepciones de validación de los argumentos en el cuerpo de la solicitud.
     * Se activa cuando una solicitud contiene datos inválidos (como parámetros faltantes o incorrectos) en el cuerpo.
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<List<ErrorDataRecord>> error400(MethodArgumentNotValidException e) {
        // Convierte los errores de los campos en una lista de objetos ErrorDataRecord
        var errores = e.getFieldErrors().stream()
                .map(ErrorDataRecord::new)  // Mapea cada FieldError a un ErrorDataRecord
                .toList();

        // Retorna una respuesta 400 (Bad Request) con los errores de validación
        return ResponseEntity.badRequest().body(errores);
    }

    /**
     * Este método maneja excepciones de tipo IllegalArgumentException.
     * para los parámetros de la solicitud que no son válidos de alguna manera.
     */
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> illegalArgument(IllegalArgumentException e) {
        // Retorna una respuesta 400 (Bad Request) con el mensaje de error
        return ResponseEntity.badRequest().body(e.getMessage());
    }

    /**
     * Este método maneja excepciones de validación personalizadas.
     * respuesta con el mensaje de error.
     */
    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<String> validationError(ValidationException e) {
        // Retorna una respuesta 400 (Bad Request) con el mensaje de error
        return ResponseEntity.badRequest().body(e.getMessage());
    }

    /**
     * Este método maneja excepciones donde una entidad no se encuentra en la base de datos.
     * respuesta con el mensaje de error y un código de estado 400.
     */
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<String> entityNotFound(EntityNotFoundException e) {
        // Retorna una respuesta 400 (Bad Request) con el mensaje de error
        return ResponseEntity.badRequest().body(e.getMessage());
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<String> handleAccessDeniedException(AccessDeniedException ex) {
        return new ResponseEntity<>("Access Denied: " + ex.getMessage(), HttpStatus.FORBIDDEN);
    }

    /**
     * Esta clase interna se usa para representar los errores de validación de los campos.
     * Cada error contiene el nombre del campo y el mensaje de error asociado.
     */
    private record ErrorDataRecord(String field, String error) {
        // Constructor que convierte un FieldError en un ErrorDataRecord
        public ErrorDataRecord(FieldError error) {
            this(error.getField(), error.getDefaultMessage());
        }
    }
}
