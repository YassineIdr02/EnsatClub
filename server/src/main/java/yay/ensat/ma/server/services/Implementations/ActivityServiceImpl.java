package yay.ensat.ma.server.services.Implementations;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import yay.ensat.ma.server.dtos.ActivityDTO;
import yay.ensat.ma.server.mappers.ActivityMapper;
import yay.ensat.ma.server.models.Activity;
import yay.ensat.ma.server.models.Club;
import yay.ensat.ma.server.repositories.ActivityRepository;
import yay.ensat.ma.server.repositories.ClubRepository;
import yay.ensat.ma.server.services.Interfaces.ActivityService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ActivityServiceImpl implements ActivityService {
    private ActivityRepository activityRepository;
    private ActivityMapper activityMapper;
    private ClubRepository clubRepository;


    public ActivityServiceImpl(ActivityRepository activityRepository, ActivityMapper activityMapper, ClubRepository clubRepository) {
        this.activityRepository = activityRepository;
        this.activityMapper = activityMapper;
        this.clubRepository = clubRepository;
    }

    @Override
    public ActivityDTO saveActivity(ActivityDTO activityDTO, String imageUrl){
        Activity activity = activityMapper.fromActivityDTO(activityDTO,imageUrl);
        Activity savedActivity = activityRepository.save(activity);
        return activityMapper.fromActivity(savedActivity);

    }

    @Override
    public List<ActivityDTO> getActivitiesOfClub(Long club_Id) {
        Club club = clubRepository.findById(club_Id).orElseThrow(()->new RuntimeException("Club Not Found"));
          List<Activity> activities = activityRepository.findByClubId(club.getId());
          for(Activity activ : activities){
              if (activ.getPhoto()!= null)
              activ.setPhoto(activ.getPhoto().replaceFirst("client/public",""));
          }
          List<ActivityDTO> activityDTOList = activities.stream().map(act->activityMapper.fromActivity(act)).collect(Collectors.toList());
          return activityDTOList;

    }

    @Override
    public List<ActivityDTO> displayActivitiesForGuests(){
        List<Long> clubIds = activityRepository.findDistinctClubIds();
        List<Activity> top2Activities = new ArrayList<>();
        for (Long clubId :clubIds) {
            List<Activity> activities = activityRepository.findTop2ActivitiesPerClub(clubId);
            top2Activities.addAll(activities.subList(0, Math.min(activities.size(), 2)));
        }
        List<ActivityDTO> activityDTOS = top2Activities.stream().map(activity -> activityMapper.fromActivity(activity)).collect(Collectors.toList());
        return activityDTOS;

    }

}
