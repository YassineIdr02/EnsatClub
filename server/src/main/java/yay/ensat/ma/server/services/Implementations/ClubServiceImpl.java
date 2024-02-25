package yay.ensat.ma.server.services.Implementations;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yay.ensat.ma.server.Events.ClubSavedEvent;
import yay.ensat.ma.server.dtos.ClubDTO;
import yay.ensat.ma.server.dtos.ClubDTO2;
import yay.ensat.ma.server.dtos.MemberDTO;
import yay.ensat.ma.server.mappers.ClubMapper;
import yay.ensat.ma.server.mappers.MemberMapper;
import yay.ensat.ma.server.models.Club;
import yay.ensat.ma.server.models.Member;
import yay.ensat.ma.server.repositories.ClubRepository;
import yay.ensat.ma.server.services.Interfaces.ClubService;
import yay.ensat.ma.server.services.Interfaces.MemberService;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ClubServiceImpl implements ClubService {
    private ClubRepository clubRepository;
    private ClubMapper clubMapper;
    private MemberMapper memberMapper;
    private MemberService memberService;
    private ApplicationEventPublisher eventPublisher;

    public ClubServiceImpl(ClubRepository clubRepository, ClubMapper clubMapper, MemberMapper memberMapper, MemberService memberService, ApplicationEventPublisher eventPublisher) {
        this.clubRepository = clubRepository;
        this.clubMapper = clubMapper;
        this.memberMapper = memberMapper;
        this.memberService = memberService;
        this.eventPublisher = eventPublisher;
    }

    /**
     * this function serve to register a club without a president
     * @param clubDTO
     * @return
     */
    @Override
    public ClubDTO saveClub(ClubDTO clubDTO) {
        Club club = clubMapper.fromClubDTo(clubDTO);
        club.setCreatedAt(new Date());
        Club savedClub = clubRepository.save(club);
        eventPublisher.publishEvent(new ClubSavedEvent(savedClub));
        return clubMapper.fromClub(savedClub);
    }

    /**
     * this method serve to display all clubs
     * @return (ClubName,ClubId,Logo )
     */
    @Override
    public List<ClubDTO2> getAllClubs() {
        List<Club> clubs = clubRepository.all();
        List<ClubDTO2> clubDTO2s = clubs.stream().map(club ->clubMapper.fromClubs(club)).collect(Collectors.toList());
        return clubDTO2s;
    }

    /**
     * This method server to display a specific Club
     * @param club_id
     * @return
     */
    @Override
    public ClubDTO getClub(Long club_id) {
        Club club = clubRepository.findById(club_id).orElseThrow(()->new RuntimeException("Club Not Found"));
        return clubMapper.fromClub(club);
    }

    /**
     * This  method serve to display  all members of a specific club
     * @param club_id
     * @return
     */
    @Override
    public List<MemberDTO> getClubMembers(Long club_id) {
        Club club = clubRepository.findById(club_id).orElseThrow(()-> new RuntimeException("Club Not Found"));
        List<Member>members = club.getMembers();
        List <MemberDTO> memberDTOS = members.stream().map(member ->memberMapper.fromMember(member) ).collect(Collectors.toList());
        return memberDTOS;
    }

    /**
     * this method serve to create a new Member as a President and associates to a specific club
     * @param memberDTO
     * @param club_id
     * @return
     */
    @Override
    public  MemberDTO associatePresidentToAClub(MemberDTO memberDTO, Long club_id){
        Club club =  clubRepository.findById(club_id).orElseThrow(()-> new RuntimeException("Club Not Found"));
        MemberDTO savedmember= memberService.saveMember(memberDTO, club_id);
        club.setPresident(memberMapper.fromMemberDTO(savedmember));
        clubRepository.save(club);
        return savedmember;
    }

    @Override
    public MemberDTO getPresident(Long club_id)
    {
        Club club = clubRepository.findById(club_id).orElse(null);
        Member member = club.getPresident();
        return memberMapper.fromMember(member);
    }


}
