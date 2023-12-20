package yay.ensat.ma.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import yay.ensat.ma.server.models.Activity;

import java.util.List;

public interface ActivityRepository extends JpaRepository<Activity,Long> {

    List<Activity> findByClubId(Long clubId);

    @Query("SELECT DISTINCT a.club.id FROM Activity a")
    List<Long> findDistinctClubIds();

    @Query("SELECT a FROM Activity a WHERE a.club.id IN :clubIds ORDER BY a.club.id, a.createdAt DESC")
    List<Activity> findTop2ActivitiesPerClub(@Param("clubIds") Long clubIds);
}
