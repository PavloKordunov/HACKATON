package com.hackathon.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record LoginDto(
        @NotBlank String email,
        String password
) {
}
