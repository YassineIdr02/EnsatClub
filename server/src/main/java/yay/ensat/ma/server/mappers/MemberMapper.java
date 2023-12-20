package yay.ensat.ma.server.mappers;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import yay.ensat.ma.server.dtos.MemberDTO;
import yay.ensat.ma.server.models.Member;

@Service
public class MemberMapper {




    public MemberDTO fromMember(Member member)
    {
        MemberDTO memberDTO = new MemberDTO();
        BeanUtils.copyProperties(member,memberDTO);
        memberDTO.setClub_id(member.getClub().getId());
        return memberDTO;
    }

    public Member fromMemberDTO(MemberDTO memberDTO)
    {
        Member member = new Member();
        BeanUtils.copyProperties(memberDTO,member);

        return member;
    }




}

