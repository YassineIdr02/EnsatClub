package yay.ensat.ma.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import yay.ensat.ma.server.models.Club;

import java.util.List;

public interface ClubRepository extends JpaRepository<Club,Long> {
  Club findByName (String clubName);

  @Query(value = "SELECT c.id, c.name, c.description, COUNT(a.id) AS cmpt" +
          "FROM Club c" +
          " JOIN activities a ON c.id = a.club_id" +
          "GROUP BY c.id, c.name, c.description" +
          "ORDER BY cmpt DESC",nativeQuery = true)
  List<Club> all();

}
