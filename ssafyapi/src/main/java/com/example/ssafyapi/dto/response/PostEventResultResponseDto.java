package com.example.ssafyapi.dto.response;

import com.example.ssafyapi.dto.ResponseDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
@Setter
public class PostEventResultResponseDto extends ResponseDto {

    public static ResponseEntity<? super PostEventResultResponseDto> eventNotFound(){
        PostEventResultResponseDto responseBody = new PostEventResultResponseDto();
        responseBody.setMessage("존재하지 않는 이벤트 입니다.");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseBody);
    }
}
