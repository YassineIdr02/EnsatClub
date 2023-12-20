package yay.ensat.ma.server.mappers;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import yay.ensat.ma.server.dtos.ActivityDTO;
import yay.ensat.ma.server.models.Activity;
import yay.ensat.ma.server.models.Club;
import yay.ensat.ma.server.models.Gallery;
import yay.ensat.ma.server.repositories.ClubRepository;
import yay.ensat.ma.server.repositories.GalleryRepository;

import java.util.Date;

@Service
public class ActivityMapper {
    private ClubRepository clubRepository;
    private GalleryRepository galleryRepository;

    public ActivityMapper(ClubRepository clubRepository, GalleryRepository galleryRepository) {
        this.clubRepository = clubRepository;
        this.galleryRepository = galleryRepository;
    }

    public ActivityDTO fromActivity(Activity activity){

        ActivityDTO activityDTO = new ActivityDTO();
        BeanUtils.copyProperties(activity,activityDTO);
        activityDTO.setClub_id(activity.getClub().getId());
        activityDTO.setClubName(activity.getClub().getName());
        activityDTO.setGallery_id(activity.getGallery().getId());
        return activityDTO;
    }

    public Activity fromActivityDTO (ActivityDTO activityDTO, String imageUrl)
    {
        Activity activity = new Activity();
        Club club = clubRepository.findById(activityDTO.getClub_id()).orElseThrow(()->new RuntimeException("Club Not Found"));
        Gallery gallery = galleryRepository.findById(activityDTO.getGallery_id()).orElseThrow(()->new RuntimeException("Gallery Not Found"));
        BeanUtils.copyProperties(activityDTO,activity);
        activity.setCreatedAt(new Date());
        activity.setClub(club);
        activity.setGallery(gallery);
        activity.setPhoto(imageUrl);
        return activity;
    }
}
