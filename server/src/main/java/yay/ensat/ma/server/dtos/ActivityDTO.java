package yay.ensat.ma.server.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActivityDTO {
    private Long id;
    private String photo; // url
    private String description;
    private String type;
    private String content;
    private String createdAt;
    private String club_id;
}