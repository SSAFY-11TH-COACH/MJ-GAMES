package com.example.ssafyapi.dto.response;

import com.example.ssafyapi.dto.ResponseDto;
import com.example.ssafyapi.dto.common.EventResult;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Getter
@Setter
public class GetEventResultsResponseDto extends ResponseDto {
    private List<EventResult> eventResults;

    GetEventResultsResponseDto(List<EventResult> eventResults){
        super();
        this.eventResults = eventResults;
    }

    public static ResponseEntity<? super GetEventResultsResponseDto> success(List<EventResult> eventResults){
        GetEventResultsResponseDto responseBody = new GetEventResultsResponseDto(eventResults);
        return ResponseEntity.ok(responseBody);
    }

    public static ResponseEntity<? super GetEventResultsResponseDto> eventNotFound(){
        GetEventResultsResponseDto responseBody = new GetEventResultsResponseDto(null);
        responseBody.setMessage("존재하지 않는 이벤트 입니다.");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseBody);
    }

}
