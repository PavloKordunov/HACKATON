package com.hackathon.backend.service;

import com.hackathon.backend.dto.FarmerDto;
import jakarta.validation.Valid;

import java.util.UUID;

public interface FarmerService {
    UUID createFarmer(@Valid FarmerDto dto);

    FarmerDto getById(UUID id);
}
