package com.hackathon.backend.controller;

import com.hackathon.backend.dto.ApiResponse;
import com.hackathon.backend.dto.InvestorDto;
import com.hackathon.backend.service.InvestorService;
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
@RequestMapping("/api/investor")
public class InvestorController {
    private final InvestorService investorService;

    @PostMapping("/new")
    public ApiResponse<Map<String, Object>> createInvestor(@Valid @RequestBody InvestorDto dto) {
        Map<String, Object> jwt = investorService.createInvestor(dto);
        return new ApiResponse<>(true, HttpStatus.CREATED, "Successful create investor", jwt);
    }

    @GetMapping("/id/{id}")
    public ApiResponse<InvestorDto> getById(@PathVariable UUID id) {
        InvestorDto dto = investorService.getById(id);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get by ID investor", dto);
    }
}
