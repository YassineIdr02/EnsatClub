package yay.ensat.ma.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import yay.ensat.ma.server.models.Gallery;

public interface GalleryRepository extends JpaRepository<Gallery,Long> {

}
