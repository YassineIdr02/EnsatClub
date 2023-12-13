package yay.ensat.ma.server.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import yay.ensat.ma.ensatclub.entities.Activity;

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
    private List<Activity> activities;
}
