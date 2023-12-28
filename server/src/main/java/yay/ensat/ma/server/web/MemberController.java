package yay.ensat.ma.server.web;

import org.springframework.web.bind.annotation.RestController;
import yay.ensat.ma.server.dtos.MemberDTO;
import yay.ensat.ma.server.services.Interfaces.MemberService;

@RestController
public class MemberController {
    private MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    public MemberDTO newMember(MemberDTO memberDTO){
        return memberService.saveMember(memberDTO,memberDTO.getClub_id());
    }
}
