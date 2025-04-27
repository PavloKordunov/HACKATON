package com.hackathon.backend.repository;

import com.hackathon.backend.entity.Farmer;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;
import java.util.UUID;

public interface FarmerRepository extends JpaRepository<Farmer, UUID> {
    Optional<Farmer> findByEmail(@NotBlank String email);
}
