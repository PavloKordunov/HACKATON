package com.hackathon.backend.dto;

import lombok.Builder;

import java.util.UUID;

@Builder
public record InvestorDto(
        UUID id,
        String name,
        String email,
        String image,
        String password
) {
}
