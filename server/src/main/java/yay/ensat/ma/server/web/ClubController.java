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
    public List<ClubDTO2> allClubs(){
        return clubService.getAllClubs();
    }

    @GetMapping("/club/{club_id}")
    public ClubDTO club(@PathVariable("club_id") Long club_id){
        return clubService.getClub(club_id);
    }

    @GetMapping("/clubmemebers/{club_id}")
    public List<MemberDTO> clubMembers(@PathVariable("club_id") Long club_id){
        return  clubService.getClubMembers(club_id);
    }

    @PostMapping("/associatepres/{club_id}/hhhh")
    public MemberDTO clubPresident( MemberDTO memberDTO, @PathVariable("club_id") Long club_id){
        return clubService.associatePresidentToAClub(memberDTO,club_id);
    }

}
