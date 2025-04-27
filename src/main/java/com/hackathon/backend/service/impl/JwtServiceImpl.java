package com.hackathon.backend.service.impl;

import com.hackathon.backend.service.JwtService;
import com.hackathon.backend.util.JwtUtil;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtServiceImpl implements JwtService {
    private final JwtUtil jwtUtil;

    @Override
    public String generateToken(@NotBlank String email, @NotBlank String username) {
        return jwtUtil.generateToken(email, username);
    }
}
