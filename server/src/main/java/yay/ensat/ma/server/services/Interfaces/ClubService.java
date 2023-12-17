package yay.ensat.ma.server.services.Interfaces;

import org.springframework.stereotype.Service;
import yay.ensat.ma.server.dtos.ClubDTO;
import yay.ensat.ma.server.dtos.ClubDTO2;
import yay.ensat.ma.server.dtos.MemberDTO;

import java.util.List;

@Service
public interface ClubService {
    ClubDTO saveClub(ClubDTO clubDTO);
    List<ClubDTO2> getAllClubs ();
    ClubDTO  getClub(Long club_Id);
    List<MemberDTO> getClubMembers(Long club_id);

    MemberDTO associatePresidentToAClub(MemberDTO memberDTO, Long club_id);
}
