package com.hackathon.backend.service;

import com.hackathon.backend.dto.InvestorDto;
import jakarta.validation.Valid;

import java.util.Map;
import java.util.UUID;

public interface InvestorService {
    Map<String, Object> createInvestor(@Valid InvestorDto dto);

    InvestorDto getById(UUID id);
}
