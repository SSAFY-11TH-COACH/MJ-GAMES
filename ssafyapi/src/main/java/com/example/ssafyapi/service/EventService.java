package com.example.ssafyapi.service;

import com.example.ssafyapi.dto.request.CreateEventRequestDto;
import com.example.ssafyapi.dto.request.EnterEventRequestDto;
import com.example.ssafyapi.dto.request.GetEventResultsRequestDto;
import com.example.ssafyapi.dto.request.PostEventResultRequestDto;
import com.example.ssafyapi.dto.response.CreateEventResponseDto;
import com.example.ssafyapi.dto.response.EnterEventResponseDto;
import com.example.ssafyapi.dto.response.GetEventResultsResponseDto;
import com.example.ssafyapi.dto.response.PostEventResultResponseDto;
import org.springframework.http.ResponseEntity;

public interface EventService {
    ResponseEntity<? super CreateEventResponseDto> createEvent(CreateEventRequestDto dto);
    ResponseEntity<? super EnterEventResponseDto> enterEvent(EnterEventRequestDto dto);
    ResponseEntity<? super GetEventResultsResponseDto> getEventResults(GetEventResultsRequestDto dto);
    ResponseEntity<? super PostEventResultResponseDto> postEventResult(PostEventResultRequestDto dto);
}
