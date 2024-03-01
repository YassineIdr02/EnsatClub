package yay.ensat.ma.server.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingDTO {
    private Long id;
    private Long club_id;
    private String EventName;
    private int Participants;
    private String date;
    private String salle;
}
