package yay.ensat.ma.server.services.Interfaces;

import org.springframework.stereotype.Service;
import yay.ensat.ma.server.dtos.BookingDTO;

@Service
public interface BookingService {

    BookingDTO newreservation(BookingDTO bookingDTO);
}
