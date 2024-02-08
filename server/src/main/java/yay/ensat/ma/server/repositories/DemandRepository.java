package yay.ensat.ma.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import yay.ensat.ma.server.models.Demand;

import java.util.List;

public interface DemandRepository extends JpaRepository<Demand,Long>{
    List<Demand> findByClubId (Long club_id);
    List <Demand> findByClubIdAndAndStatus(Long club_id,String status);
}
