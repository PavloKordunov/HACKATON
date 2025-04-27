package com.hackathon.backend.service;

import com.hackathon.backend.dto.FarmerDto;
import jakarta.validation.Valid;

import java.util.Map;
import java.util.UUID;

public interface FarmerService {
    Map<String, Object> createFarmer(@Valid FarmerDto dto);

    FarmerDto getById(UUID id);
}
