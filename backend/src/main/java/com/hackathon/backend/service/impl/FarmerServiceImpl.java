package com.hackathon.backend.service.impl;

import com.hackathon.backend.dto.FarmerDto;
import com.hackathon.backend.entity.Farmer;
import com.hackathon.backend.repository.FarmerRepository;
import com.hackathon.backend.service.FarmerService;
import com.hackathon.backend.service.JwtService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class FarmerServiceImpl implements FarmerService {
    private final FarmerRepository farmerRepository;
    private final JwtService jwtService;

    @Override
    public Map<String, Object> createFarmer(FarmerDto dto) {
        log.info("Create farmer in FarmerService");

        Farmer farmer = getFarmer(dto);
        Farmer entity = farmerRepository.save(farmer);

        return getStringObjectMap(entity);
    }

    @Override
    public FarmerDto getById(UUID id) {
        log.info("Get farmer by ID in FarmerService");

        Farmer farmer = farmerRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Farmer not found"));

        return mapToFarmerDto(farmer);
    }

    private Farmer getFarmer(FarmerDto dto) {
        Farmer farmer;
        if (dto.password() != null) {
            String password = BCrypt.hashpw(dto.password(), BCrypt.gensalt());
            farmer = mapToFarmer(dto, password);
        } else {
            farmer = mapToFarmer(dto, null);
        }
        return farmer;
    }

    private static Farmer mapToFarmer(FarmerDto dto, String password) {
        return Farmer.builder()
                .email(dto.email())
                .name(dto.name())
                .image(dto.image())
                .password(password)
                .build();
    }

    public static FarmerDto mapToFarmerDto(Farmer farmer) {
        return FarmerDto.builder()
                .email(farmer.getEmail())
                .image(farmer.getImage())
                .name(farmer.getName())
                .build();
    }

    private Map<String, Object> getStringObjectMap(Farmer farmer) {
        String jwt = jwtService.generateToken(farmer.getEmail(), farmer.getName());
        FarmerDto farmerDto = mapToFarmerDto(farmer);
        Map<String, Object> map = new HashMap<>();
        map.put("token", jwt);
        map.put("user", farmerDto);
        return map;
    }
}
