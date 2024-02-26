package yay.ensat.ma.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import yay.ensat.ma.server.models.Booking;

public interface BookingRepository extends JpaRepository<Booking,Long> {

}
