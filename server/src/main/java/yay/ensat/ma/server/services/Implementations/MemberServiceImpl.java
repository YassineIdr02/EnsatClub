package yay.ensat.ma.server.services.Implementations;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yay.ensat.ma.server.repositories.ClubRepository;
import yay.ensat.ma.server.repositories.MemberRepository;
import yay.ensat.ma.server.services.Interfaces.MemberService;

@Service
@Transactional
public class MemberServiceImpl implements MemberService {
    private MemberRepository memberRepository;
   // private MemberMapper memberMapper;
   // private ClubMapper clubMapper;
    private ApplicationEventPublisher eventPublisher;
    private ClubRepository clubRepository;

    /*public MemberServiceImpl(MemberRepository memberRepository, AppUserRepository appUserRepository,  MemberMapper memberMapper, ClubMapper clubMapper, ApplicationEventPublisher eventPublisher, ClubRepository clubRepository) {
        this.memberRepository = memberRepository;
        this.memberMapper = memberMapper;
        this.clubMapper = clubMapper;
        this.eventPublisher = eventPublisher;
        this.clubRepository = clubRepository;
    }*/

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
    public void associatePresidentToClub(Long memberId, String clubName) {

    }

}