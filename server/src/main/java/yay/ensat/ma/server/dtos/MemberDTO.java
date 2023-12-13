package yay.ensat.ma.server.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class MemberDTO {
    private Long id;
    private String name;
    private String role;
    private ClubDTO club;
}
