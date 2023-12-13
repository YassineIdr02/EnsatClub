package yay.ensat.ma.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import yay.ensat.ma.server.models.Activity;

public interface ActivityRepository extends JpaRepository<Activity,Long> {

}
