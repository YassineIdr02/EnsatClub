package yay.ensat.ma.server.web;

import jakarta.annotation.Nullable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import yay.ensat.ma.server.dtos.ActivityDTO;
import yay.ensat.ma.server.services.Interfaces.ActivityService;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
public class ActivityController {
    private ActivityService activityService;
    private String uploadDir = "src/main/resources/uploads";

    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }

    @PostMapping("/newActivity")
    public ActivityDTO saveActivity(ActivityDTO activityDTO, @RequestParam(name = "file")@Nullable MultipartFile file) throws IOException {
        if (file != null){
           String fileName = StringUtils.cleanPath(file.getOriginalFilename());
           Path uploadPath = Paths.get(uploadDir);
           if (!Files.exists(uploadPath)) {
               Files.createDirectories(uploadPath);
           }
           try (InputStream inputStream = file.getInputStream()) {
               Path filePath = uploadPath.resolve(fileName);
               Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);

               return activityService.saveActivity(activityDTO, uploadDir + "/" + fileName);
           }
       }
       else {
           return activityService.saveActivity(activityDTO, null);

       }

    }

    @GetMapping("/clubactivities/{club_id}")
    public List<ActivityDTO> getClubActivities(@PathVariable(name = "club_id") Long club_id){

        return activityService.getActivitiesOfClub(club_id);
    }

    @GetMapping("/ensat_club_activities")
    public List<ActivityDTO> guestView(){
        return activityService.displayActivitiesForGuests();
    }
}


