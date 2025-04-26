package com.hackathon.backend.controller;

import com.hackathon.backend.customEnum.PlantCulture;
import com.hackathon.backend.dto.ApiResponse;
import com.hackathon.backend.dto.FieldDto;
import com.hackathon.backend.dto.GenericResponse;
import com.hackathon.backend.service.FieldService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/field")
public class FieldController {
    private final FieldService fieldService;

    @PostMapping("/create")
    public ApiResponse<GenericResponse> createFields(@RequestBody List<FieldDto> fieldDtos){
        fieldService.createFields(fieldDtos);
        return new ApiResponse<>(true, HttpStatus.OK, "Fields create successfully",null);
    }

    @GetMapping("/culture/{culture}")
    public ApiResponse<List<FieldDto>> getByCulture(@PathVariable PlantCulture culture){
        List<FieldDto> fieldDtos = fieldService.getByCulture(culture);
        return new ApiResponse<>(true, HttpStatus.OK, "Fields get successfully", fieldDtos);
    }

    @GetMapping("/id/{id}")
    public ApiResponse<FieldDto> getById(@PathVariable String id){
        FieldDto fieldDtos = fieldService.getById(id);
        return new ApiResponse<>(true, HttpStatus.OK, "Fields get successfully", fieldDtos);
    }
}
