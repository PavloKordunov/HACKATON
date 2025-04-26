package com.hackathon.backend.service;

public interface JwtService {
    String generateToken(String email, String username);
}
