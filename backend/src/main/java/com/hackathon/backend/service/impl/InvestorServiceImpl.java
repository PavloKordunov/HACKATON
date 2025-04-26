package com.hackathon.backend.service.impl;

import com.hackathon.backend.dto.InvestorDto;
import com.hackathon.backend.entity.Investor;
import com.hackathon.backend.repository.InvestorRepository;
import com.hackathon.backend.service.InvestorService;
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
@Transactional
@Slf4j
@RequiredArgsConstructor
public class InvestorServiceImpl implements InvestorService {

    private final InvestorRepository investorRepository;
    private final JwtService jwtService;

    @Override
    public Map<String, Object> createInvestor(InvestorDto dto) {
        log.info("Create investor in InvestorService");

        Investor investor = getInvestor(dto);
        Investor entity = investorRepository.save(investor);

        return getStringObjectMap(entity);
    }

    @Override
    public InvestorDto getById(UUID id) {
        log.info("Get investor by ID in InvestorService");

        Investor investor = investorRepository.findById(id).orElseThrow(
                ()-> new EntityNotFoundException("Investor not found"));
        return mapToInvestorDto(investor);
    }

    private Investor getInvestor(InvestorDto dto) {
        Investor investor;
        if (dto.password() != null) {
            String password = BCrypt.hashpw(dto.password(), BCrypt.gensalt());
            investor = mapToInvestor(dto, password);
        } else {
            investor = mapToInvestor(dto, null);
        }
        return investor;
    }

    private static Investor mapToInvestor(InvestorDto dto, String password) {
        return Investor.builder()
                .name(dto.name())
                .email(dto.email())
                .image(dto.image())
                .password(password)
                .build();
    }

    public static InvestorDto mapToInvestorDto(Investor investor) {
        return InvestorDto.builder()
                .email(investor.getEmail())
                .image(investor.getImage())
                .name(investor.getName())
                .build();
    }

    private Map<String, Object> getStringObjectMap(Investor investor) {
        String jwt = jwtService.generateToken(investor.getEmail(), investor.getName());
        InvestorDto investorMapDto = mapToInvestorDto(investor);
        Map<String, Object> map = new HashMap<>();
        map.put("token", jwt);
        map.put("user", investorMapDto);
        return map;
    }
}
