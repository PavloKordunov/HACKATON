package com.hackathon.backend.dto;

import lombok.Builder;

import java.util.UUID;
import java.util.List;

@Builder
public record FarmerDto(
    UUID id,
    String name,
    String email,
    String image,
    List<UUID> fields
) {
}
