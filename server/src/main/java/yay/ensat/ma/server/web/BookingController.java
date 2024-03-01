package yay.ensat.ma.server.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import yay.ensat.ma.server.dtos.BookingDTO;
import yay.ensat.ma.server.services.Interfaces.BookingService;
@RestController
public class BookingController {
    private BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/newreservation")
    @CrossOrigin(origins = "http://localhost:5173",allowCredentials = "true")
    public BookingDTO newreservation(BookingDTO bookingDTO)
    {
     return bookingService.newreservation(bookingDTO);
    }
}
