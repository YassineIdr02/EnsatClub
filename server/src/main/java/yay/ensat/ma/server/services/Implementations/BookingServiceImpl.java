package yay.ensat.ma.server.services.Implementations;

import org.springframework.stereotype.Service;
import yay.ensat.ma.server.dtos.BookingDTO;
import yay.ensat.ma.server.emailConfig.EmailSenderService;
import yay.ensat.ma.server.mappers.BookingMapper;
import yay.ensat.ma.server.models.Booking;
import yay.ensat.ma.server.models.Club;
import yay.ensat.ma.server.repositories.BookingRepository;
import yay.ensat.ma.server.repositories.ClubRepository;
import yay.ensat.ma.server.services.Interfaces.BookingService;

import java.util.Date;

@Service
public class BookingServiceImpl implements BookingService {
    private EmailSenderService emailSenderService;
    private BookingRepository bookingRepository;
    private BookingMapper bookingMapper;
    private ClubRepository clubRepository;

    public BookingServiceImpl(EmailSenderService emailSenderService, BookingRepository bookingRepository, BookingMapper bookingMapper, ClubRepository clubRepository) {
        this.emailSenderService = emailSenderService;
        this.bookingRepository = bookingRepository;
        this.bookingMapper = bookingMapper;
        this.clubRepository = clubRepository;
    }

    @Override
    public BookingDTO newreservation(BookingDTO bookingDTO) {
        Booking booking = bookingMapper.fromBookingDTO(bookingDTO);
        Club club = clubRepository.findById(bookingDTO.getClub_id()).orElse(null);
        booking.setDate(bookingDTO.getDate());
        booking.setClub(club);
        Booking savedBooking = bookingRepository.save(booking);
        BookingDTO bookingDTO1 = bookingMapper.fromBooking(savedBooking);
        emailSenderService.sendEmail("yassine.idrissi1@etu.uae.ac.ma","Réservation de Salle",
                "Bonjour Madame Chaimae,\n" +
                        "\n" +
                        "Nous sommes intéressés par la réservation d'une salle dans votre établissement pour notre prochain événement. Voici les détails de notre demande :\n" +
                        "\n" +
                        "Club : "+booking.getClub().getName()+" \n" +
                        "Événement : "+booking.getEventName()+" \n" +
                        "Date : "+booking.getDate()+" \n" +
                        "Salle : "+booking.getSalle() +" \n"+
                        "Participants : "+booking.getParticipants()+" \n" +
                        "Pourriez-vous nous fournir les informations suivantes :\n" +
                        "\n" +
                        "1.Disponibilité de la salle pour les dates mentionnées.\n" +
                        "2.Tarifs de réservation.\n" +
                        "3.Tout autre détail pertinent.\n" +
                        "Merci pour votre assistance. Nous sommes impatients de recevoir votre réponse.\n" +
                        "\n" +
                        "Cordialement,");
        return bookingDTO1 ;
    }
}
