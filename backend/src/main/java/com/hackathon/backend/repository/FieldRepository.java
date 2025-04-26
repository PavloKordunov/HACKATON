package com.hackathon.backend.repository;

import com.hackathon.backend.customEnum.PlantCulture;
import com.hackathon.backend.entity.Field;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FieldRepository extends JpaRepository<Field, String> {
    List<Field> findAllByPlantCulture(PlantCulture plantCulture);
}
