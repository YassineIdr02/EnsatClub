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
    private MemberDTO president;
}
