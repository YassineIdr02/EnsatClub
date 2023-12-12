package yay.ensat.ma.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import yay.ensat.ma.server.entities.Event;

public interface EventsRepository extends JpaRepository<Event,Long> {

}
