package com.example.ssafyapi.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class CreateEventRequestDto {

    private String eventName;
    private LocalDateTime startTime;

}
