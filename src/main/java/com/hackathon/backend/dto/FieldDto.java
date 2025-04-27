package com.hackathon.backend.dto;

import com.hackathon.backend.customEnum.PlantCulture;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record FieldDto(
        @NotBlank String id,
        String area,
        String earn,
        PlantCulture culture
) {
}
