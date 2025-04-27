package com.hackathon.backend.repository;

import com.hackathon.backend.entity.Investor;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface InvestorRepository extends JpaRepository<Investor, UUID> {
    Optional<Investor> findByEmail(@NotBlank String email);
}
