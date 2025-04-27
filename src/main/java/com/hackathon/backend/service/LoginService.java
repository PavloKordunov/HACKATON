package com.hackathon.backend.service;

import com.hackathon.backend.dto.LoginDto;
import org.apache.coyote.BadRequestException;

import java.util.Map;

public interface LoginService {
    Map<String, Object> getUserByEmailAndPassword(LoginDto loginDto) throws BadRequestException;
    Map<String, Object> getUserByEmail(LoginDto email);
}
