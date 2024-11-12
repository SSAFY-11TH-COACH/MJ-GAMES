package com.example.ssafyapi.controller;


import com.example.ssafyapi.dto.request.CreateEventRequestDto;
import com.example.ssafyapi.dto.request.EnterEventRequestDto;
import com.example.ssafyapi.dto.request.GetEventResultsRequestDto;
import com.example.ssafyapi.dto.request.PostEventResultRequestDto;
import com.example.ssafyapi.dto.response.CreateEventResponseDto;
import com.example.ssafyapi.dto.response.EnterEventResponseDto;
import com.example.ssafyapi.dto.response.GetEventResultsResponseDto;
import com.example.ssafyapi.dto.response.PostEventResultResponseDto;
import com.example.ssafyapi.service.EventService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/event")
@RequiredArgsConstructor
public class EventController {

    private final EventService eventService;

    @PostMapping("")
    public ResponseEntity<? super CreateEventResponseDto> createEvent(@RequestBody @Valid CreateEventRequestDto requestBody){
        return eventService.createEvent(requestBody);
    }

    @GetMapping("/results/{code}")
    public ResponseEntity<? super GetEventResultsResponseDto> getEventResults(@PathVariable String code){
        GetEventResultsRequestDto requestBody = new GetEventResultsRequestDto();
        requestBody.setEnterCode(code);
        return eventService.getEventResults(requestBody);
    }

    @PostMapping("/enter")
    public ResponseEntity<? super EnterEventResponseDto> enterEvent(@RequestBody EnterEventRequestDto requestBody){
        return eventService.enterEvent(requestBody);
    }

    @PostMapping("/result")
    public ResponseEntity<? super PostEventResultResponseDto> postEventResult(@RequestBody PostEventResultRequestDto requestBody){
        return eventService.postEventResult(requestBody);
    }

}
