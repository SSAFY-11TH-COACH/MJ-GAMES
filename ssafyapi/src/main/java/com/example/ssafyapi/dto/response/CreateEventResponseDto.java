package com.example.ssafyapi.dto.response;

import com.example.ssafyapi.dto.ResponseDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.ResponseEntity;

@Getter
@Setter
public class CreateEventResponseDto extends ResponseDto {
    private String enterCode;

    CreateEventResponseDto(String enterCode){
        super();
        this.enterCode = enterCode;
    }

    public static ResponseEntity<? super CreateEventResponseDto> success(String enterCode){
        CreateEventResponseDto responseBody = new CreateEventResponseDto(enterCode);
        return ResponseEntity.ok(responseBody);
    }

}
