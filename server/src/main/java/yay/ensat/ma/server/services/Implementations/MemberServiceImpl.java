package yay.ensat.ma.server.services.Implementations;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yay.ensat.ma.server.models.Member;
import yay.ensat.ma.server.repositories.ClubRepository;
import yay.ensat.ma.server.repositories.MemberRepository;
import yay.ensat.ma.server.security.models.AppUser;
import yay.ensat.ma.server.security.repositories.AppUserRepository;
import yay.ensat.ma.server.security.services.SecurityService;
import yay.ensat.ma.server.services.Interfaces.MemberService;

@Service
@Transactional
public class MemberServiceImpl implements MemberService {
    private MemberRepository memberRepository;
   // private MemberMapper memberMapper;
   // private ClubMapper clubMapper;
    private AppUserRepository appUserRepository;
    private ApplicationEventPublisher eventPublisher;
    private ClubRepository clubRepository;
    private SecurityService securityService;

    public MemberServiceImpl(MemberRepository memberRepository, AppUserRepository appUserRepository, ApplicationEventPublisher eventPublisher, ClubRepository clubRepository, SecurityService securityService) {
        this.memberRepository = memberRepository;
        this.appUserRepository = appUserRepository;

        //this.memberMapper = memberMapper;
        //this.clubMapper = clubMapper;
        this.eventPublisher = eventPublisher;
        this.securityService = securityService;
        this.clubRepository = clubRepository;
    }

    //@Override
   /*public Member saveMember(Member member) {
        Member savedmember = memberRepository.save(member);
        AppUser appUser = new AppUser();
        appUser.setUsername(member.getName()+"@1");
        appUser.setPassword("1234");
        securityService.saveNewUser(appUser);
        return savedmember;

    }
 */
 /*@Override
   public MemberDTO saveMember(MemberDTO memberDTO,String clubName) {
     Club club = clubRepository.findByName(clubName);
     if(club != null ){
     //Member member=memberMapper.fromMemberDTO(memberDTO);
     member.setClub(club);
     Member savedmember = memberRepository.save(member);
     eventPublisher.publishEvent(new MemberSavedEvent(savedmember));
     return memberMapper.fromMember(savedmember);
     }
     else {throw new RuntimeException("Club Not Found");}
     }*/

    @Override
    public Member saveMember(Member member) {
        return null;
    }

    @Override
    public void associatePresidentToClub(Long memberId, String clubName) {

    }

}
