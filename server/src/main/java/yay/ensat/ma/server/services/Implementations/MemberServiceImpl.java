package yay.ensat.ma.server.services.Implementations;


import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yay.ensat.ma.server.Events.MemberSavedEvent;
import yay.ensat.ma.server.dtos.MemberDTO;
import yay.ensat.ma.server.mappers.ClubMapper;
import yay.ensat.ma.server.mappers.MemberMapper;
import yay.ensat.ma.server.models.Club;
import yay.ensat.ma.server.models.Member;
import yay.ensat.ma.server.repositories.ClubRepository;
import yay.ensat.ma.server.repositories.MemberRepository;
import yay.ensat.ma.server.security.models.AppUser;
import yay.ensat.ma.server.security.services.SecurityService;
import yay.ensat.ma.server.services.Interfaces.MemberService;

@Service
@Transactional
public class MemberServiceImpl implements MemberService {
    private MemberRepository memberRepository;
    private MemberMapper memberMapper;
    private ClubMapper clubMapper;
    private SecurityService securityService;
    private ApplicationEventPublisher eventPublisher;
    private ClubRepository clubRepository;

    public MemberServiceImpl(MemberRepository memberRepository,
                             MemberMapper memberMapper,
                             ClubMapper clubMapper,
                             SecurityService securityService, ApplicationEventPublisher eventPublisher,
                             ClubRepository clubRepository) {
        this.memberRepository = memberRepository;
        this.memberMapper = memberMapper;
        this.clubMapper = clubMapper;
        this.securityService = securityService;
        this.eventPublisher = eventPublisher;
        this.clubRepository = clubRepository;
    }

   // @Override
   /*public MemberDTO saveMember(MemberDTO memberDTO) {
       Member member=dtoMapper.fromMemberDTO(memberDTO);
        Member savedmember = memberRepository.save(member);
        AppUser appUser = new AppUser();
        appUser.setUsername(member.getName()+"@1");
        appUser.setPassword("1234");
        appUserService.saveNewUser(appUser);
        return dtoMapper.fromMember(savedmember);
    }*/

 @Override
   public MemberDTO saveMember(MemberDTO memberDTO, Long clubId) {
         Club club = clubRepository.findById(clubId).orElse(null);
         Member member = memberMapper.fromMemberDTO(memberDTO);
         member.setClub(club);
         Member savedmember = memberRepository.save(member);
         eventPublisher.publishEvent(new MemberSavedEvent(savedmember));
         MemberDTO memberDTO1 = memberMapper.fromMember(savedmember);
         return memberDTO1;

 }

 @Override
    public String clubId(String username){
     AppUser appUser = securityService.loadUserByUserName(username);
     Member member = memberRepository.findById(appUser.getMember().getId()).orElse(null);
     String clubid = String.valueOf(member.getClub().getId());
     return clubid;
 }



}
