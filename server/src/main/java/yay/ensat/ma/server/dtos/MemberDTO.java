package yay.ensat.ma.server.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class MemberDTO {
    private Long id;
    private String name;
    private String role;
    private String email;
    private Long club_id;
    // i should add the avatar of each member,
    // we can also do a default
}
