package com.example.ssafyapi.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class PostEventResultRequestDto {
    private String teamName;
    private String enterCode;
    private LocalDateTime gameEndTime;
}
