package com.hackathon.backend.service;

import com.hackathon.backend.customEnum.PlantCulture;
import com.hackathon.backend.dto.FieldDto;

import java.util.List;

public interface FieldService {

    void createFields(List<FieldDto> fieldDtos);

    List<FieldDto> getByCulture(PlantCulture culture);

    FieldDto getById(String id);
}
