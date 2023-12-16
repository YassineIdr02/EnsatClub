package yay.ensat.ma.server.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data @NoArgsConstructor @AllArgsConstructor
public class ClubDTO {
    private Long id;
    private String name;
    private String description;
    private Date createdAt;
    // i should add the logo of each club
    private MemberDTO president;//we need a method to associate a president to a club !!!
}
