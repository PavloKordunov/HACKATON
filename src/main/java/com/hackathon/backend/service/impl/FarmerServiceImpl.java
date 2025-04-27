package com.hackathon.backend.service.impl;

import com.hackathon.backend.dto.FarmerDto;
import com.hackathon.backend.entity.Farmer;
import com.hackathon.backend.service.FarmerService;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class FarmerServiceImpl implements FarmerService {
    @Override
    public UUID createFarmer(FarmerDto dto) {
        return UUID.randomUUID();
    }

    @Override
    public FarmerDto getById(UUID id) {
        return null;
    }

    public static FarmerDto mapToFarmerDto(Farmer farmer){
        return FarmerDto.builder()
                .email(farmer.getEmail())
                .image(farmer.getImage())
                .name(farmer.getName())
                .build();
    }
}
