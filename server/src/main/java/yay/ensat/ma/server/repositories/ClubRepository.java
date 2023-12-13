package yay.ensat.ma.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import yay.ensat.ma.server.models.Club;

public interface ClubRepository extends JpaRepository<Club,Long> {
  Club findByName (String clubName);
}
