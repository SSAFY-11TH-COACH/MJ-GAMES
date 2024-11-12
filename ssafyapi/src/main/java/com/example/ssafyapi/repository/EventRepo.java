package com.example.ssafyapi.repository;

import com.example.ssafyapi.entity.EventEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepo extends JpaRepository<EventEntity, String> {
}
