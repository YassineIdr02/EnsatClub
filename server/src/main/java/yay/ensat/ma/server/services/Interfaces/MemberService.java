package yay.ensat.ma.server.services.Interfaces;


import yay.ensat.ma.server.models.Member;

public interface MemberService {
    Member saveMember(Member member);

    //MemberDTO saveMember(MemberDTO memberDTO,String clubName);
  void associatePresidentToClub(Long memberId,String clubName);
}
