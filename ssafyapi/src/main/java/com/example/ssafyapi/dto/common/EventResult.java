package com.example.ssafyapi.dto.common;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class EventResult {
    private String teamName;
    private LocalDateTime createdAt;
}
