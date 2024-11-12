package com.example.ssafyapi.repository;

import com.example.ssafyapi.entity.EventEntity;
import com.example.ssafyapi.entity.EventResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventResultRepo extends JpaRepository<EventResultEntity, Long> {
    List<EventResultEntity> findByEventOrderByCreatedAtAsc(EventEntity event);
}
