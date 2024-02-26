package yay.ensat.ma.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import yay.ensat.ma.server.models.Club;

import java.util.List;

public interface ClubRepository extends JpaRepository<Club,Long> {
  Club findByName (String clubName);

  @Query(value = "SELECT c.id, c.name, c.description, c.president_id,c.created_at FROM Club c LEFT JOIN activity a ON c.id = a.club_id GROUP BY c.id, c.name, c.description ORDER BY COUNT(a.id) DESC",nativeQuery = true)
  List<Club> all();
}
