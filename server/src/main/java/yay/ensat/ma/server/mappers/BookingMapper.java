package yay.ensat.ma.server.mappers;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import yay.ensat.ma.server.dtos.BookingDTO;
import yay.ensat.ma.server.dtos.MemberDTO;
import yay.ensat.ma.server.models.Booking;
import yay.ensat.ma.server.models.Member;

@Service
public class BookingMapper {

    public Booking fromBookingDTO(BookingDTO bookingDTO)
    {
        Booking booking = new Booking();
        BeanUtils.copyProperties(bookingDTO,booking);
        return booking;
    }

    public BookingDTO fromBooking(Booking booking)
    {
        BookingDTO bookingDTO = new BookingDTO();
        BeanUtils.copyProperties(booking,bookingDTO);
        bookingDTO.setClub_id(booking.getClub().getId());
        return bookingDTO;
    }
}
