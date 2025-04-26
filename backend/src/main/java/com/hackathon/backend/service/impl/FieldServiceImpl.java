package com.hackathon.backend.service.impl;

import com.hackathon.backend.customEnum.PlantCulture;
import com.hackathon.backend.dto.FieldDto;
import com.hackathon.backend.entity.Field;
import com.hackathon.backend.repository.FieldRepository;
import com.hackathon.backend.service.FieldService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

import static org.hibernate.annotations.UuidGenerator.Style.RANDOM;

@Service
@RequiredArgsConstructor
@Transactional
public class FieldServiceImpl implements FieldService {

    private final FieldRepository fieldRepository;

    @Override
    public void createFields(List<FieldDto> fieldDtos) {
        int length = new Random().nextInt(PlantCulture.values().length);

        fieldDtos.forEach(fieldDto -> {
            Field field = getField(fieldDto, length);
            fieldRepository.save(field);
        });
    }

    @Override
    public List<FieldDto> getByCulture(PlantCulture culture) {
        List<Field> fields = fieldRepository.findAllByPlantCulture(culture);
        return fields.stream()
                .map(FieldServiceImpl::mapToFieldDto)
                .toList();
    }

    @Override
    public FieldDto getById(String id) {
        Field field = fieldRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Field not found"));
        return mapToFieldDto(field);
    }


    private static Field mapToField(FieldDto fieldDto) {
        return Field.builder()
                .id(fieldDto.id())
                .area(fieldDto.area())
                .build();
    }

    private static Field getField(FieldDto fieldDto, int length) {
        return Field.builder()
                .id(fieldDto.id())
                .area(fieldDto.area())
                .plantCulture(PlantCulture.values()[length])
                .build();
    }
    private static FieldDto mapToFieldDto(Field field) {
        return FieldDto.builder()
                .id(field.getId())
                .area(field.getArea())
                .earn(field.getEarn())
                .culture(field.getPlantCulture())
                .build();
    }
}
