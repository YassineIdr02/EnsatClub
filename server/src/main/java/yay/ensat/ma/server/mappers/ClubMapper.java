package yay.ensat.ma.server.mappers;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import yay.ensat.ma.server.dtos.ClubDTO;
import yay.ensat.ma.server.dtos.ClubDTO2;
import yay.ensat.ma.server.models.Club;

@Service
public class ClubMapper {
    private MemberMapper memberMapper;

    public ClubMapper(MemberMapper memberMapper) {
        this.memberMapper = memberMapper;
    }

    public Club fromClubDTo(ClubDTO clubDTO)
    {
        Club club = new Club();
        BeanUtils.copyProperties(clubDTO,club);
        return club;

    }

    public ClubDTO fromClub(Club club)
    {
        ClubDTO clubDTO = new ClubDTO();
        BeanUtils.copyProperties(club,clubDTO);
        if(club.getPresident()!=null)
        {clubDTO.setPresident(memberMapper.fromMember(club.getPresident()));}
        return clubDTO;

    }

    public ClubDTO2 fromClubs(Club club){
        ClubDTO2 clubDTO2 = new ClubDTO2();
        BeanUtils.copyProperties(club,clubDTO2);
        return clubDTO2;
    }

}
