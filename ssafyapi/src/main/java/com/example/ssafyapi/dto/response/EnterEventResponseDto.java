package com.example.ssafyapi.dto.response;

import com.example.ssafyapi.dto.ResponseDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
@Setter
public class EnterEventResponseDto extends ResponseDto {
    private String eventName;

    EnterEventResponseDto(String eventName){
        super();
        this.eventName = eventName;
    }
    public static ResponseEntity<? super EnterEventResponseDto> success(String eventName){
        EnterEventResponseDto responseBody = new EnterEventResponseDto(eventName);
        return ResponseEntity.ok(responseBody);
    }


    public static ResponseEntity<? super EnterEventResponseDto> eventNotFound(){
        EnterEventResponseDto responseBody = new EnterEventResponseDto("");
        responseBody.setMessage("존재하지 않는 이벤트 입니다.");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseBody);
    }
}
