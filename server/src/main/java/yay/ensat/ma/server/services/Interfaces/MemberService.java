package yay.ensat.ma.server.services.Interfaces;





public interface MemberService {
  //MemberDTO saveMember(MemberDTO memberDTO,String clubName);
  void associatePresidentToClub(Long memberId,String clubName);
}
