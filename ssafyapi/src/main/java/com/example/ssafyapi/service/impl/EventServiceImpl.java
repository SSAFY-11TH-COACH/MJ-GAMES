package com.example.ssafyapi.service.impl;

import com.example.ssafyapi.dto.common.EventResult;
import com.example.ssafyapi.dto.request.CreateEventRequestDto;
import com.example.ssafyapi.dto.request.EnterEventRequestDto;
import com.example.ssafyapi.dto.request.GetEventResultsRequestDto;
import com.example.ssafyapi.dto.request.PostEventResultRequestDto;
import com.example.ssafyapi.dto.response.CreateEventResponseDto;
import com.example.ssafyapi.dto.response.EnterEventResponseDto;
import com.example.ssafyapi.dto.response.GetEventResultsResponseDto;
import com.example.ssafyapi.dto.response.PostEventResultResponseDto;
import com.example.ssafyapi.entity.EventEntity;
import com.example.ssafyapi.entity.EventResultEntity;
import com.example.ssafyapi.repository.EventRepo;
import com.example.ssafyapi.repository.EventResultRepo;
import com.example.ssafyapi.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {

    private final EventRepo eventRepo;
    private final EventResultRepo eventResultRepo;

    @Override
    public ResponseEntity<? super CreateEventResponseDto> createEvent(CreateEventRequestDto dto) {
        UUID uuid = UUID.randomUUID();
        final String STR_UUID = uuid.toString();
        try{


            EventEntity newEventEntity = new EventEntity();
            newEventEntity.setEventId(STR_UUID);
            newEventEntity.setEventName(dto.getEventName());
            newEventEntity.setStartTime(dto.getStartTime());

            eventRepo.save(newEventEntity);
        }
        catch (Exception exception){
            exception.printStackTrace();
            return CreateEventResponseDto.databaseError();
        }
        return CreateEventResponseDto.success(STR_UUID);
    }

    @Override
    public ResponseEntity<? super EnterEventResponseDto> enterEvent(EnterEventRequestDto dto) {
        try{
            boolean exists = eventRepo.existsById(dto.getEnterCode());

            if(!exists) return EnterEventResponseDto.eventNotFound();

        }
        catch (Exception exception){
            exception.printStackTrace();
            return EnterEventResponseDto.databaseError();
        }

        return EnterEventResponseDto.success();
    }

    @Override
    public ResponseEntity<? super GetEventResultsResponseDto> getEventResults(GetEventResultsRequestDto dto) {
        List<EventResult> results = new ArrayList<>();
        try{
            Optional<EventEntity> event = eventRepo.findById(dto.getEnterCode());

            if(event.isEmpty()) return GetEventResultsResponseDto.eventNotFound();

            List<EventResultEntity> eventResults =  eventResultRepo.findByEventOrderByCreatedAtAsc(event.get());
            eventResults.stream().forEach((entity) -> {
                EventResult newEventResult = new EventResult();
                newEventResult.setTeamName(entity.getTeamName());
                newEventResult.setCreatedAt(entity.getCreatedAt());
                results.add(newEventResult);
            });
        }
        catch(Exception exception){
            exception.printStackTrace();
            return GetEventResultsResponseDto.databaseError();
        }

        return GetEventResultsResponseDto.success(results);
    }

    @Override
    public ResponseEntity<? super PostEventResultResponseDto> postEventResult(PostEventResultRequestDto dto) {
        try{
            Optional<EventEntity> event = eventRepo.findById(dto.getEnterCode());
            if(event.isEmpty()) return PostEventResultResponseDto.eventNotFound();
            EventResultEntity newEventResultEntity = new EventResultEntity();
            newEventResultEntity.setEvent(event.get());
            newEventResultEntity.setTeamName(dto.getTeamName());

            eventResultRepo.save(newEventResultEntity);

        }
        catch (Exception exception){
            exception.printStackTrace();
            return PostEventResultResponseDto.databaseError();
        }

        return PostEventResultResponseDto.success();
    }
}
