package yay.ensat.ma.server.services.Interfaces;

import org.springframework.stereotype.Service;
import yay.ensat.ma.server.dtos.ActivityDTO;

import java.util.List;

@Service
public interface ActivityService {
    ActivityDTO saveActivity(ActivityDTO activityDTO, String imageUrl);
    List<ActivityDTO> getActivitiesOfClub(Long club_id);

    List<ActivityDTO> displayActivitiesForGuests();
}
