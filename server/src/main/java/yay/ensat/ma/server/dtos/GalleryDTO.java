package yay.ensat.ma.server.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GalleryDTO {
    private Long id;
    private String name;
    // we can do also ClubDTO but yassine want only the club_id,
    // so we need to create a mapper for that !!!!!!
    private Long clubId;
    private List<ActivityDTO> activities = new ArrayList<>() ;
}
