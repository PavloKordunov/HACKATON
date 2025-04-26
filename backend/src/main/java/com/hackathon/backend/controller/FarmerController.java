package com.hackathon.backend.controller;

import com.hackathon.backend.dto.ApiResponse;
import com.hackathon.backend.dto.FarmerDto;
import com.hackathon.backend.dto.GenericResponse;
import com.hackathon.backend.service.FarmerService;
import com.hackathon.backend.service.FieldService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/farmer")
public class FarmerController {

    private final FarmerService farmerService;

    @PostMapping("/new")
    public ApiResponse<Map<String, Object>> createFarmer(@Valid @RequestBody FarmerDto dto){
        Map<String, Object> jwt = farmerService.createFarmer(dto);
        return new ApiResponse<>(true, HttpStatus.CREATED, "Successful create farmer", jwt);
    }

    @GetMapping("/id/{id}")
    public ApiResponse<FarmerDto> getById(@PathVariable UUID id){
        FarmerDto dto = farmerService.getById(id);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get by ID farmer", dto);
    }
}
