package yay.ensat.ma.server.web;

import org.springframework.web.bind.annotation.*;
import yay.ensat.ma.server.dtos.ClubDTO;
import yay.ensat.ma.server.dtos.ClubDTO2;
import yay.ensat.ma.server.dtos.MemberDTO;
import yay.ensat.ma.server.services.Interfaces.ClubService;

import java.util.List;

@RestController
public class ClubController {
    private ClubService clubService;

    public ClubController(ClubService clubService) {
        this.clubService = clubService;
    }

    @PostMapping("/newclub")
    @CrossOrigin(origins = "http://localhost:5173",allowCredentials = "true")
    public ClubDTO newClub(ClubDTO clubDTO){
        return clubService.saveClub(clubDTO);
    }

    @GetMapping("/allclubs")
    @CrossOrigin(origins = "http://localhost:5173",allowCredentials = "true")
    public List<ClubDTO2> allClubs(){
        return clubService.getAllClubs();
    }

    @GetMapping("/club/{club_id}")
    @CrossOrigin(origins = "http://localhost:5173",allowCredentials = "true")
    public ClubDTO club(@PathVariable("club_id") Long club_id){
        return clubService.getClub(club_id);
    }

    @GetMapping("/clubmembers/{club_id}")
    @CrossOrigin(origins = "http://localhost:5173",allowCredentials = "true")
    public List<MemberDTO> clubMembers(@PathVariable("club_id") Long club_id){
        return  clubService.getClubMembers(club_id);
    }

    @PostMapping("/associatepres/{club_id}/yay")
    @CrossOrigin(origins = "http://localhost:5173",allowCredentials = "true")
    public MemberDTO clubPresident( MemberDTO memberDTO, @PathVariable("club_id") Long club_id){
        return clubService.associatePresidentToAClub(memberDTO,club_id);
    }

    @GetMapping("/clubpresident/{club_id}")
    @CrossOrigin(origins = "http://localhost:5173",allowCredentials = "true")
    public MemberDTO thePresident(@PathVariable("club_id") Long club_id){
        return clubService.getPresident(club_id);
    }

}
