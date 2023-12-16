package yay.ensat.ma.server.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActivityDTO {
    private Long id;
    private String photo; // url
    private String description;
    private String type;
    private String content;
    private Date createdAt;
    private Long club_id;
    private Long gallery_id;
    private String clubName;
}