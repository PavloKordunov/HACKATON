package com.hackathon.backend.service.impl;

import com.hackathon.backend.dto.InvestorDto;
import com.hackathon.backend.entity.Investor;
import com.hackathon.backend.service.InvestorService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class InvestorServiceImpl implements InvestorService {
    public static InvestorDto mapToInvestorDto(Investor investor){
        return InvestorDto.builder()
                .email(investor.getEmail())
                .image(investor.getImage())
                .name(investor.getName())
                .build();
    }
}
