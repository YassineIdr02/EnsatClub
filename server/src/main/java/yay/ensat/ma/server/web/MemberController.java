package yay.ensat.ma.server.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import yay.ensat.ma.server.dtos.MemberDTO;
import yay.ensat.ma.server.services.Interfaces.MemberService;

@RestController
@CrossOrigin(origins = "http://localhost:5173",allowCredentials = "true")
public class MemberController {
    private MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/newmember")
    public MemberDTO newMember(MemberDTO memberDTO){
        return memberService.saveMember(memberDTO,memberDTO.getClub_id());
    }
}
