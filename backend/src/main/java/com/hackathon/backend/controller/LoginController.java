package com.hackathon.backend.controller;

import com.hackathon.backend.dto.ApiResponse;
import com.hackathon.backend.dto.LoginDto;
import com.hackathon.backend.service.LoginService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/login")
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/native")
    public ApiResponse<Map<String, Object>> getUser(@Valid @RequestBody LoginDto loginDto) throws BadRequestException {
        Map<String, Object> user = loginService.getUserByEmailAndPassword(loginDto);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get user by native", user);
    }

    @PostMapping("/oauth")
    public ApiResponse<Map<String, Object>> getUserByEmail(@Valid @RequestBody LoginDto dto){
        Map<String, Object> user = loginService.getUserByEmail(dto);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get user by API", user);
    }
}
