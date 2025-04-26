package com.hackathon.backend.service.impl;

import com.hackathon.backend.dto.FarmerDto;
import com.hackathon.backend.dto.InvestorDto;
import com.hackathon.backend.dto.LoginDto;
import com.hackathon.backend.entity.Farmer;
import com.hackathon.backend.entity.Investor;
import com.hackathon.backend.repository.FarmerRepository;
import com.hackathon.backend.repository.InvestorRepository;
import com.hackathon.backend.service.JwtService;
import com.hackathon.backend.service.LoginService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.BadRequestException;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

import static com.hackathon.backend.service.impl.FarmerServiceImpl.mapToFarmerDto;
import static com.hackathon.backend.service.impl.InvestorServiceImpl.mapToInvestorDto;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class LoginServiceImpl implements LoginService {

    private final JwtService jwtService;

    private final FarmerRepository farmerRepository;
    private final InvestorRepository investorRepository;


    @Override
    public Map<String, Object> getUserByEmailAndPassword(LoginDto loginDto) throws BadRequestException {
        log.info("Get user by email&password in LoginService");

        if (loginDto.password() == null) throw new BadRequestException("Body hasn't password");

        Farmer farmer = farmerRepository.findByEmail(loginDto.email()).orElse(null);
        Investor investor = investorRepository.findByEmail(loginDto.email()).orElse(null);
        areBothEqualNull(farmer, investor);
        if(farmer != null){
            if(!BCrypt.checkpw(loginDto.password(), farmer.getPassword())) return null;
            return getStringObjectMapFarmer(farmer);
        }
        else{
            if(!BCrypt.checkpw(loginDto.password(), investor.getPassword())) return null;
            return getStringObjectMapInvestor(investor);
        }
    }

    @Override
    public Map<String, Object> getUserByEmail(LoginDto loginDto) {
        log.info("Get user by email in LoginService");

        Investor investor = investorRepository.findByEmail(loginDto.email()).orElse(null);
        Farmer farmer = farmerRepository.findByEmail(loginDto.email()).orElse(null);
        areBothEqualNull(farmer, investor);
        if(investor != null){
            return getStringObjectMapInvestor(investor);
        }
        else {
            return getStringObjectMapFarmer(farmer);
        }
    }

    private static void areBothEqualNull(Farmer farmer, Investor investor) {
        if (farmer == null && investor == null) throw new EntityNotFoundException("User not found");
    }

    private Map<String, Object> getStringObjectMapInvestor(Investor investor) {
        String jwt = jwtService.generateToken(investor.getEmail(), investor.getName());
        InvestorDto volunteerMapDto = mapToInvestorDto(investor);
        Map<String, Object> map = new HashMap<>();
        map.put("token", jwt);
        map.put("user", volunteerMapDto);
        return map;
    }

    private Map<String, Object> getStringObjectMapFarmer(Farmer farmer) {
        String jwt = jwtService.generateToken(farmer.getEmail(), farmer.getName());
        FarmerDto farmerDto = mapToFarmerDto(farmer);
        Map<String, Object> map = new HashMap<>();
        map.put("token", jwt);
        map.put("user", farmerDto);
        return map;
    }
}
