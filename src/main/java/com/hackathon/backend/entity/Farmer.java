package com.hackathon.backend.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Farmer {
    @Id
    @GeneratedValue
    private UUID id;

    @Column
    private String name;

    @Column(nullable = false)
    private String email;

    @Column
    private String password;

    @Column
    private Boolean isActive;

    @Lob
    private String image;

    @OneToMany(mappedBy = "farmer", orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Field> field;
}
