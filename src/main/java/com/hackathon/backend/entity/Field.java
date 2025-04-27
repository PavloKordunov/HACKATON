package com.hackathon.backend.entity;

import com.hackathon.backend.customEnum.PlantCulture;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Field {
    @Id
    private String id;

    @Column
    private String area;

    @Column
    private PlantCulture plantCulture;

    @Column
    private String earn;

    @ManyToOne
    @JoinColumn(name = "farmer_id")
    private Farmer farmer;
}
