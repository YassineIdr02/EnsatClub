package yay.ensat.ma.server.Listeners;

import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import yay.ensat.ma.server.Events.ClubSavedEvent;
import yay.ensat.ma.server.models.Club;
import yay.ensat.ma.server.models.Gallery;
import yay.ensat.ma.server.repositories.GalleryRepository;

@Component
public class ClubSavedListener implements ApplicationListener<ClubSavedEvent> {
    private GalleryRepository galleryRepository;

    public ClubSavedListener(GalleryRepository galleryRepository) {
        this.galleryRepository = galleryRepository;
    }

    @Override
    public void onApplicationEvent(ClubSavedEvent event) {
        Gallery gallery = new Gallery();
        Club club = (Club) event.getSource();
        gallery.setClub(club);
        gallery.setName(club.getName()+"Gallery");
        galleryRepository.save(gallery);


    }
}
